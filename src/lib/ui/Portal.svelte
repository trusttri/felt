<script lang="ts">
	import {onDestroy, createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher<{move: {el: HTMLElement; to: HTMLElement}}>();

	// Defaults to `undefined` to lessen friction with SSR.
	// We may want to change this to optionally accept a string selector,
	// but that didn't seem to be the best API for the `Modal`.
	export let to: HTMLElement | undefined;

	let el: HTMLElement | undefined;

	$: el && to && move(el, to);

	const move = (el: HTMLElement, to: HTMLElement): void => {
		to.appendChild(el);
		dispatch('move', {el, to});
	};

	onDestroy(() => {
		el?.parentNode?.removeChild(el);
	});
</script>

<div hidden>
	<div class="portal" bind:this={el}>
		<slot />
	</div>
</div>

<style>
	.portal {
		display: contents;
	}
</style>
