<script lang="ts">
	import type {Writable} from 'svelte/store';

	import {is_editable} from '$lib/util/dom';

	export let devmode: Writable<boolean>;
	export let auto: boolean = true; // pass `false` to manually toggle

	const on_window_keydown = (e: KeyboardEvent) => {
		if (!(e.target instanceof HTMLElement && is_editable(e.target))) {
			if (e.key === '`') {
				$devmode = !$devmode;
			}
		}
	};
</script>

<svelte:window on:keydown={auto ? on_window_keydown : undefined} />

{#if $devmode}
	<button on:click={() => ($devmode = !$devmode)} />
{/if}

<style>
	button {
		position: fixed;
		right: var(--spacing_sm);
		bottom: var(--spacing_sm);
		opacity: var(--faded_3);
	}
	button::before {
		content: '⚙';
	}
	button:hover::before {
		content: '✕';
	}
</style>
