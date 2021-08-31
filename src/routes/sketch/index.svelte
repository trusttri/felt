<script lang="ts">
	import SketchList from '$lib/sketch/SketchList.svelte';
	import {sketches} from '$lib/sketch/sketch';
</script>

<nav class="column">
	<div>
		<SketchList {sketches} />
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
	}
</style>
