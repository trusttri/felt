import {getContext, setContext} from 'svelte';
import {writable} from 'svelte/store';
import type {Writable} from 'svelte/store';

const KEY = Symbol();

export const getDevmode = (): Writable<boolean> => getContext(KEY);

export const setDevmode = (value: boolean | Writable<boolean> = false): Writable<boolean> => {
	const store = typeof value === 'boolean' ? writable(value) : value;
	setContext(KEY, store);
	return store;
};
