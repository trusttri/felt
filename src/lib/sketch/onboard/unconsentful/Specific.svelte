<script lang="ts">
	import type {Onboard_Data} from '$lib/sketch/onboard/onboard';
	import Markup from '$lib/ui/Markup.svelte';
	import Checkbox from '$lib/ui/Checkbox.svelte';
	import {arrow_right} from '$lib/ui/icons';

	export let data: Onboard_Data;
	export let done: () => void;
	export let back: () => void;

	interface Space {
		name: string;
		selected: boolean;
	}

	const spaces: Space[] = [
		{name: 'GOOD NEWS', selected: true},
		{name: 'BAD NEWS', selected: true},
		{name: 'DOPAMINE DRIP', selected: true},
		{name: 'RAGE FACTORY', selected: true},
	];

	const toggle_selected = (selected: boolean, space: Space) => {
		space.selected = selected;
	};
</script>

<Markup>
	<p>Now it's time to join some communities!</p>

	<div>
		{#each spaces as space (space.name)}
			<Checkbox checked={space.selected} on_change={(checked) => toggle_selected(checked, space)}>
				{space.name}
			</Checkbox>
		{/each}
	</div>

	<button on:click={() => done()}>
		<Markup>let's start posting {arrow_right}</Markup>
	</button>
</Markup>
