<div class="markup">
	<slot />
</div>

<style>
	/* TODO consider setting vars instead of selecting each thing */
	.markup {
		width: 100%;
		overflow-wrap: break-word;
		/* TODO maybe move padding to `.content` or `<Content>` ? */
		padding: var(--spacing_lg);
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	.markup > :global(*:last-child) {
		margin-bottom: 0;
	}
	.markup :global(h1) {
		margin: var(--spacing_xl) 0;
	}
	.markup :global(h2) {
		margin: var(--spacing_lg) 0;
	}
	.markup :global(h3) {
		margin: var(--spacing_md) 0;
	}
	.markup :global(ul),
	.markup :global(ol) {
		margin-bottom: var(--spacing_md);
		padding-left: var(--spacing_xl);
		list-style: disc;
	}
	.markup :global(ol) {
		list-style: decimal;
	}
	.markup :global(li) {
		display: list-item;
	}
	.markup :global(p) {
		margin-bottom: var(--spacing_md);
	}
	.markup :global(button) {
		margin-bottom: var(--spacing_md);
	}
</style>
