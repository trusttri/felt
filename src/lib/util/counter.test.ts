import {suite} from 'uvu';
import * as t from 'uvu/assert';

import {toCounter} from '$lib/util/counter.js';

/* test__toCounter */
const test__toCounter = suite('toCounter');

test__toCounter('basic behavior', () => {
	const counter = toCounter();
	t.is(counter(), 0);
	t.is(counter(), 1);
	t.is(counter(), 2);
});

test__toCounter('custom count', () => {
	const counter = toCounter(1);
	t.is(counter(), 1);
	t.is(counter(), 2);
	t.is(counter(), 3);
});

test__toCounter.run();
/* test__toCounter */
