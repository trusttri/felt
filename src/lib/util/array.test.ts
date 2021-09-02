import {suite} from 'uvu';
import * as t from 'uvu/assert';

import {last, toArray} from '$lib/util/array.js';

/* test__last */
const test__last = suite('last');

test__last('basic behavior', () => {
	t.is(last([1, 2]), 2);
	t.is(last([1]), 1);
	t.is(last([]), undefined);
});

test__last.run();
/* test__last */

/* test__toArray */
const test__toArray = suite('toArray');

test__toArray('basic behavior', () => {
	const array = [1, 2, 3];
	t.is(array, toArray(array));
	t.equal([1], toArray(1));
	t.equal([{a: 1}], toArray({a: 1}));
});

test__toArray.run();
/* test__toArray */
