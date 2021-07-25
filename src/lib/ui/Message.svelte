<script lang="ts">
	export let text: string | null;
	export let icon: string | null = null;
	// using a prop here because passing the css var prop causes its `display: contents` div
	// to break selectors (margin in Markup)
	export let color: string = 'var(--tint)';
</script>

{#if text}
	<div class="message" style="--color: {color}">
		<div class="wrapper">
			<span>
				{#if icon}
					<span class="icon">{icon}</span>
				{/if}
				<!-- TODO probably make this a slot instead -->
				{text}
			</span>
		</div>
	</div>
{/if}

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
	.wrapper {
		width: 100%;
		padding: var(--spacing_md) var(--spacing_xs);
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
</style>
