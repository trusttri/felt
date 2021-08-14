<script lang="ts">
	import type {OnboardSend, OnboardState} from '$lib/sketch/onboard/onboard';
	import MachineControls from '$lib/xstate/MachineControls.svelte';
	import {onboard_machine} from '$lib/sketch/onboard/onboard';
	import {get_devmode} from '$lib/ui/devmode';
	import {arrow_left, arrow_right} from '$lib/ui/icons';

	export let state: OnboardState;
	export let send: OnboardSend;

	const devmode = get_devmode();

	// console.log('onboard_machine', onboard_machine);
	$: state_ids = Object.keys(onboard_machine.states);

	// $: console.log('$state.value', $state.value);

	const select = (state_id: string) => {
		const state_id_index = state_ids.indexOf(state_id);
		const old_id_index = state_ids.indexOf($state.value as string);
		const direction = old_id_index > state_id_index ? -1 : 1;
		const event_name = direction > 0 ? 'NEXT' : 'PREVIOUS';
		while ($state.value !== state_id) {
			send(event_name);
		}
	};

	const on_keydown = (e: KeyboardEvent) => {
		if (e.key === 'ArrowRight') {
			send('NEXT');
		} else if (e.key === 'ArrowLeft') {
			send('PREVIOUS');
		}
	};
</script>

<!-- TODO make this compose -->
<svelte:window on:keydown={$devmode ? on_keydown : undefined} />

<div>
	{#if $devmode}
		<nav class="buttons">
			<MachineControls
				machine={onboard_machine}
				{state}
				{send}
				let:event_name
				events={['PREVIOUS', 'NEXT']}
			>
				{event_name === 'PREVIOUS' ? arrow_left : ''}
				{event_name}
				{event_name === 'NEXT' ? arrow_right : ''}
			</MachineControls>
		</nav>
	{/if}
	<nav>
		{#each state_ids as state_id (state_id)}
			<button
				disabled={!$devmode && state_id !== $state.value}
				class:selected={state_id === $state.value}
				on:click={$devmode ? () => select(state_id) : undefined}
			>
				{state_id}
			</button>
		{/each}
	</nav>
</div>

<style>
	.buttons {
		display: flex;
		justify-content: stretch;
		align-items: stretch;
	}
</style>
