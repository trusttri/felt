<script lang="ts">
	import type {Onboard_Send} from '$lib/sketch/onboard/onboard';
	import Markup from '$lib/ui/Markup.svelte';
	import Credits from '$lib/sketch/onboard/Credits.svelte';
	import {arrow_right} from '$lib/ui/icons';

	export let send: Onboard_Send;
</script>

<Markup>
	<h1>
		Welcome to the <a href="/">Felt.dev</a> consentful onboarding sketch!
	</h1>
	<p>This sketch is a proof of concept, side-by-side comparsion between two onboarding flows:</p>
	<ol>
		<li>one column uses dark design patterns that create an unconsentful experience</li>
		<li>
			the other column is designed with the affirmative consent framework described by <a
				href="https://consentful.systems">consentful.systems</a
			>
		</li>
	</ol>
	<p>
		The goal here is to compare and contrast the two perspectives. We hope you feel the difference!
	</p>
	<button on:click={() => send('NEXT')}>
		<Markup>
			click here to start {arrow_right}
		</Markup>
	</button>
	<Credits />
</Markup>
