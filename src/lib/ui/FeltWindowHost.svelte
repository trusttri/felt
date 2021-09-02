<script lang="ts">
	export let query: () => any; // TODO a real API

	const on_window_message = (e: MessageEvent) => {
		// TODO show request modal to user so they can accept/deny
		// the iframe's connection/data/capability request
		if (e.data === 'felt__connect') {
			// TODO security -- is the '*' ok in this case?
			(e.source as any).postMessage('felt__connected', '*');
		} else if (e.data === 'felt__query') {
			// TODO a real API
			(e.source as any).postMessage(JSON.stringify({type: 'Message', payload: query()}), '*');
		}
	};
</script>

<svelte:window on:message={on_window_message} />
