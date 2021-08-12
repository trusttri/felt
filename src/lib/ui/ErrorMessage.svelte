<script lang="ts">
	import Message from '$lib/ui/Message.svelte';

	export let text: string | null;
	export let icon: string = '‼';
</script>

<Message {text} icon="‼" color="var(--error_color)" />
