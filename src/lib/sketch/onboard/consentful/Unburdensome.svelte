<script lang="ts">
	import type {Onboard_Data} from '$lib/sketch/onboard/onboard';
	import Markup from '$lib/ui/Markup.svelte';
	import {arrow_right} from '$lib/ui/icons';

	export let data: Onboard_Data;
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
					"We're still working on this, but if you actually want help you can email us at team@felt.social",
				)}>felt.dev/help</a
		>
	</blockquote>

	<button on:click={() => done()}>
		<Markup>let's get started {arrow_right}</Markup>
	</button>
</Markup>
