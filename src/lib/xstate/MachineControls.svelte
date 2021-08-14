<script lang="ts">
	import type {StateMachine, State, Send} from '$lib/xstate/machine';

	export let machine: StateMachine;
	export let state: State;
	export let send: Send;
	export let events: string[] | null = null;

	$: state_node = machine.states[$state.value as any];
	// $: console.log('state_node', state_node);

	let final_events: string[];
	$: final_events = events || machine.events;
</script>

{#each final_events as event_name (event_name)}
	<button on:click={() => send(event_name)} disabled={!state_node.handles(event_name)}>
		<slot {event_name}>
			{event_name}
		</slot>
	</button>
{/each}

<style>
	button {
		text-transform: lowercase;
	}
</style>
