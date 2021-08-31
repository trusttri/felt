<script>
	import '$lib/ui/style.css';
	import {set_devmode} from '$lib/ui/devmode';
	import Devmode from '$lib/ui/Devmode.svelte';
	import Nav from '$lib/ui/Nav.svelte';

	const devmode = set_devmode(false);
</script>

<svelte:head>
	<link rel="shortcut icon" href="/favicon.png" />
</svelte:head>

<main>
	<Nav />
	<slot />
</main>
<Devmode {devmode} />

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
