// public API for `@feltcoop/felt`:

export * as icons from '$lib/ui/icons.js';
export * from '$lib/util/types.js';

export type {AsyncStatus} from '$lib/util/async.js';
export {wait} from '$lib/util/async.js';

// TODO consider what top-level public API makes sense -
// for now we're preferring deep imports to specific modules -
// these are Gro's old exports:
// // utils
// export type {SpawnedProcess, SpawnResult} from '$lib/util/process.js';
// export type {Lazy} from '$lib/util/function.js';
// export {UnreachableError} from '$lib/util/error.js';
// export {last, to_array, EMPTY_ARRAY} from '$lib/util/array.js';
// export type {Log, LoggerState} from '$lib/util/log.js';
// export {
// 	LogLevel,
// 	Logger,
// 	SystemLogger,
// 	DevLogger,
// 	ENV_LOG_LEVEL,
// 	DEFAULT_LOG_LEVEL,
// 	configure_log_level,
// 	print_log_label,
// } from '$lib/util/log.js';
// export {Timings, create_stopwatch} from '$lib/util/timings.js';
// export type {Stopwatch} from '$lib/util/timings.js';
