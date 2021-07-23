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
	.markup > :global(*:last-child) {
		margin-bottom: 0;
	}
	.markup :global(h1) {
		margin: var(--spacing_xl2) 0;
	}
	.markup :global(h2) {
		margin: var(--spacing_xl) 0;
	}
	.markup :global(h3) {
		margin: var(--spacing_lg) 0;
	}
	.markup :global(ul),
	.markup :global(ol) {
		margin-bottom: var(--spacing_lg);
		padding-left: var(--spacing_xl2);
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
	.markup :global(button) {
		margin-bottom: var(--spacing_lg);
	}
</style>
