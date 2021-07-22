<script lang="ts">
	import type {Consent_Principle} from '$lib/sketch/onboard/consent';
	import {point_left, point_right, arrow_right} from '$lib/ui/icons';

	export let principle: Consent_Principle;
	export let consentful_on_left_side: boolean;
	export let done: () => void; // could pass `correct` if we want to use it

	let correct: boolean | null = null;

	const choose = (side: 'left' | 'right'): void => {
		correct = side === 'left' ? consentful_on_left_side : !consentful_on_left_side;
	};
</script>

<div class="sides-complete">
	<div class="icon">
		{#if correct === null}🤔{:else if correct}😊{:else}😉{/if}
	</div>
	<div class="prompt">
		{#if correct === null}
			which feels {principle.type}?
		{:else if correct}
			we think so too
		{:else}
			we meant the opposite
		{/if}
	</div>
	<div class="buttons">
		{#if correct === null}
			<button on:click={() => choose('left')}>{point_left}</button>
			<button on:click={() => choose('right')}>{point_right}</button>
		{:else}
			<button on:click={() => done()}>continue {arrow_right}</button>
		{/if}
	</div>
	<div class="column summary">
		{principle.summary}
	</div>
</div>

<style>
	.sides-complete {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 3;
		width: 100%;
		min-height: 100%;
		background-color: var(--tint_overlay);
	}
	.prompt {
		text-align: center;
		font-size: var(--font_size_xl2);
		font-weight: bold;
		/* in case the text slightly overflows, we don't want to make the buttons move */
		white-space: nowrap;
	}
	.icon {
		font-size: var(--font_size_xl5);
	}
	.buttons {
		max-width: var(--column_width);
		width: 100%;
		display: flex;
		margin: var(--spacing_lg) 0;
	}
	button {
		flex: 1;
		font-size: var(--font_size_xl3);
	}
	.summary {
		font-size: var(--font_size_xl);
		font-weight: bold;
		margin-bottom: var(--spacing_lg);
	}
</style>
