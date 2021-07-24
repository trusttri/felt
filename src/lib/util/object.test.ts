import {suite} from 'uvu';
import * as t from 'uvu/assert';

import {map_record, omit, pick_by, omit_undefined, reorder} from '$lib/util/object.js';

/* test__map_record */
const test__map_record = suite('map_record');

test__map_record('basic behavior', () => {
	t.equal(
		map_record({a: 1, b: 2}, (v, k) => v + k),
		{a: '1a', b: '2b'},
	);
	t.equal(
		map_record({}, (v, k) => v + k),
		{},
	);
});

test__map_record.run();
/* /test__map_record */

/* test__omit */
const test__omit = suite('omit');

test__omit('basic behavior', () => {
	t.equal(omit({a: 1, b: 2}, ['b']), {a: 1});
	t.equal(omit({a: 1, b: 2}, []), {a: 1, b: 2});
	t.equal(omit({a: 1, b: 2}, ['b', 'a']), {});
});

test__omit.run();
/* /test__omit */

/* test__pick_by */
const test__pick_by = suite('pick_by');

test__pick_by('basic behavior', () => {
	t.equal(
		pick_by({a: 1, b: 2}, (v) => v === 1),
		{a: 1},
	);
	t.equal(
		pick_by({a: 1, b: 2}, (_v, k) => k === 'a'),
		{a: 1},
	);
	t.equal(
		pick_by({a: 1, b: 2}, () => false),
		{},
	);
	t.equal(
		pick_by({a: 1, b: 2}, () => true),
		{a: 1, b: 2},
	);
});

test__pick_by.run();
/* /test__pick_by */

/* test__omit_undefined */
const test__omit_undefined = suite('omit_undefined');

test__omit_undefined('basic behavior', () => {
	t.equal(omit_undefined({a: 1, b: undefined, c: undefined}), {a: 1});
	t.equal(omit_undefined({a: undefined, b: 2, c: undefined}), {b: 2});
	t.equal(omit_undefined({a: 1, b: 2}), {a: 1, b: 2});
	t.equal(omit_undefined({a: undefined, b: undefined}), {} as any);
	t.equal(omit_undefined({}), {});
});

test__omit_undefined.run();
/* /test__omit_undefined */

/* test__reorder */
const test__reorder = suite('reorder');

test__reorder('basic behavior', () => {
	t.is(
		JSON.stringify(reorder({a: 1, b: 2, c: 3, d: 4}, ['d', 'b', 'c', 'a'])),
		JSON.stringify({d: 4, b: 2, c: 3, a: 1}),
	);
});

test__reorder.run();
/* /test__reorder */
