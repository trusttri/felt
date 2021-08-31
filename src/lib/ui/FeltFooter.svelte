<script lang="ts">
	import TwitterLogo from '$lib/ui/TwitterLogo.svelte';
	import GithubLogo from '$lib/ui/GithubLogo.svelte';
	import {felt} from '$lib/ui/icons';

	const size = 64;
</script>

<footer style="--icon_size: {size}px">
	<slot>{felt}</slot>
	<div class="social">
		<a class="focusable" href="https://twitter.com/feltcoop" rel="noopener">
			<TwitterLogo {size} />
		</a>
		<a class="focusable" href="https://github.com/feltcoop" rel="noopener">
			<GithubLogo {size} />
		</a>
	</div>
	<a href="mailto:team@felt.social">team@felt.social</a>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.social {
		display: flex;
		margin-bottom: var(--spacing_lg);
	}
	.social a {
		text-decoration: none;
		width: var(--icon_size);
		height: var(--icon_size);
		margin: 0 var(--spacing_sm);
	}
</style>
