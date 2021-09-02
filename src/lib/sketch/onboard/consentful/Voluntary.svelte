<script lang="ts">
	import type {OnboardData} from '$lib/sketch/onboard/onboard';
	import Markup from '$lib/ui/Markup.svelte';
	import Message from '$lib/ui/Message.svelte';

	export let data: OnboardData;
	export let done: () => void;
	export let back: () => void;

	// TODO can't find a better good way to silence these warnings
	data;
	back;

	let username = '';
	let password = '';

	const onKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			done();
		}
	};
</script>

<Markup>
	<Message status="inform">this is not a real sign-up</Message>
	<form>
		<input bind:value={username} placeholder="username" on:keydown={onKeydown} />
		<input type="password" bind:value={password} placeholder="password" on:keydown={onKeydown} />
		<button type="button" on:click={() => done()}> create account </button>
	</form>
</Markup>
