import {suite} from 'uvu';
import * as t from 'uvu/assert';

import {to_uuid, is_uuid, to_to_client_id} from '$lib/util/id.js';

/* test_to_uuid */
const test_to_uuid = suite('to_uuid');

test_to_uuid('basic behavior', () => {
	t.ok(to_uuid());
	t.is(to_uuid().length, 36);
});

test_to_uuid.run();
/* /test_to_uuid */

/* test_is_uuid */
const test_is_uuid = suite('is_uuid');

test_is_uuid('basic behavior', () => {
	t.ok(is_uuid(to_uuid()));
	t.ok(is_uuid('f81d4fae-7dec-11d0-a765-00a0c91e6bf6'));
	t.not.ok(is_uuid('g81d4fae-7dec-11d0-a765-00a0c91e6bf6'));
	t.not.ok(is_uuid(''));
	t.not.ok(is_uuid(null!));
	t.not.ok(is_uuid(undefined!));

	// See the implementation's comments for why the namespace syntax is not supported.
	t.not.ok(is_uuid('urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6'));
});

test_is_uuid.run();
/* /test_is_uuid */

/* test_to_to_client_id */
const test_to_to_client_id = suite('to_to_client_id');

test_to_to_client_id('basic behavior', () => {
	const to_client_id = to_to_client_id('abc');
	t.is(to_client_id(), 'abc_0');
	t.is(to_client_id(), 'abc_1');
	t.is(to_client_id(), 'abc_2');
});

test_to_to_client_id('custom count', () => {
	const to_client_id = to_to_client_id('abc', 1);
	t.is(to_client_id(), 'abc_1');
	t.is(to_client_id(), 'abc_2');
	t.is(to_client_id(), 'abc_3');
});

test_to_to_client_id.run();
/* /test_to_to_client_id */
