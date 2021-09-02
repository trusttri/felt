<script lang="ts">
	import {onMount, createEventDispatcher} from 'svelte';

	import type {AsyncStatus} from '$lib/util/async';

	const dispatch = createEventDispatcher<{init: QueryPayload | undefined}>();

	onMount(async () => {
		let payload: QueryPayload | undefined = undefined;
		const host = window.parent;
		if (window !== host) {
			const connected = await connect_to_felt_host(host);
			if (connected) {
				payload = await query_host_data(host);
			}
		}
		dispatch('init', payload);
	});

	// TODO refactor
	let connect_status: AsyncStatus = 'initial';
	let resolve_connection: ((connected: boolean) => void) | undefined = undefined;
	let connect_timeout: number | undefined = undefined;
	const CONNECT_TIMEOUT = 100; // TODO ?
	const connect_to_felt_host = async (host: Window): Promise<boolean> => {
		if (connect_status !== 'initial') throw Error('Already connecting');
		return new Promise((resolve) => {
			resolve_connection = resolve;
			connect_status = 'pending';
			// TODO security -- pass origin, not '*'
			host.postMessage('felt__connect', '*');
			connect_timeout = setTimeout(() => {
				// if we're in an iframe with a host that isn't responding,
				// this timeout keeps things from hanging
				connect_status = 'failure';
				connect_timeout = undefined;
				resolve_connection!(false);
				resolve_connection = undefined;
			}, CONNECT_TIMEOUT) as any; // TODO DOM type?
		});
	};
	// TODO refactor
	type QueryPayload = {hue: number};
	let resolve_query: ((payload: QueryPayload) => void) | undefined = undefined;
	const query_host_data = async (host: Window): Promise<QueryPayload> => {
		return new Promise((resolve) => {
			resolve_query = resolve;
			host.postMessage('felt__query', '*');
		});
	};

	const on_message = (e: MessageEvent) => {
		console.log('on_message, e', e);
		if (typeof e.data === 'string') {
			if (e.data === 'felt__connected') {
				connect_status = 'success';
				clearTimeout(connect_timeout);
				connect_timeout = undefined;
				resolve_connection!(true);
				resolve_connection = undefined;
			} else {
				try {
					const parsed = JSON.parse(e.data);
					console.log('parsed', parsed);
					// TODO refactor
					if (parsed.type === 'Message') {
						if ('payload' in parsed) {
							resolve_query?.(parsed.payload);
							resolve_query = undefined;
						} else {
							console.warn('unhandled message', parsed);
						}
					} else {
						console.warn('unhandled json', parsed);
					}
				} catch (err) {
					console.warn('failed to parse message', err);
				}
			}
		} else {
			console.warn('unknown data type', e.data);
		}
	};
</script>

<svelte:window on:message={on_message} />
