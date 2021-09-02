<script lang="ts">
	import type {ConsentPrinciple} from '$lib/sketch/onboard/consent';
	import {
		handPointLeft,
		handPointRight,
		arrowRight,
		faceThink,
		faceBlush,
		faceWink,
	} from '$lib/ui/icons';
	import Markup from '$lib/ui/Markup.svelte';

	export let principle: ConsentPrinciple;
	export let consentfulOnLeftSide: boolean;
	export let done: () => void; // could pass `correct` if we want to use it

	let correct: boolean | null = null;

	const choose = (side: 'left' | 'right'): void => {
		correct = side === 'left' ? consentfulOnLeftSide : !consentfulOnLeftSide;
	};
</script>

<div class="sides-complete">
	<div class="icon">
		{#if correct === null}{faceThink}{:else if correct}{faceBlush}{:else}{faceWink}{/if}
	</div>
	<div class="prompt">
		{#if correct === null}
			which feels<br />
			{principle.type}?
		{:else if correct}
			we think<br />
			so too
		{:else}
			we meant<br />
			the opposite
		{/if}
	</div>
	<div class="buttons">
		{#if correct === null}
			<button on:click={() => choose('left')}>{handPointLeft}</button>
			<button on:click={() => choose('right')}>{handPointRight}</button>
		{:else}
			<button on:click={() => done()}>continue {arrowRight}</button>
		{/if}
	</div>
	<div class="column summary">
		<Markup>
			<p>
				{principle.summary}
			</p>
		</Markup>
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
		z-index: 5;
		width: 100%;
		min-height: 100%;
		background-color: var(--tint_overlay);
	}
	.prompt {
		text-align: center;
		font-size: var(--font_size_xl3);
		font-weight: bold;
	}
	.icon {
		font-size: var(--font_size_xl6);
	}
	.buttons {
		max-width: var(--column_width);
		width: 100%;
		display: flex;
		margin: var(--spacing_xl) 0;
	}
	button {
		flex: 1;
		font-size: var(--font_size_xl4);
	}
	.summary {
		font-size: var(--font_size_xl2);
		font-weight: bold;
		margin-bottom: var(--spacing_xl);
	}
</style>
