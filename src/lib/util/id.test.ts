import {suite} from 'uvu';
import * as t from 'uvu/assert';

import {toUuid, isUuid, toToClientId} from '$lib/util/id.js';

/* test__toUuid */
const test__toUuid = suite('toUuid');

test__toUuid('basic behavior', () => {
	t.ok(toUuid());
	t.is(toUuid().length, 36);
});

test__toUuid.run();
/* test__toUuid */

/* test__isUuid */
const test__isUuid = suite('isUuid');

test__isUuid('basic behavior', () => {
	t.ok(isUuid(toUuid()));
	t.ok(isUuid('f81d4fae-7dec-11d0-a765-00a0c91e6bf6'));
	t.not.ok(isUuid('g81d4fae-7dec-11d0-a765-00a0c91e6bf6'));
	t.not.ok(isUuid(''));
	t.not.ok(isUuid(null!));
	t.not.ok(isUuid(undefined!));

	// See the implementation's comments for why the namespace syntax is not supported.
	t.not.ok(isUuid('urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6'));
});

test__isUuid.run();
/* test__isUuid */

/* test__toToClientId */
const test__toToClientId = suite('toToClientId');

test__toToClientId('basic behavior', () => {
	const toClientId = toToClientId('abc');
	t.is(toClientId(), 'abc_0');
	t.is(toClientId(), 'abc_1');
	t.is(toClientId(), 'abc_2');
});

test__toToClientId('custom count', () => {
	const toClientId = toToClientId('abc', 1);
	t.is(toClientId(), 'abc_1');
	t.is(toClientId(), 'abc_2');
	t.is(toClientId(), 'abc_3');
});

test__toToClientId.run();
/* test__toToClientId */
