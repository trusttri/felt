<script lang="ts">
	import type {MessageStatus} from '$lib/ui/message';
	import {messageStatusOptions} from '$lib/ui/message';

	export let status: MessageStatus = 'normal';
	export let icon: string | null | undefined = undefined; // TODO maybe change to a slot
	export let color: string | null | undefined = undefined;

	$: finalIcon = icon === undefined ? messageStatusOptions[status].icon : icon;
	$: finalColor = color === undefined ? messageStatusOptions[status].color : color;
</script>

<div class="message" style={finalColor ? `--color: ${finalColor}` : undefined}>
	<span class="icon">{finalIcon}</span>
	<slot />
</div>

<style>
	.message {
		min-height: var(--message_min_height);
		width: 100%;
		color: var(--color);
		font-weight: var(--font_weight_4);
		font-size: var(--font_size_lg);
		border-width: 0 0 var(--border_width_3) var(--border_width_1);
		background-color: var(--tint_highlight);
		border-style: var(--border_style);
		border-color: var(--color);
		display: flex;
		align-items: center;
		padding: var(--spacing_xs2) var(--spacing_xs);
		margin-bottom: var(--spacing_lg);
	}
	.message:last-child {
		margin-bottom: 0;
	}
	.icon {
		padding-right: var(--spacing_md);
		font-size: var(--font_size_xl2);
	}
</style>
