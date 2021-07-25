<script lang="ts">
	import {page} from '$app/stores';
	import Onboard from '$lib/sketch/onboard/Onboard.svelte';
	import Library from '$lib/sketch/library/Library.svelte';

	$: slug = $page.params.slug;
	$: console.log('slug', slug);
</script>

<!-- TODO loading these eagerly is no good -->
{#if slug === 'onboard'}
	<Onboard />
{:else if slug === 'library'}
	<Library />
{:else}
	unknown slug: {slug}
{/if}
