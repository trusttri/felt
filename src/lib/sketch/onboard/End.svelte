<script lang="ts">
	import {grin} from '$lib/ui/icons';
	import Markup from '$lib/ui/Markup.svelte';
	import Credits from '$lib/sketch/onboard/Credits.svelte';
	import {get_devmode} from '$lib/ui/devmode';

	const devmode = get_devmode();
</script>

<Markup>
	<h1>Thanks for playing!</h1>
	<p>We appreciate you taking the time to go through this sketch.</p>
	<p>We hope you learned something & had some fun in the process {grin}</p>
	<blockquote>
		if you have any questions or comments, open an issue
		<a href="https://github.com/feltcoop/felt">on GitHub</a>
		or email us at <a href="mailto:team@felt.social">team@felt.social</a>
	</blockquote>
	<Credits />
	<blockquote>
		<p>
			if you'd like to explore freely, press the <code>Backtick</code> key or click this button:
		</p>
		<button class="inline" on:click={() => ($devmode = !$devmode)}>
			{$devmode ? 'disable' : 'enable'} devmode
		</button>
	</blockquote>
</Markup>
