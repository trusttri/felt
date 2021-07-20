// TODO this should be imported from '@lukeed/uuid/secure'
// but Vite currently fails to bundle it for the browser
import {v4} from '@lukeed/uuid/secure';

import type {Flavored} from '$lib/util/types.js';
import {to_counter} from '$lib/util/counter';

export type Uuid = Flavored<string, 'Uuid'>;

// creates a v4 `Uuid`, the totally random kind
export const to_uuid: () => Uuid = v4;

export const is_uuid = (str: string): str is Uuid => uuid_matcher.test(str);

// Postgres doesn't support the namespace prefix, so neither does Felt.
// For more see the UUID RFC - https://tools.ietf.org/html/rfc4122
// The Ajv validator does support the namespace, hence this custom implementation.
export const uuid_matcher = /^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;

export type Client_Id = Flavored<string, 'Client_Id'>;

export interface To_Client_Id {
	(): Client_Id;
}

// Creates a `Client_Id` generator function.
// Client ids take the form `${name}_${count}`,
// and they're only safe to persist across page loads by hydrating the initial `count`.
export const to_to_client_id = (name: string, count?: number): To_Client_Id => {
	const counter = to_counter(count);
	return () => `${name}_${counter()}`;
};
