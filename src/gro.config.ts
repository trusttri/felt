import type {GroConfigCreator, GroConfigPartial} from '@feltcoop/gro';

const files = [
	// top level API: `import {...} from '@feltcoop/felt';`
	'lib/index.ts',

	// deep imports available to external consumers

	// ui components, styles, etc
	'lib/ui/Devmode.svelte',
	'lib/ui/devmode.ts',
	'lib/ui/FeltWindowGuest.svelte',
	'lib/ui/FeltWindowHost.svelte',
	'lib/ui/Markup.svelte',
	'lib/ui/Message.svelte',
	'lib/ui/Modal.svelte',
	'lib/ui/PendingAnimation.svelte',
	'lib/ui/PendingButton.svelte',
	'lib/ui/Portal.svelte',
	'lib/ui/style.css',

	// utils
	'lib/util/array.ts',
	'lib/util/async.ts',
	'lib/util/counter.ts',
	'lib/util/dom.ts',
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
	'lib/util/pathParsing.ts',
	'lib/util/print.ts',
	'lib/util/process.ts',
	'lib/util/random.ts',
	'lib/util/randomSeeded.ts',
	'lib/util/regexp.ts',
	'lib/util/string.ts',
	'lib/util/terminal.ts',
	'lib/util/timings.ts',
	'lib/util/types.ts',
];

export const config: GroConfigCreator = async ({dev}) => {
	const partial: GroConfigPartial = {
		builds: [dev ? null : {name: 'library', platform: 'node', input: files}],
	};
	return partial;
};
