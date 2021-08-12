import {createMachine as create_machine} from 'xstate';
import {useMachine} from '@xstate/svelte'; // TODO should be a type import
import type {SvelteComponent} from 'svelte';

import ConsentfulVoluntary from '$lib/sketch/onboard/consentful/Voluntary.svelte';
import ConsentfulInformed from '$lib/sketch/onboard/consentful/Informed.svelte';
import ConsentfulRevertible from '$lib/sketch/onboard/consentful/Revertible.svelte';
import ConsentfulSpecific from '$lib/sketch/onboard/consentful/Specific.svelte';
import ConsentfulUnburdensome from '$lib/sketch/onboard/consentful/Unburdensome.svelte';
import UnconsentfulVoluntary from '$lib/sketch/onboard/unconsentful/Voluntary.svelte';
import UnconsentfulInformed from '$lib/sketch/onboard/unconsentful/Informed.svelte';
import UnconsentfulRevertible from '$lib/sketch/onboard/unconsentful/Revertible.svelte';
import UnconsentfulSpecific from '$lib/sketch/onboard/unconsentful/Specific.svelte';
import UnconsentfulUnburdensome from '$lib/sketch/onboard/unconsentful/Unburdensome.svelte';
import type {ConsentType} from '$lib/sketch/onboard/consent';

// TODO we're currently using only a fraction of the xstate functionality that we want to

// TODO copypasta with src/xstate/machine.ts

// TODO types
export interface OnboardContext {}
export type OnboardEvent = any;
export type OnboardTypestate = any;

export type OnboardState = ReturnType<UseOnboardMachine>['state'];
export type OnboardSend = ReturnType<UseOnboardMachine>['send'];
type UseOnboardMachine = typeof to_use_onboard_machine; // TODO this is a hack to get generics working
const to_use_onboard_machine = () =>
	useMachine<OnboardContext, OnboardEvent, OnboardTypestate>(null!);

const INITIAL_VALUE = 'begin';

export const onboard_machine = create_machine<object>({
	id: 'onboard',
	initial: INITIAL_VALUE,
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
export type OnboardStateName =
	| 'begin'
	| 'voluntary'
	| 'informed'
	| 'revertible'
	| 'specific'
	| 'unburdensome'
	| 'end';
export interface OnboardData {
	id: string;
	component: typeof SvelteComponent | null;
}

// TODO does this belong in the machine context?
export const onboard_data: Record<ConsentType, Record<OnboardStateName, OnboardData>> = {
	consentful: {
		begin: {
			id: 'begin',
			component: null,
		},
		voluntary: {
			id: 'voluntary',
			component: ConsentfulVoluntary,
		},
		informed: {
			id: 'informed',
			component: ConsentfulInformed,
		},
		revertible: {
			id: 'revertible',
			component: ConsentfulRevertible,
		},
		specific: {
			id: 'specific',
			component: ConsentfulSpecific,
		},
		unburdensome: {
			id: 'unburdensome',
			component: ConsentfulUnburdensome,
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
			component: UnconsentfulVoluntary,
		},
		informed: {
			id: 'informed',
			component: UnconsentfulInformed,
		},
		revertible: {
			id: 'revertible',
			component: UnconsentfulRevertible,
		},
		specific: {
			id: 'specific',
			component: UnconsentfulSpecific,
		},
		unburdensome: {
			id: 'unburdensome',
			component: UnconsentfulUnburdensome,
		},
		end: {
			id: 'end',
			component: null,
		},
	},
};
