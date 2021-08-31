<script lang="ts">
	import {to_path_segments} from '$lib/util/path_parsing';

	export let path: string;
	export let selected_path: string | null = null;

	// TODO extract elsewhere
	type Segment =
		| {
				type: 'space';
				path: string;
				name: string;
		  }
		| {
				type: 'separator';
				path: string;
		  };
	const to_segments = (raw_path: string): Segment[] => {
		let segments: Segment[] = [];
		const path_segments = to_path_segments(raw_path);
		if (path_segments.length) {
			segments.push({type: 'separator', path: '/'});
		}
		let path = '';
		for (let i = 0; i < path_segments.length; i++) {
			const path_segment = path_segments[i];
			path += '/';
			path += path_segment;
			segments.push({type: 'space', name: path_segment, path});
			if (i !== path_segments.length - 1) {
				segments.push({type: 'separator', path});
			}
		}
		return segments;
	};

	$: segments = to_segments(path);
</script>

<div class="link-path">
	<slot />
	{#each segments as segment}
		{#if segment.type === 'space'}
			<a href={segment.path} class:selected={segment.path === selected_path}>{segment.name}</a>
		{:else}
			<span class="separator">/</span>
		{/if}
	{/each}
</div>

<style>
	/* TODO this doesn't quite work, need to defer to parent */
	.link-path {
		display: flex;
		justify-content: center;
		align-items: stretch;
		flex-wrap: wrap;
		padding: var(--spacing_md) 0;
	}
	/* TODO how to improve this? is global to select slots */
	.link-path :global(a) {
		position: relative;
		z-index: 1;
		padding: 0 var(--spacing_sm);
		display: flex;
		align-items: center;
	}
	.separator {
		position: relative;
		z-index: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 0;
	}
</style>
