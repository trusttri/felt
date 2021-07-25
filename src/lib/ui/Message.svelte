<script lang="ts">
	// if the slot is filled, `text` and `icon` are ignored
	export let text: string | null = null;
	export let icon: string | null = null;
	export let color: string | null = null;
	export let status: Message_Status = 'normal';

	export type Message_Status = 'normal' | 'help' | 'error';
	export interface Message_Status_Options {
		color: null | string;
		icon: string | null;
	}
	const options_by_status: Record<Message_Status, Message_Status_Options> = {
		normal: {color: 'var(--text_color_light)', icon: null},
		help: {color: 'var(--help_color)', icon: 'ⓘ'},
		error: {color: 'var(--error_color)', icon: '‼'},
	};

	$: final_icon = icon ?? options_by_status[status].icon;
	$: final_color = color ?? options_by_status[status].color;
</script>

<div class="message" style={final_color ? `--color: ${final_color}` : undefined}>
	<div class="wrapper">
		<slot>
			<span>
				{#if final_icon}
					<span class="icon">{final_icon}</span>
				{/if}
				{text}
			</span>
		</slot>
	</div>
</div>

<style>
	.message {
		min-height: var(--message_min_height);
		width: 100%;
		color: var(--color);
		font-weight: var(--font_weight, var(--font_weight_4));
		font-size: var(--font_size_lg);
		border-width: var(--border_width_1) var(--border_width_5);
		border-style: var(--border_style_2);
		border-color: var(--color);
		display: flex;
		align-items: stretch;
		padding: var(--spacing_xs2) var(--spacing_xs);
		margin-bottom: var(--spacing_lg);
	}
	.message:last-child {
		margin-bottom: 0;
	}
	.icon {
		padding-right: var(--spacing_sm);
	}
	/* TODO can we delete the wrapper? */
	.wrapper {
		width: 100%;
		padding: var(--spacing_md) var(--spacing_xs);
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
</style>
