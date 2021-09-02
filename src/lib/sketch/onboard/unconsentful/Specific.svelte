<script lang="ts">
	import type {OnboardData} from '$lib/sketch/onboard/onboard';
	import Markup from '$lib/ui/Markup.svelte';
	import Checkbox from '$lib/ui/Checkbox.svelte';
	import {arrowRight} from '$lib/ui/icons';

	export let data: OnboardData;
	export let done: () => void;
	export let back: () => void;

	// TODO can't find a better good way to silence these warnings
	data;
	back;

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

	const toggleSelected = (selected: boolean, space: Space) => {
		space.selected = selected;
	};
</script>

<Markup>
	<p>Now it's time to join some communities!</p>

	<div>
		{#each spaces as space (space.name)}
			<Checkbox checked={space.selected} onChange={(checked) => toggleSelected(checked, space)}>
				{space.name}
			</Checkbox>
		{/each}
	</div>

	<button on:click={() => done()}>
		<Markup>let's start posting {arrowRight}</Markup>
	</button>
</Markup>
