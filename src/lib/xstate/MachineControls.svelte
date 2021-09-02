<script lang="ts">
	import type {StateMachine, State, Send} from '$lib/xstate/machine';

	export let machine: StateMachine;
	export let state: State;
	export let send: Send;
	export let events: string[] | null = null;

	$: stateNode = machine.states[$state.value as any];
	// $: console.log('stateNode', stateNode);

	let finalEvents: string[];
	$: finalEvents = events || machine.events;
</script>

{#each finalEvents as eventName (eventName)}
	<button on:click={() => send(eventName)} disabled={!stateNode.handles(eventName)}>
		<slot {eventName}>
			{eventName}
		</slot>
	</button>
{/each}

<style>
	button {
		text-transform: lowercase;
	}
</style>
