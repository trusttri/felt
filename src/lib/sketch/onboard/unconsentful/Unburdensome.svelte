<script lang="ts">
	import type {OnboardData} from '$lib/sketch/onboard/onboard';
	import Markup from '$lib/ui/Markup.svelte';
	import Checkbox from '$lib/ui/Checkbox.svelte';
	import Message from '$lib/ui/Message.svelte';

	export let data: OnboardData;
	export let done: () => void;
	export let back: () => void;

	// TODO can't find a better good way to silence these warnings
	data;
	back;

	let consenting = true; // :-)

	// TODO extract?
	interface Contact {
		id: string;
		selected: boolean;
	}
	const email_contacts: Contact[] = [
		{id: 'mom', selected: true},
		{id: 'your ex', selected: true},
		{id: 'your dentist', selected: true},
		{id: 'moms email from the 90s', selected: true},
		{id: 'childhood friend grandma', selected: true},
		{id: 'noreply at every website', selected: true},
		{id: 'local supermarket', selected: true},
		{id: 'your bank', selected: true},
		{id: 'who is this?', selected: true},
		{id: '1000 spammers', selected: true},
		{id: "a friend you'll share with irl", selected: true},
		{id: 'the friend who invited you in the first place', selected: true},
		{id: "random stranger who typo'd your address", selected: true}, // TODO reward
		{id: 'that guy from the thing last week', selected: true},
		{id: 'a dog on the internet', selected: true},
		{id: 'alice', selected: true},
		{id: 'barry', selected: true},
		{id: 'chaz', selected: true},
		{id: 'daniel', selected: true},
		{id: 'are you serious ?', selected: true},
	];

	let selected_contacts = email_contacts.filter((c) => c.selected);
	$: selected_count = selected_contacts.length;

	const toggle_selected = (selected: boolean, email_contact: Contact) => {
		email_contact.selected = selected;
		selected_contacts = email_contacts.filter((c) => c.selected);
	};

	const blast_emails = () => {
		done();
	};
</script>

<Markup>
	<p>You're almost there!</p>
	<p>Let's spread the good news:</p>

	<Checkbox
		bind:checked={consenting}
		content="☻"
		content_empty="☹"
		--overflow="hidden"
		--font_size="var(--font_size_xl2)"
	>
		<Markup>
			<p>Invite your friends so they can join the fun!</p>
			<p>We already made an account for them!</p>
		</Markup>
	</Checkbox>

	<button on:click={() => blast_emails()}>
		<Markup>
			email blast {#if consenting}everyone you've ever emailed{:else}{selected_count}
				contacts{/if}!
		</Markup>
	</button>

	{#if consenting}
		<Message>It is better to not know how we got your contacts :-)</Message>
	{:else}
		<Message status="help">No worries! We'll invite only these contacts:</Message>
	{/if}

	{#if !consenting}
		<div class="emails">
			{#each email_contacts as email_contact (email_contact.id)}
				<Checkbox
					checked={email_contact.selected}
					on_change={(checked) => toggle_selected(checked, email_contact)}
					content="☻"
					content_empty="☹"
				>
					{email_contact.id}
				</Checkbox>
			{/each}
		</div>
	{/if}
</Markup>

<style>
	.emails {
		align-items: stretch;
		--font_size: var(--font_size_xl2);
		--overflow: 'hidden';
	}
</style>
