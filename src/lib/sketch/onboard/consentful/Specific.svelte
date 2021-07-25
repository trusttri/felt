<script lang="ts">
	import type {Onboard_Data} from '$lib/sketch/onboard/onboard';
	import Markup from '$lib/ui/Markup.svelte';
	import Checkbox from '$lib/ui/Checkbox.svelte';
	import Tag from '$lib/ui/Tag.svelte';
	import {arrow_right} from '$lib/ui/icons';

	export let data: Onboard_Data;
	export let done: () => void;
	export let back: () => void;

	// TODO can't find a better good way to silence these warnings
	data;
	back;

	interface Space {
		name: string;
		selected: boolean;
		tags: string[];
	}

	const spaces: Space[] = [
		{
			name: 'Open Source Web Devs',
			selected: false,
			tags: ['programming', 'example code', 'javascript', 'frontend', '1000+ users'],
		},
		{
			name: 'Local Developers',
			selected: false,
			tags: ['<1000 users', 'local politics', 'job postings', 'dogs', 'beer'],
		},
		{
			name: 'Online Academics',
			selected: false,
			tags: ['flowers', 'animation', 'dance', '1000+ users', 'design'],
		},
		{
			name: 'Gamer Group',
			selected: false,
			tags: ['indie dev', 'social', 'off topic', '<50 users', 'fanart'],
		},
	];

	let selected_spaces = spaces.filter((c) => c.selected);
	$: selected_count = selected_spaces.length;

	const toggle_selected = (selected: boolean, space: Space) => {
		space.selected = selected;
		selected_spaces = spaces.filter((c) => c.selected);
	};
</script>

<Markup>
	<p>Now it's time to join some communities!</p>

	<div>
		{#each spaces as space (space.name)}
			<Checkbox checked={space.selected} on_change={(checked) => toggle_selected(checked, space)}>
				<div>
					{space.name}
				</div>
				<ul class="tags">
					{#each space.tags as tag (tag)}
						<li class="tag">
							<Tag name={tag} />
						</li>
					{/each}
				</ul>
			</Checkbox>
		{/each}
	</div>

	<button on:click={() => done()}>
		<Markup>
			{#if selected_count}
				join these spaces {arrow_right}
			{:else}
				maybe later {arrow_right}
			{/if}
		</Markup>
	</button>
</Markup>

<style>
	.tags {
		flex: 1;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		padding-left: var(--spacing_sm);
	}
	.tag {
		display: flex;
		list-style: none;
	}
</style>
