import {suite} from 'uvu';
import * as t from 'uvu/assert';

import {to_counter} from '$lib/util/counter.js';

/* test__to_counter */
const test__to_counter = suite('to_counter');

test__to_counter('basic behavior', () => {
	const counter = to_counter();
	t.is(counter(), 0);
	t.is(counter(), 1);
	t.is(counter(), 2);
});

test__to_counter('custom count', () => {
	const counter = to_counter(1);
	t.is(counter(), 1);
	t.is(counter(), 2);
	t.is(counter(), 3);
});

test__to_counter.run();
/* test__to_counter */
