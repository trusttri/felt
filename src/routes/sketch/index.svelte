<script lang="ts">
	import Markup from '$lib/ui/Markup.svelte';
	import {sketches} from '$lib/sketch/sketch';
</script>

<nav>
	<ol>
		{#each sketches as sketch (sketch.name)}
			<Markup>
				<li>
					<a href={sketch.id}>{sketch.name}</a>
				</li>
			</Markup>
		{/each}
	</ol>
</nav>

<style>
	ol {
		text-align: center;
	}
	li {
		font-size: var(--font_size_xl3);
	}
</style>
