<script lang="ts">
	import type {Onboard_Data} from '$lib/sketch/onboard/onboard';
	import Markup from '$lib/ui/Markup.svelte';

	export let data: Onboard_Data;
	export let done: () => void;
	export let back: () => void;

	// TODO can't find a better good way to silence these warnings
	data;
	back;
</script>

<Markup>
	<p>Here's the deal:</p>
	<ol>
		<li>this is fake</li>
		<li>we are not collecting any data, big or little</li>
		<li>you will not have an account at the end of all this</li>
	</ol>
	<button on:click={() => done()}> <Markup>I accept ✓</Markup> </button>
</Markup>
