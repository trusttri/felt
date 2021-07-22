<script lang="ts">
	import {useMachine} from '@xstate/svelte';

	import {consent_principles} from '$lib/sketch/onboard/consent';
	import type {Consent_Type, Consent_Principle_Type} from '$lib/sketch/onboard/consent';
	import {onboard_machine, onboard_data, save_state} from '$lib/sketch/onboard/onboard';
	import type {Onboard_State_Name} from '$lib/sketch/onboard/onboard';
	import Nav from '$lib/sketch/onboard/Nav.svelte';
	import Begin from '$lib/sketch/onboard/Begin.svelte';
	import End from '$lib/sketch/onboard/End.svelte';
	import Side_Complete from '$lib/sketch/onboard/Side_Complete.svelte';
	import Sides_Complete from '$lib/sketch/onboard/Sides_Complete.svelte';
	import {random_bool} from '$lib/util/random';

	const onboard = useMachine(onboard_machine);
	const {state, send} = onboard;
	// $: console.log('$state', $state);

	// TODO types
	$: principle =
		($state.value as string) in consent_principles
			? consent_principles[$state.value as Consent_Principle_Type]
			: null;

	// TODO probably move to an xstate machine, somehow
	let done_with_consentful_side = false;
	let done_with_unconsentful_side = false;
	let done_with_both = false;
	let consentful_on_left_side = random_bool();

	const reset = (state_value: string) => {
		done_with_consentful_side = false;
		done_with_unconsentful_side = false;
		done_with_both = false;
		// the consentful side of the 'informed' page explains how things work,
		// so we always put it on the left in hopes the user reads it first
		consentful_on_left_side = state_value === 'informed' ? true : random_bool();
	};

	const done_with_side = (consentful: Consent_Type) => {
		if (consentful === 'consentful') {
			done_with_consentful_side = true;
			if (done_with_unconsentful_side) {
				done_with_both = true;
			}
		} else {
			done_with_unconsentful_side = true;
			if (done_with_consentful_side) {
				done_with_both = true;
			}
		}
	};
	const done_with_both_sides = () => {
		send('NEXT');
	};
	const back = () => {
		send('PREVIOUS');
	};

	$: reset($state.value as any); // TODO type
	$: save_state($state.value); // TODO better pattern?

	$: consentful_data = onboard_data.consentful[$state.value as Onboard_State_Name]; // TODO fix type in ../onboard.ts
	$: unconsentful_data = onboard_data.unconsentful[$state.value as Onboard_State_Name]; // TODO fix type in ../onboard.ts
</script>

<div class="onboard">
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
		{:else if unconsentful_data.component && consentful_data.component}
			<section class="column" class:swapped={consentful_on_left_side}>
				<svelte:component
					this={unconsentful_data.component}
					data={unconsentful_data}
					done={() => done_with_side('unconsentful')}
					{back}
				/>
				{#if done_with_unconsentful_side && !done_with_both}
					<Side_Complete left={!consentful_on_left_side} />
				{/if}
			</section>
			<section class="column">
				<svelte:component
					this={consentful_data.component}
					data={consentful_data}
					done={() => done_with_side('consentful')}
					{back}
				/>
				{#if done_with_consentful_side && !done_with_both}
					<Side_Complete left={consentful_on_left_side} />
				{/if}
			</section>
			{#if done_with_both}
				{#if principle}
					<Sides_Complete {principle} {consentful_on_left_side} done={done_with_both_sides} />
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
		/* make the onboard sketch 2x the normal column width */
		max-width: calc(2 * var(--column_width));
		min-width: calc(2 * var(--column_width_min));
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.content {
		position: relative;
		height: 100%;
		display: flex;
		justify-content: center;
	}
	section {
		position: relative;
		height: 100%;
		flex: 1;
		flex-shrink: 0; /* keep equal size regardless of content */
		display: flex;
		flex-direction: column;
		align-items: stretch;
		/* TODO should this be on `.column` ? */
		border-left: var(--border);
		border-right: var(--border);
		border-bottom: var(--border);
	}
	.swapped {
		order: 1;
	}
</style>
