<script lang="ts">
	import {greenheart} from '$lib/ui/icons';
	import {page} from '$app/stores';
	import LinkPath from '$lib/ui/LinkPath.svelte';
</script>

<!-- TODO probably change to ul/li once styles are right -->

<nav>
	<LinkPath path={$page.path} selectedPath={$page.path}>
		{#if $page.path === '/'}
			<a href="/" class="selected">Felt.dev</a>
		{:else}
			<a href="/" class="heart">{greenheart}</a>
		{/if}
	</LinkPath>
</nav>

<style>
	nav {
		font-size: var(--font_size_xl);
	}
	.heart {
		min-width: var(--nav_height);
		font-size: var(--font_size_md);
	}
</style>
