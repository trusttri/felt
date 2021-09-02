<script lang="ts">
	import {grin} from '$lib/ui/icons';
	import Markup from '$lib/ui/Markup.svelte';
	import Credits from '$lib/sketch/onboard/Credits.svelte';
	import {getDevmode} from '$lib/ui/devmode';

	const devmode = getDevmode();
</script>

<Markup>
	<h1>Thanks for playing!</h1>
	<p>
		We appreciate your time — hopefully you learned something & had some fun {grin}
	</p>
	<blockquote>
		questions or comments? open
		<a href="https://github.com/feltcoop/felt">a GitHub issue</a>
		or email us at <a href="mailto:team@felt.social">team@felt.social</a>
	</blockquote>
	<Credits />
	<blockquote>
		<p>
			to explore freely, press <code>`</code> aka <code>Backtick</code> or click this button:
		</p>
		<button type="button" on:click={() => ($devmode = !$devmode)}>
			{$devmode ? 'disable' : 'enable'} devmode
		</button>
	</blockquote>
</Markup>
