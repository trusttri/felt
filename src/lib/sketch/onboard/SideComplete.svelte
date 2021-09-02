<script lang="ts">
	import {arrowLeft, arrowRight} from '$lib/ui/icons';

	export let left: boolean;
</script>

<div class="side">
	<div>now do this one</div>
	<div class="icon">
		{#if left}{arrowRight}{:else}{arrowLeft}{/if}
	</div>
</div>

<style>
	.side {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 6;
		min-height: 100%;
		width: 100%;
		background: var(--tint_overlay);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		font-size: var(--font_size_xl3);
		font-weight: bold;
		padding-top: var(--spacing_xl2);
	}
	.icon {
		font-size: var(--font_size_xl8);
		/* TODO improve this how? adjusts arrow height */
		line-height: 0.5;
		padding-bottom: var(--spacing_xl3);
	}
</style>
