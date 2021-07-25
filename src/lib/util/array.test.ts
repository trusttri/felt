import {suite} from 'uvu';
import * as t from 'uvu/assert';

import {last, to_array} from '$lib/util/array.js';

/* test__last */
const test__last = suite('last');

test__last('basic behavior', () => {
	t.is(last([1, 2]), 2);
	t.is(last([1]), 1);
	t.is(last([]), undefined);
});

test__last.run();
/* test__last */

/* test__to_array */
const test__to_array = suite('to_array');

test__to_array('basic behavior', () => {
	const array = [1, 2, 3];
	t.is(array, to_array(array));
	t.equal([1], to_array(1));
	t.equal([{a: 1}], to_array({a: 1}));
});

test__to_array.run();
/* test__to_array */
