<script lang="ts">
	import type {OnboardSend, OnboardState} from '$lib/sketch/onboard/onboard';
	import MachineControls from '$lib/xstate/MachineControls.svelte';
	import {onboardMachine} from '$lib/sketch/onboard/onboard';
	import {getDevmode} from '$lib/ui/devmode';
	import {arrowLeft, arrowRight} from '$lib/ui/icons';

	export let state: OnboardState;
	export let send: OnboardSend;

	const devmode = getDevmode();

	// console.log('onboardMachine', onboardMachine);
	$: stateIds = Object.keys(onboardMachine.states);

	// $: console.log('$state.value', $state.value);

	const select = (stateId: string) => {
		const stateIdIndex = stateIds.indexOf(stateId);
		const oldIdIndex = stateIds.indexOf($state.value as string);
		const direction = oldIdIndex > stateIdIndex ? -1 : 1;
		const eventName = direction > 0 ? 'NEXT' : 'PREVIOUS';
		while ($state.value !== stateId) {
			send(eventName);
		}
	};

	const onKeydown = (e: KeyboardEvent) => {
		if (e.key === 'ArrowRight') {
			send('NEXT');
		} else if (e.key === 'ArrowLeft') {
			send('PREVIOUS');
		}
	};
</script>

<!-- TODO make this compose -->
<svelte:window on:keydown={$devmode ? onKeydown : undefined} />

<div>
	{#if $devmode}
		<nav class="buttons">
			<MachineControls
				machine={onboardMachine}
				{state}
				{send}
				let:eventName
				events={['PREVIOUS', 'NEXT']}
			>
				{eventName === 'PREVIOUS' ? arrowLeft : ''}
				{eventName}
				{eventName === 'NEXT' ? arrowRight : ''}
			</MachineControls>
		</nav>
	{/if}
	<nav>
		{#each stateIds as stateId (stateId)}
			<button
				disabled={!$devmode && stateId !== $state.value}
				class:selected={stateId === $state.value}
				on:click={$devmode ? () => select(stateId) : undefined}
			>
				{stateId}
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
