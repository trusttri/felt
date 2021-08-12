import {spawn as spawn_child_process} from 'child_process';
import type {SpawnOptions, ChildProcess} from 'child_process';

import {gray, green, red} from '$lib/util/terminal.js';
import {print_log_label, SystemLogger} from '$lib/util/log.js';
import {print_error, print_key_value} from '$lib/util/print.js';
import type {Result} from '$lib/util/types.js';

const log = new SystemLogger(print_log_label('process'));

export interface SpawnedProcess {
	child: ChildProcess;
	closed: Promise<SpawnResult>;
}

// TODO are `code` and `signal` more related than that?
// e.g. should this be a union type where one is always `null`?
export type SpawnResult = Result<
	{signal: NodeJS.Signals | null},
	{signal: NodeJS.Signals | null; code: number | null}
>;

export const print_child_process = (child: ChildProcess): string =>
	`${gray('pid(')}${child.pid}${gray(')')} ← ${green(child.spawnargs.join(' '))}`;

// We register spawned processes gloabally so we can gracefully exit child processes.
// Otherwise, errors can cause zombie processes, sometimes blocking ports even!
export const global_spawn: Set<ChildProcess> = new Set();

// Returns a function that unregisters the `child`.
export const register_global_spawn = (child: ChildProcess): (() => void) => {
	if (global_spawn.has(child)) {
		log.error(red('already registered global spawn:'), print_child_process(child));
	}
	global_spawn.add(child);
	return () => {
		if (!global_spawn.has(child)) {
			log.error(red('spawn not registered:'), print_child_process(child));
		}
		global_spawn.delete(child);
	};
};

export const despawn = (child: ChildProcess): Promise<SpawnResult> => {
	let resolve: (v: SpawnResult) => void;
	const closed = new Promise<SpawnResult>((r) => (resolve = r));
	log.trace('despawning', print_child_process(child));
	child.once('close', (code, signal) => {
		resolve(code ? {ok: false, code, signal} : {ok: true, signal});
	});
	child.kill();
	return closed;
};

export const attach_process_error_handlers = (to_error_label?: ToErrorLabel): void => {
	process
		.on('uncaughtException', handle_fatal_error)
		.on('unhandledRejection', handle_unhandled_rejection(to_error_label));
};

const handle_fatal_error = async (err: Error, label = 'handle_fatal_error'): Promise<void> => {
	new SystemLogger(print_log_label(label, red)).error(print_error(err));
	await Promise.all(Array.from(global_spawn).map((child) => despawn(child)));
	process.exit(1);
};

const handle_unhandled_rejection =
	(to_error_label?: ToErrorLabel) =>
	(err: Error | any): Promise<void> => {
		const label = (to_error_label && to_error_label(err)) || 'unhandledRejection';
		return err instanceof Error
			? handle_fatal_error(err, label)
			: handle_fatal_error(new Error(err), label);
	};

interface ToErrorLabel {
	(err: Error | any): string | null;
}

// Wraps the normal Node `child_process.spawn` with graceful child shutdown behavior.
// Also returns a convenient `closed` promise.
// If you only need `closed`, prefer the shorthand function `spawn_process`.
export const spawn_process = (
	command: string,
	args: readonly string[] = [],
	options?: SpawnOptions,
): SpawnedProcess => {
	let resolve: (v: SpawnResult) => void;
	const closed = new Promise<SpawnResult>((r) => (resolve = r));
	const child = spawn_child_process(command, args, {stdio: 'inherit', ...options});
	const unregister = register_global_spawn(child);
	child.once('close', (code, signal) => {
		unregister();
		resolve(code ? {ok: false, code, signal} : {ok: true, signal});
	});
	return {closed, child};
};

// This is just a convenient promise wrapper around `spawn_process`
// that's intended for commands that have an end, not long running-processes like watchers.
// Any more advanced usage should use `spawn_process` directly for access to the `child` process.
export const spawn = (...args: Parameters<typeof spawn_process>): Promise<SpawnResult> =>
	spawn_process(...args).closed;

export const print_spawn_result = (result: SpawnResult): string => {
	if (result.ok) return 'ok';
	let text = result.code === null ? '' : print_key_value('code', result.code);
	if (result.signal !== null) text += (text ? ' ' : '') + print_key_value('signal', result.signal);
	return text;
};

// TODO might want to expand this API for some use cases - assumes always running
export interface RestartableProcess {
	restart: () => void;
	kill: () => Promise<void>;
}

// Handles many concurrent `restart` calls gracefully.
export const spawn_restartable_process = (
	command: string,
	args: readonly string[] = [],
	options?: SpawnOptions,
): RestartableProcess => {
	let spawned: SpawnedProcess | null = null;
	let restarting: Promise<any> | null = null;
	const close = async (): Promise<void> => {
		if (!spawned) return;
		restarting = spawned.closed;
		spawned.child.kill();
		spawned = null;
		await restarting;
		restarting = null;
	};
	const restart = async (): Promise<void> => {
		if (restarting) return restarting;
		await close();
		spawned = spawn_process(command, args, {stdio: 'inherit', ...options});
	};
	const kill = async (): Promise<void> => {
		if (restarting) await restarting;
		if (!spawned) return;
		await close();
	};
	restart(); // start on init
	return {restart, kill};
};
