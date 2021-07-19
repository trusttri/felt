import {createMachine as create_machine} from 'xstate';
import type {StateValue} from 'xstate';
import {useMachine} from '@xstate/svelte'; // TODO should be a type import
import type {SvelteComponent} from 'svelte';

import Consentful_Voluntary from '$lib/sketch/onboard/consentful/Voluntary.svelte';
import Consentful_Informed from '$lib/sketch/onboard/consentful/Informed.svelte';
import Consentful_Revertible from '$lib/sketch/onboard/consentful/Revertible.svelte';
import Consentful_Specific from '$lib/sketch/onboard/consentful/Specific.svelte';
import Consentful_Unburdensome from '$lib/sketch/onboard/consentful/Unburdensome.svelte';
import Unconsentful_Voluntary from '$lib/sketch/onboard/unconsentful/Voluntary.svelte';
import Unconsentful_Informed from '$lib/sketch/onboard/unconsentful/Informed.svelte';
import Unconsentful_Revertible from '$lib/sketch/onboard/unconsentful/Revertible.svelte';
import Unconsentful_Specific from '$lib/sketch/onboard/unconsentful/Specific.svelte';
import Unconsentful_Unburdensome from '$lib/sketch/onboard/unconsentful/Unburdensome.svelte';
import type {Consent_Type} from '$lib/sketch/onboard/consent';

// TODO we're currently using only a fraction of the xstate functionality that we want to

// TODO copypasta with src/xstate/machine.ts

// TODO types
export interface Onboard_Context {}
export type Onboard_Event = any;
export type Onboard_Typestate = any;

export type Onboard_State = ReturnType<Use_Onboard_Machine>['state'];
export type Onboard_Send = ReturnType<Use_Onboard_Machine>['send'];
type Use_Onboard_Machine = typeof to_use_onboard_machine; // TODO this is a hack to get generics working
const to_use_onboard_machine = () =>
	useMachine<Onboard_Context, Onboard_Event, Onboard_Typestate>(null!);

const INITIAL_VALUE = 'begin';
const STORAGE_KEY = 'felt_onboard_state';
const load_initial_value = (): string => {
	if (typeof localStorage === 'undefined') return INITIAL_VALUE;
	const saved = localStorage.getItem(STORAGE_KEY);
	try {
		return saved ? JSON.parse(saved) : INITIAL_VALUE;
	} catch (err) {
		// handle bad values in case we change things or have bugs
		localStorage.removeItem(STORAGE_KEY);
		return INITIAL_VALUE;
	}
};
export const save_state = (value: StateValue): void => {
	if (typeof localStorage === 'undefined') return;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
};

export const onboard_machine = create_machine<object>({
	id: 'onboard',
	initial: load_initial_value(),
	states: {
		begin: {
			on: {NEXT: 'voluntary'},
		},
		voluntary: {
			on: {NEXT: 'informed', PREVIOUS: 'begin'},
		},
		informed: {
			on: {NEXT: 'revertible', PREVIOUS: 'voluntary'},
		},
		revertible: {
			on: {NEXT: 'specific', PREVIOUS: 'informed'},
		},
		specific: {
			on: {NEXT: 'unburdensome', PREVIOUS: 'revertible'},
		},
		unburdensome: {
			on: {NEXT: 'end', PREVIOUS: 'specific'},
		},
		end: {
			on: {PREVIOUS: 'unburdensome'},
		},
	},
});

// console.log('onboard_machine', onboard_machine);

// TODO derive?
export type Onboard_State_Name =
	| 'begin'
	| 'voluntary'
	| 'informed'
	| 'revertible'
	| 'specific'
	| 'unburdensome'
	| 'end';
export interface Onboard_Data {
	id: string;
	component: typeof SvelteComponent | null;
}

// TODO does this belong in the machine context?
export const onboard_data: Record<Consent_Type, Record<Onboard_State_Name, Onboard_Data>> = {
	consentful: {
		begin: {
			id: 'begin',
			component: null,
		},
		voluntary: {
			id: 'voluntary',
			component: Consentful_Voluntary,
		},
		informed: {
			id: 'informed',
			component: Consentful_Informed,
		},
		revertible: {
			id: 'revertible',
			component: Consentful_Revertible,
		},
		specific: {
			id: 'specific',
			component: Consentful_Specific,
		},
		unburdensome: {
			id: 'unburdensome',
			component: Consentful_Unburdensome,
		},
		end: {
			id: 'end',
			component: null,
		},
	},
	unconsentful: {
		begin: {
			id: 'begin',
			component: null,
		},
		voluntary: {
			id: 'voluntary',
			component: Unconsentful_Voluntary,
		},
		informed: {
			id: 'informed',
			component: Unconsentful_Informed,
		},
		revertible: {
			id: 'revertible',
			component: Unconsentful_Revertible,
		},
		specific: {
			id: 'specific',
			component: Unconsentful_Specific,
		},
		unburdensome: {
			id: 'unburdensome',
			component: Unconsentful_Unburdensome,
		},
		end: {
			id: 'end',
			component: null,
		},
	},
};
