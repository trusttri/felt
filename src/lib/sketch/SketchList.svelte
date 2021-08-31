<script lang="ts">
	import Markup from '$lib/ui/Markup.svelte';
	import type {Sketch} from '$lib/sketch/sketch';

	export let sketches: Sketch[];
</script>

<Markup>
	<ol>
		{#each sketches as sketch (sketch.name)}
			<li>
				<a href={sketch.id}>{sketch.name}</a>
			</li>
		{/each}
	</ol>
</Markup>

<style>
	li {
		font-size: var(--font_size_xl3);
	}
</style>
