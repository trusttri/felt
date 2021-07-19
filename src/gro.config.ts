import type {Gro_Config_Creator, Gro_Config_Partial} from '@feltcoop/gro';

const files = [
	// top level API: `import {...} from '@feltcoop/felt';`
	'lib/index.ts',

	// deep imports available to external consumers

	// ui components, styles, etc
	'lib/ui/Markup.svelte',
	'lib/ui/Pending_Animation.svelte',
	'lib/ui/style.css',

	// utils
	'lib/util/array.ts',
	'lib/util/async.ts',
	'lib/util/counter.ts',
	'lib/util/env.ts',
	'lib/util/equal.ts',
	'lib/util/error.ts',
	'lib/util/function.ts',
	'lib/util/id.ts',
	'lib/util/json.ts',
	'lib/util/lock.ts',
	'lib/util/log.ts',
	'lib/util/map.ts',
	'lib/util/math.ts',
	'lib/util/object.ts',
	'lib/util/obtainable.ts',
	'lib/util/path.ts',
	'lib/util/path_parsing.ts',
	'lib/util/print.ts',
	'lib/util/process.ts',
	'lib/util/random.ts',
	'lib/util/string.ts',
	'lib/util/terminal.ts',
	'lib/util/timings.ts',
	'lib/util/types.ts',
];

export const config: Gro_Config_Creator = async () => {
	const partial: Gro_Config_Partial = {
		builds: [{name: 'library', platform: 'node', input: files}],
	};
	return partial;
};
