<script lang="ts">
	import {toPathSegments} from '$lib/util/pathParsing';

	export let path: string;
	export let selectedPath: string | null = null;

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
	const toSegments = (rawPath: string): Segment[] => {
		let segments: Segment[] = [];
		const pathSegments = toPathSegments(rawPath);
		if (pathSegments.length) {
			segments.push({type: 'separator', path: '/'});
		}
		let path = '';
		for (let i = 0; i < pathSegments.length; i++) {
			const pathSegment = pathSegments[i];
			path += '/';
			path += pathSegment;
			segments.push({type: 'space', name: pathSegment, path});
			if (i !== pathSegments.length - 1) {
				segments.push({type: 'separator', path});
			}
		}
		return segments;
	};

	$: segments = toSegments(path);
</script>

<div class="link-path">
	<slot />
	{#each segments as segment}
		{#if segment.type === 'space'}
			<a href={segment.path} class:selected={segment.path === selectedPath}>{segment.name}</a>
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
