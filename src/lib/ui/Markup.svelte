<div class="markup">
	<slot />
</div>

<style>
	/* TODO consider setting vars instead of selecting each thing */
	.markup {
		width: 100%;
		overflow-wrap: break-word;
		/* TODO maybe move padding to `.content` or `<Content>` ? */
		padding: var(--spacing_xl);
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	.markup :global(h1) {
		margin: var(--spacing_sm) 0 var(--spacing_xl2);
	}
	.markup :global(h2) {
		margin: var(--spacing_xs) 0 var(--spacing_xl);
	}
	.markup :global(h3) {
		margin: var(--spacing_xs2) 0 var(--spacing_lg);
	}
	.markup :global(ul),
	.markup :global(ol) {
		margin-bottom: var(--spacing_lg);
		padding-left: var(--spacing_xl4);
		list-style: disc;
	}
	.markup :global(ol) {
		list-style: decimal;
	}
	.markup :global(li) {
		display: list-item;
	}
	.markup :global(p) {
		margin-bottom: var(--spacing_lg);
	}
	.markup :global(button),
	:global(input),
	:global(textarea),
	:global(select),
	:global(.message) {
		margin-bottom: var(--spacing_lg);
	}
	.markup > :global(*:last-child),
	.markup :global(form) > :global(*:last-child),
	.markup :global(blockquote) > :global(*:last-child) {
		margin-bottom: 0;
	}
</style>
