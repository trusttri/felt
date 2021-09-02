<script lang="ts">
	import {tick} from 'svelte';

	import type {OnboardData} from '$lib/sketch/onboard/onboard';
	import Message from '$lib/ui/Message.svelte';
	import Markup from '$lib/ui/Markup.svelte';
	import {UnreachableError} from '$lib/util/error';

	// TODO refactor to an xstate machine

	export let data: OnboardData;
	export let done: () => void;
	export let back: () => void;

	// TODO can't find a better good way to silence these warnings
	back;

	let createErrorMessage: string | null = null;
	let signupErrorMessage: string | null = null;
	let signupHelperMessage: string | null = null;

	// TODO extract to `src/providers` or `src/services` or something?
	type ServiceProvider = 'SocialCo' | 'TrackerCo' | 'TrustedCo';
	interface ServiceProviderData {
		name: ServiceProvider;
	}
	const providers: Record<ServiceProvider, ServiceProviderData> = {
		SocialCo: {name: 'SocialCo'},
		TrackerCo: {name: 'TrackerCo'},
		TrustedCo: {name: 'TrustedCo'},
	};
	const providerList = Object.values(providers);
	let selectedProvider: ServiceProviderData | null = null;

	const create = (_username: string, _password: string): void => {
		selectedProvider = null;
		createErrorMessage = `Oopsies — our robots can be so clumsy! Please click the buttons below :-)`;
	};
	const signupWith = async (provider: ServiceProviderData): Promise<void> => {
		console.log('signupWith name', provider, data);
		let shouldFocus = false;
		switch (provider.name) {
			case 'TrackerCo': {
				selectedProvider = providers.TrackerCo;
				signupErrorMessage = '';
				signupHelperMessage = `Great! Let's get you social with ${selectedProvider.name}`;
				shouldFocus = true;
				break;
			}
			case 'SocialCo': {
				selectedProvider = providers.SocialCo;
				signupErrorMessage = '';
				signupHelperMessage = `Great! Let's get you tracked with ${selectedProvider.name}`;
				shouldFocus = true;
				break;
			}
			case 'TrustedCo': {
				selectedProvider = providers.TrustedCo;
				signupErrorMessage = '404 not found :-)';
				break;
			}
			default:
				throw new UnreachableError(provider.name);
		}
		if (shouldFocus) {
			await tick();
			if (!focusNextInput()) {
				signupButtonEl.focus();
			}
		}
	};

	const focusNextInput = (): HTMLInputElement | null => {
		if (!phoneNumber) {
			phoneNumberEl.focus();
			return phoneNumberEl;
		}
		if (!homeAddress) {
			homeAddressEl.focus();
			return homeAddressEl;
		}
		if (!anythingElse) {
			anythingElseEl.focus();
			return anythingElseEl;
		}
		return null;
	};

	const signup = (provider: ServiceProviderData | null): void => {
		console.log('signup data, provider', data, provider);
		if (focusNextInput()) return;
		if (provider) done();
	};

	const handleKeydownCreate = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			create(username, password);
		}
	};

	let username = '';
	let password = '';
	let phoneNumber = '';
	let phoneNumberEl: HTMLInputElement;
	let homeAddress = '';
	let homeAddressEl: HTMLInputElement;
	let anythingElse = '';
	let anythingElseEl: HTMLInputElement;
	let signupButtonEl: HTMLButtonElement;

	$: enableCreateButton = !createErrorMessage;
</script>

<Markup>
	<Message status="inform">this is a fake sign-up</Message>
	<form>
		<input
			bind:value={username}
			placeholder="username"
			on:keydown={handleKeydownCreate}
			disabled={!enableCreateButton}
		/>
		<input
			type="password"
			bind:value={password}
			placeholder="password"
			on:keydown={handleKeydownCreate}
			disabled={!enableCreateButton}
		/>
		<button
			type="button"
			on:click={() => create(username, password)}
			disabled={!enableCreateButton}
		>
			create account
		</button>

		{#if createErrorMessage}
			<div class="message" style="--message_min_height: 10rem;">
				{#if !selectedProvider}
					<Message status="error">{createErrorMessage}</Message>
				{:else}
					<Message>:-)</Message>
				{/if}
			</div>
		{/if}

		{#if createErrorMessage}
			{#each providerList as provider (provider.name)}
				<button
					type="button"
					on:click={() => signupWith(provider)}
					class:selected={!!selectedProvider && selectedProvider === provider}
				>
					signup with {provider.name}
				</button>
			{/each}

			{#if selectedProvider === providers.SocialCo || selectedProvider === providers.TrackerCo}
				{#if selectedProvider && selectedProvider !== providers.TrustedCo}
					<Message status="help">{signupHelperMessage}</Message>
					<input
						bind:value={phoneNumber}
						bind:this={phoneNumberEl}
						placeholder="your phone number"
						on:keydown={(e) => {
							if (e.key === 'Enter') homeAddressEl.focus();
						}}
					/>
					<input
						bind:value={homeAddress}
						bind:this={homeAddressEl}
						placeholder="your home address"
						on:keydown={(e) => {
							if (e.key === 'Enter') anythingElseEl.focus();
						}}
					/>
					<input
						bind:value={anythingElse}
						bind:this={anythingElseEl}
						placeholder="anything else to share? :-)"
						on:keydown={(e) => {
							if (e.key === 'Enter') {
								signup(selectedProvider);
							}
						}}
					/>
					<button
						type="button"
						bind:this={signupButtonEl}
						on:click={() => signup(selectedProvider)}
					>
						call my phone<br />
						to finish signup<br />with {selectedProvider.name}
					</button>
				{/if}
			{:else if selectedProvider}
				<Message status="error">{signupErrorMessage}</Message>
			{/if}
		{/if}
	</form>
</Markup>

<style>
	.message {
		width: 100%;
	}
</style>
