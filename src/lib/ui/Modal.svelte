<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	import {browser} from '$app/env';

	import {is_editable} from '$lib/util/dom';
	import Portal from '$lib/ui/Portal.svelte';

	const ROOT_EL_ID = 'root'; // TODO where to put this? is the same as `kit.target` in `svelte.config.js`
	const CONTAINER_EL_ID = 'modal';

	const dispatch = createEventDispatcher<{close: undefined}>();

	export let container: HTMLElement | undefined = undefined;

	let container_el: HTMLElement | undefined;
	$: browser && update_container_el(container);

	const update_container_el = (container: HTMLElement | undefined): void => {
		if (container) {
			container_el = container;
		} else {
			const found = document.getElementById(CONTAINER_EL_ID);
			if (found) {
				container_el = found;
			} else {
				const root_el = document.getElementById(ROOT_EL_ID);
				if (!root_el) {
					throw Error(`Expected root HTML element with id ${ROOT_EL_ID}`);
				}
				container_el = document.createElement('div');
				container_el.id = CONTAINER_EL_ID;
				root_el.appendChild(container_el);
			}
		}
	};

	let el: HTMLElement;

	// TODO hook into a ui input system
	const on_window_keydown = (e: KeyboardEvent) => {
		if (!(e.target instanceof HTMLElement && is_editable(e.target))) {
			if (e.key === 'Escape') {
				dispatch('close');
			}
		}
	};

	// The modal isn't "ready" until the portal moves it.
	// Rendering the the modal's slot only once it's ready fixes things like `autofocus`.
	let ready = false;
</script>

<svelte:window on:keydown={on_window_keydown} />

<!-- the `tabindex` enables scrolling because SvelteKit puts it on the body -->
<Portal
	to={container_el}
	on:move={() => {
		ready = true;
		el.focus();
	}}
>
	<div class="modal" on:click={() => dispatch('close')} bind:this={el} tabindex="-1">
		<div class="pane" on:click|stopPropagation>
			{#if ready}
				<slot />
			{/if}
		</div>
	</div>
</Portal>

<style>
	.modal {
		overflow-y: scroll;
		height: 100%;
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 4;
		background-color: var(--overlay_bg);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 40px;
	}
	.pane {
		max-width: var(--column_width);
		background-color: var(--bg);
		box-shadow: 0px 6px 24px hsla(0, 100%, 0%, 0.8);
	}
</style>
