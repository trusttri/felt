import {suite} from 'uvu';
import * as t from 'uvu/assert';

import {mapRecord, omit, pickBy, omitUndefined, reorder} from '$lib/util/object.js';

/* test__mapRecord */
const test__mapRecord = suite('mapRecord');

test__mapRecord('basic behavior', () => {
	t.equal(
		mapRecord({a: 1, b: 2}, (v, k) => v + k),
		{a: '1a', b: '2b'},
	);
	t.equal(
		mapRecord({}, (v, k) => v + k),
		{},
	);
});

test__mapRecord.run();
/* test__mapRecord */

/* test__omit */
const test__omit = suite('omit');

test__omit('basic behavior', () => {
	t.equal(omit({a: 1, b: 2}, ['b']), {a: 1});
	t.equal(omit({a: 1, b: 2}, []), {a: 1, b: 2});
	t.equal(omit({a: 1, b: 2}, ['b', 'a']), {});
});

test__omit.run();
/* test__omit */

/* test__pickBy */
const test__pickBy = suite('pickBy');

test__pickBy('basic behavior', () => {
	t.equal(
		pickBy({a: 1, b: 2}, (v) => v === 1),
		{a: 1},
	);
	t.equal(
		pickBy({a: 1, b: 2}, (_v, k) => k === 'a'),
		{a: 1},
	);
	t.equal(
		pickBy({a: 1, b: 2}, () => false),
		{},
	);
	t.equal(
		pickBy({a: 1, b: 2}, () => true),
		{a: 1, b: 2},
	);
});

test__pickBy.run();
/* test__pickBy */

/* test__omitUndefined */
const test__omitUndefined = suite('omitUndefined');

test__omitUndefined('basic behavior', () => {
	t.equal(omitUndefined({a: 1, b: undefined, c: undefined}), {a: 1});
	t.equal(omitUndefined({a: undefined, b: 2, c: undefined}), {b: 2});
	t.equal(omitUndefined({a: 1, b: 2}), {a: 1, b: 2});
	t.equal(omitUndefined({a: undefined, b: undefined}), {} as any);
	t.equal(omitUndefined({}), {});
});

test__omitUndefined.run();
/* test__omitUndefined */

/* test__reorder */
const test__reorder = suite('reorder');

test__reorder('basic behavior', () => {
	t.is(
		JSON.stringify(reorder({a: 1, b: 2, c: 3, d: 4}, ['d', 'b', 'c', 'a'])),
		JSON.stringify({d: 4, b: 2, c: 3, a: 1}),
	);
});

test__reorder.run();
/* test__reorder */
