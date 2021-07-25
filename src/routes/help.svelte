<script lang="ts">
	import Message from '$lib/ui/Message.svelte';
</script>

<div class="column">
	<Message status="help" text="todo" />
	<div>
		<a href="https://github.com/feltcoop/felt/issues">github.com/feltcoop/felt/issues</a>
	</div>
</div>

<style>
	.column {
		margin: auto;
	}
	div {
		padding: var(--spacing_xl) 0;
		text-align: center;
	}
</style>
