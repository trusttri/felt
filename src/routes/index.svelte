<script lang="ts">
	import SketchList from '$lib/sketch/SketchList.svelte';
	import FeltHeart from '$lib/ui/FeltHeart.svelte';
	import {sketches} from '$lib/sketch/sketch';
	import FeltFooter from '$lib/ui/FeltFooter.svelte';
</script>

<!-- <h1>@feltcoop/felt</h1> -->
<!-- TODO publish and link the above to npm -->

<section>
	<div class="learn">
		<a href="https://www.felt.social/about">
			<div>¿ learn about Felt ?</div>
			<FeltHeart />
		</a>
	</div>
</section>
<section>
	<h2><a href="/sketch">sketches</a></h2>
	<SketchList {sketches} />
</section>
<section>
	<FeltFooter />
</section>

<style>
	section {
		padding: var(--spacing_xl4) 0;
	}
	h2 {
		text-align: center;
	}
	a {
		font-size: var(--font_size_xl);
		font-weight: var(--font_weight_2);
	}
	.learn {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: var(--font_size_xl);
	}
	.learn a {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
