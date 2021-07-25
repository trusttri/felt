<script lang="ts">
	import type {Onboard_Data} from '$lib/sketch/onboard/onboard';
	import Markup from '$lib/ui/Markup.svelte';

	export let data: Onboard_Data;
	export let done: () => void;
	export let back: () => void;

	// TODO can't find a better good way to silence these warnings
	data;
	back;

	let username = '';
	let password = '';
</script>

<Markup>
	<form>
		<input bind:value={username} placeholder="username" />
		<input type="password" bind:value={password} placeholder="password" />
		<button type="button" on:click={() => done()}> create account </button>
	</form>
</Markup>
