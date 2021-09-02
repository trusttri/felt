<script context="module" lang="ts">
	// TODO extract helper
	let idCount = 0;
	const toId = (): string => `Checkbox_${idCount++}`;
</script>

<script lang="ts">
	// TODO rethink this API, probably use events instead
	export let checked: boolean;
	export let onChange: ((checked: boolean) => void) | null = null;
	// using these instead of component custom props shorthand because it breaks global styles using `:last-child`
	export let content: string | undefined = undefined;
	export let contentEmpty: string | undefined = undefined;
	export let disabled: boolean | undefined = undefined;

	const id = toId();

	$: onChange && onChange(checked);
</script>

<label
	style="--content: {content ? `'${content}'` : ''}; --content_empty: {contentEmpty
		? `'${contentEmpty}'`
		: ''}"
	class="checkbox buttonlike"
	class:selected={checked}
	class:disabled
	for={id}
>
	<div class="content">
		<input
			{id}
			type="checkbox"
			bind:checked
			class:offset-for-checkmark={content === undefined}
			{disabled}
		/>
		<slot />
	</div>
</label>

<style>
	label {
		width: 100%;
		color: var(--text_color);
		font-size: var(--font_size_lg);
		display: flex;
		align-items: center;
		justify-content: center;
		border-width: var(--input_border_width);
		border-style: var(--input_border_style);
		border-color: var(--input_border_color);
		border-bottom-width: 0;
		border-left-width: 0;
		border-right-width: 0;
	}
	label:last-child {
		border-bottom-width: var(--input_border_width);
		margin-bottom: var(--spacing_lg);
	}
	/* the default checkmark needs to be offset to make it look right */
	.offset-for-checkmark::before {
		--left: 0.6rem;
		--top: -0.4rem;
	}
	.content {
		width: var(--column_width);
		padding: var(--spacing_lg) 0;
		display: flex;
		align-items: center;
	}
	input {
		margin: 0 var(--spacing_xl);
	}
</style>
