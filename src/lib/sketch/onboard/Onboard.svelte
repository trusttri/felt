<script lang="ts">
	import {useMachine} from '@xstate/svelte';

	import {consentPrinciples} from '$lib/sketch/onboard/consent';
	import type {ConsentType, ConsentPrincipleType} from '$lib/sketch/onboard/consent';
	import {onboardMachine, onboardData} from '$lib/sketch/onboard/onboard';
	import type {OnboardStateName} from '$lib/sketch/onboard/onboard';
	import Nav from '$lib/sketch/onboard/Nav.svelte';
	import Begin from '$lib/sketch/onboard/Begin.svelte';
	import End from '$lib/sketch/onboard/End.svelte';
	import SideComplete from '$lib/sketch/onboard/SideComplete.svelte';
	import SidesComplete from '$lib/sketch/onboard/SidesComplete.svelte';
	import {randomBool} from '$lib/util/random';

	const onboard = useMachine(onboardMachine);
	const {state, send} = onboard;
	// $: console.log('$state', $state);

	// TODO types
	$: principle =
		($state.value as string) in consentPrinciples
			? consentPrinciples[$state.value as ConsentPrincipleType]
			: null;

	// TODO probably move to an xstate machine, somehow
	let doneWithConsentfulSide = false;
	let doneWithUnconsentfulSide = false;
	let doneWithBoth = false;
	let consentfulOnLeftSide = randomBool();

	const reset = (stateValue: string) => {
		doneWithConsentfulSide = false;
		doneWithUnconsentfulSide = false;
		doneWithBoth = false;
		// the consentful side of the 'informed' page explains how things work,
		// so we always put it on the left in hopes the user reads it first
		consentfulOnLeftSide = stateValue === 'informed' ? true : randomBool();
	};

	const doneWithSide = (consentful: ConsentType) => {
		if (consentful === 'consentful') {
			doneWithConsentfulSide = true;
			if (doneWithUnconsentfulSide) {
				doneWithBoth = true;
			}
		} else {
			doneWithUnconsentfulSide = true;
			if (doneWithConsentfulSide) {
				doneWithBoth = true;
			}
		}
	};
	const doneWithBothSides = () => {
		send('NEXT');
	};
	const back = () => {
		send('PREVIOUS');
	};

	$: reset($state.value as any); // TODO type

	$: consentfulData = onboardData.consentful[$state.value as OnboardStateName]; // TODO fix type in ../onboard.ts
	$: unconsentfulData = onboardData.unconsentful[$state.value as OnboardStateName]; // TODO fix type in ../onboard.ts
</script>

<div class="onboard column">
	<Nav {state} {send} />
	<div class="content">
		{#if $state.value === 'begin'}
			<section class="column">
				<Begin {send} />
			</section>
		{:else if $state.value === 'end'}
			<section class="column">
				<End />
			</section>
		{:else if unconsentfulData.component && consentfulData.component}
			<section class="column" class:swapped={consentfulOnLeftSide}>
				<svelte:component
					this={unconsentfulData.component}
					data={unconsentfulData}
					done={() => doneWithSide('unconsentful')}
					{back}
				/>
				{#if doneWithUnconsentfulSide && !doneWithBoth}
					<SideComplete left={!consentfulOnLeftSide} />
				{/if}
			</section>
			<section class="column">
				<svelte:component
					this={consentfulData.component}
					data={consentfulData}
					done={() => doneWithSide('consentful')}
					{back}
				/>
				{#if doneWithConsentfulSide && !doneWithBoth}
					<SideComplete left={consentfulOnLeftSide} />
				{/if}
			</section>
			{#if doneWithBoth}
				{#if principle}
					<SidesComplete {principle} {consentfulOnLeftSide} done={doneWithBothSides} />
				{:else}
					<!-- TODO a cleaner design would make this check unnecessary -->
					internal error: unprincipled! :(
				{/if}
			{/if}
		{/if}
	</div>
</div>

<style>
	.onboard {
		display: flex;
		flex-direction: column;
	}
	.content {
		position: relative;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	section {
		position: relative;
		height: 100%;
		flex: 1;
		flex-shrink: 0; /* keep equal size regardless of content */
		display: flex;
		flex-direction: column;
		align-items: stretch;
		margin-bottom: var(--spacing_xl6);
		border: var(--border);
	}
	.swapped {
		order: 1;
	}
	@media (max-width: 40rem) {
		.content {
			flex-direction: column;
		}
	}
</style>
