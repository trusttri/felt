import {gray, white, green, yellow} from '$lib/util/terminal.js';
import {round} from '$lib/util/math.js';
import {truncate} from '$lib/util/string.js';
import type {Timings} from '$lib/util/timings.js';
import type {Logger} from '$lib/util/log.js';
import {arrowLeft, bulletPoint} from '$lib/ui/icons.js';

export const printKeyValue = (key: string, val: string | number): string =>
	gray(`${key}(`) + val + gray(')');

export const printMs = (ms: number, decimals?: number | undefined): string => {
	if (decimals === undefined) {
		decimals = ms >= 10 ? 0 : ms < 0.1 ? 2 : 1;
	}
	return white(round(ms, decimals).toFixed(decimals)) + gray('ms');
};
export const printCauses = (solutions: string[]): string =>
	'\n	Possible causes:' + solutions.map((s) => `\n		${bulletPoint} ${s}`).join('');
export const printStr = (s: string): string => green(`'${s}'`);

export const printValue = (value: unknown): unknown => {
	switch (typeof value) {
		case 'string':
			return printStr(value);
		default:
			return value;
	}
};

const MAX_ERROR_LOG_LENGTH = 1000;

// Because throwing errors and rejecting promises isn't typesafe,
// don't assume the arg is an `Error` and try to return something useful.
export const printError = (err: Error): string =>
	truncate(
		yellow(
			(err && (err.stack || (err.message && `Error: ${err.message}`))) || `Unknown error: ${err}`,
		),
		MAX_ERROR_LOG_LENGTH,
	);

export const printTiming = (key: string | number, timing: number): string =>
	`${printMs(timing)} ${gray(arrowLeft)} ${gray(key)}`;

export const printTimings = (timings: Timings, log: Logger): void => {
	for (const [key, timing] of timings.getAll()) {
		log.trace(printTiming(key, timing));
	}
};
