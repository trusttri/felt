<script lang="ts">
	import {tick} from 'svelte';

	import type {Onboard_Data} from '$lib/sketch/onboard/onboard';
	import Message from '$lib/ui/Message.svelte';
	import Markup from '$lib/ui/Markup.svelte';
	import {Unreachable_Error} from '$lib/util/error';

	// TODO refactor to an xstate machine

	export let data: Onboard_Data;
	export let done: () => void;
	export let back: () => void;

	// TODO can't find a better good way to silence these warnings
	back;

	let create_error_message: string | null = null;
	let signup_error_message: string | null = null;
	let signup_helper_message: string | null = null;

	// TODO extract to `src/providers` or `src/services` or something?
	type Service_Provider = 'SOCIAL_CO' | 'TRACKER_CO' | 'TRUSTED_CO';
	interface Service_Provider_Data {
		name: Service_Provider;
	}
	const providers: Record<Service_Provider, Service_Provider_Data> = {
		SOCIAL_CO: {name: 'SOCIAL_CO'},
		TRACKER_CO: {name: 'TRACKER_CO'},
		TRUSTED_CO: {name: 'TRUSTED_CO'},
	};
	const provider_list = Object.values(providers);
	let selected_provider: Service_Provider_Data | null = null;

	const create = (_username: string, _password: string): void => {
		selected_provider = null;
		create_error_message = `Oopsies — our robots can be so clumsy! Please click the buttons below :-)`;
	};
	const signup_with = async (provider: Service_Provider_Data): Promise<void> => {
		console.log('signup_with name', provider, data);
		let should_focus = false;
		switch (provider.name) {
			case 'TRACKER_CO': {
				selected_provider = providers.TRACKER_CO;
				signup_error_message = '';
				signup_helper_message = `Great! Let's get you social with ${selected_provider.name}`;
				should_focus = true;
				break;
			}
			case 'SOCIAL_CO': {
				selected_provider = providers.SOCIAL_CO;
				signup_error_message = '';
				signup_helper_message = `Great! Let's get you tracked with ${selected_provider.name}`;
				should_focus = true;
				break;
			}
			case 'TRUSTED_CO': {
				selected_provider = providers.TRUSTED_CO;
				signup_error_message = '404 not found :-)';
				break;
			}
			default:
				throw new Unreachable_Error(provider.name);
		}
		if (should_focus) {
			await tick();
			if (!focus_next_input()) {
				signup_button_el.focus();
			}
		}
	};

	const focus_next_input = (): HTMLInputElement | null => {
		if (!phone_number) {
			phone_number_el.focus();
			return phone_number_el;
		}
		if (!home_address) {
			home_address_el.focus();
			return home_address_el;
		}
		if (!anything_else) {
			anything_else_el.focus();
			return anything_else_el;
		}
		return null;
	};

	const signup = (provider: Service_Provider_Data | null): void => {
		console.log('signup data, provider', data, provider);
		if (focus_next_input()) return;
		if (provider) done();
	};

	const handle_keydown_create = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			create(username, password);
		}
	};

	let username = '';
	let password = '';
	let phone_number = '';
	let phone_number_el: HTMLInputElement;
	let home_address = '';
	let home_address_el: HTMLInputElement;
	let anything_else = '';
	let anything_else_el: HTMLInputElement;
	let signup_button_el: HTMLButtonElement;

	$: enable_create_button = !create_error_message;
</script>

<Markup>
	<Message>this is fake</Message>
	<form>
		<input
			bind:value={username}
			placeholder="username"
			on:keydown={handle_keydown_create}
			disabled={!enable_create_button}
		/>
		<input
			type="password"
			bind:value={password}
			placeholder="password"
			on:keydown={handle_keydown_create}
			disabled={!enable_create_button}
		/>
		<button
			type="button"
			on:click={() => create(username, password)}
			disabled={!enable_create_button}
		>
			create account
		</button>

		{#if create_error_message}
			<div class="message" style="--message_min_height: 10rem;">
				{#if !selected_provider}
					<Message status="error">{create_error_message}</Message>
				{:else}
					<Message>:-)</Message>
				{/if}
			</div>
		{/if}

		{#if create_error_message}
			{#each provider_list as provider (provider.name)}
				<button
					type="button"
					on:click={() => signup_with(provider)}
					class:selected={!!selected_provider && selected_provider === provider}
				>
					{#if provider.name === 'TRUSTED_CO'}
						signup with {provider.name}
					{:else}
						<Markup>
							signup with {provider.name}
						</Markup>
					{/if}
				</button>
			{/each}

			{#if selected_provider === providers.SOCIAL_CO || selected_provider === providers.TRACKER_CO}
				{#if selected_provider && selected_provider !== providers.TRUSTED_CO}
					<Message status="help">{signup_helper_message}</Message>
					<input
						bind:value={phone_number}
						bind:this={phone_number_el}
						placeholder="your phone number"
						on:keydown={(e) => {
							if (e.key === 'Enter') home_address_el.focus();
						}}
					/>
					<input
						bind:value={home_address}
						bind:this={home_address_el}
						placeholder="your home address"
						on:keydown={(e) => {
							if (e.key === 'Enter') anything_else_el.focus();
						}}
					/>
					<input
						bind:value={anything_else}
						bind:this={anything_else_el}
						placeholder="anything else to share? :-)"
						on:keydown={(e) => {
							if (e.key === 'Enter') {
								signup(selected_provider);
							}
						}}
					/>
					<button
						type="button"
						bind:this={signup_button_el}
						on:click={() => signup(selected_provider)}
					>
						call my phone<br />
						to finish signup<br />with {selected_provider.name}
					</button>
				{/if}
			{:else if selected_provider}
				<Message status="error">{signup_error_message}</Message>
			{/if}
		{/if}
	</form>
</Markup>

<style>
	.message {
		width: 100%;
	}
</style>