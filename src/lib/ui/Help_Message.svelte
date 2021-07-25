<script lang="ts">
	import Message from '$lib/ui/Message.svelte';

	export let text: string | null;
</script>

<Message {text} icon="ⓘ" color="var(--help_color)" />
