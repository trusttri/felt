<script lang="ts">
	import type {OnboardData} from '$lib/sketch/onboard/onboard';
	import Markup from '$lib/ui/Markup.svelte';
	import {arrowLeft, arrowRight} from '$lib/ui/icons';

	export let data: OnboardData;
	export let done: () => void;
	export let back: () => void;

	// TODO can't find a better good way to silence these warnings
	data;

	let understood = false;
</script>

<Markup>
	<p>Before we create your (fake) account, are you sure you understand the deal?</p>
	<button on:click={() => back()}> <Markup>{arrowLeft} go back and learn</Markup> </button>
	<blockquote>🌈✨ if you don't know the deal, it's not consentful</blockquote>
	<button on:click={() => (understood = true)} disabled={understood}>
		<Markup>yes I understand {arrowRight}</Markup>
	</button>
	{#if understood}
		<p>
			Here's <a
				href="/deal"
				on:click|preventDefault={() => alert('TODO -- thank you for being interested!')}
				>a link to the documents</a
			>
			for the future, and you can always find help in your
			<a
				href="/account"
				on:click|preventDefault={() => alert('TODO -- thank you for being interested!')}
				>account settings</a
			>.
		</p>
		<button on:click={() => done()}> create my account {arrowRight} </button>
	{/if}
</Markup>
