<script lang="ts">
	import PendingAnimation from '$lib/ui/PendingAnimation.svelte';

	export let pending: boolean;
	export let paused: boolean | undefined = undefined;
	export let el: HTMLButtonElement | undefined = undefined;
</script>

<button {...$$restProps} class:pending bind:this={el} on:click>
	<div class="content">
		<slot />
	</div>
	{#if pending}
		<div class="animation">
			<PendingAnimation {paused} />
		</div>
	{/if}
</button>

<style>
	button {
		position: relative;
	}
	.content {
		display: contents;
	}
	.pending .content {
		visibility: hidden;
	}
	.animation {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
