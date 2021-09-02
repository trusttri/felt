<script lang="ts">
	import type {OnboardData} from '$lib/sketch/onboard/onboard';
	import Markup from '$lib/ui/Markup.svelte';
	import Checkbox from '$lib/ui/Checkbox.svelte';
	import Message from '$lib/ui/Message.svelte';
	import {ballotMark} from '$lib/ui/icons';

	export let data: OnboardData;
	export let done: () => void;
	export let back: () => void;

	// TODO can't find a better good way to silence these warnings
	data;
	back;

	let consenting = true; // :-)
	let winCount = 0; // you did it!

	$: enableContinueButton = consenting;
</script>

<Markup>
	<p>
		<small>
			Here is our <a
				href="/privacy"
				on:click|preventDefault={() => alert('We "respect" your "privacy".')}
			>
				privacy policy
			</a>
			and
			<a
				href="/terms"
				on:click|preventDefault={() => alert("Just don't be unprofitable and we're good.")}
			>
				terms of service
			</a>
		</small>.
	</p>
	<p>
		Now click the win button! <button
			class="inline"
			class:selected={!!winCount}
			disabled={winCount > 10}
			on:click={() => winCount++}
		>
			win!!!
		</button>
	</p>
	{#if winCount}
		<p>
			Wow you did it!{#if winCount > 2}!{/if}{#if winCount > 5}!{/if} You win a doggy{#if winCount > 8}s{/if}:
			<span class="dog">🐕</span>
			{#if winCount > 8}<span class="dog">🐕</span>{/if}
		</p>
		<p>Now click "I accept" below for more rewards :-)</p>
	{/if}
	<div>
		<Checkbox bind:checked={consenting} content={ballotMark}>
			<Markup>
				<div>I consent to:</div>
				<ul>
					<li>everything I did not read</li>
					<li>everything I did read</li>
				</ul>
				whether or not I understand anything.
			</Markup>
		</Checkbox>
	</div>

	<button on:click={() => done()} disabled={!enableContinueButton}>
		<Markup>
			I accept I am legally bound to the above
			<br />
			and my only recourse is complaining on social media
		</Markup>
	</button>

	<Message status="help">This is legally binding but do not worry about it :-)</Message>
</Markup>

<style>
	.dog {
		font-size: var(--font_size_xl5);
	}
</style>
