import {suite} from 'uvu';
import * as t from 'uvu/assert';

import {mix, round} from '$lib/util/math.js';

/* test__mix */
const test__mix = suite('mix');

test__mix('mixes two numbers', () => {
	t.is(mix(0, 10, 0.2), 2);
});

test__mix('finds the midpoint between two numbers', () => {
	t.is(mix(1, 3, 0.5), 2);
});

test__mix('mixes with 0', () => {
	t.is(mix(1, 3, 0), 1);
});

test__mix('mixes with 1', () => {
	t.is(mix(1, 3, 1), 3);
});

test__mix.run();
/* /test__mix */

/* test__round */
const test__round = suite('round');

test__round('rounds a number up to 3 decimals', () => {
	t.is(round(0.0349, 3), 0.035);
});

test__round('rounds a negative number down to 5 decimals', () => {
	t.is(round(-1.6180339, 5), -1.61803);
});

test__round.run();
/* /test__round */
