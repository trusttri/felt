<script lang="ts">
	import type {OnboardData} from '$lib/sketch/onboard/onboard';
	import Markup from '$lib/ui/Markup.svelte';
	import {arrowRight} from '$lib/ui/icons';

	export let data: OnboardData;
	export let done: () => void;
	export let back: () => void;

	// TODO can't find a better good way to silence these warnings
	data;
	back;
</script>

<Markup>
	<p>Welcome to Felt.dev!</p>
	<blockquote>
		need help? <a
			href="/help"
			on:click|preventDefault={() =>
				alert(
					"Our real stuff is all in progress, but if you're interested in consentful design or Felt stuff, say hi at team@felt.social",
				)}>felt.dev/help</a
		>
	</blockquote>

	<button on:click={() => done()}>
		<Markup>let's get started {arrowRight}</Markup>
	</button>
</Markup>
