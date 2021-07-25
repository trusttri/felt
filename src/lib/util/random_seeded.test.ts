/*

This is the Alea pseudo-random number generator by Johannes Baagøe

Security disclaimer: Felt cannot vouch for the cryotographic security of this code.
Use Node/browser/platform crypto APIs instead of this when security matters.

From http://baagoe.com/en/RandomMusings/javascript/
via https://github.com/nquinlan/better-random-numbers-for-javascript-mirror

Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

import {suite} from 'uvu';
import * as t from 'uvu/assert';

import {to_random_seeded} from '$lib/util/random_seeded.js';

/* test__to_random_seeded */
const test__to_random_seeded = suite('to_random_seeded');

test__to_random_seeded('Math.random() replacement', () => {
	// From http://baagoe.com/en/RandomMusings/javascript/
	// via https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
	const random = to_random_seeded('my', 3, 'seeds');
	t.is(random(), 0.30802189325913787);
	t.is(random(), 0.5190450621303171);
	t.is(random(), 0.43635262292809784);
});

test__to_random_seeded('another seed', () => {
	const random2 = to_random_seeded(1277182878230);
	t.is(random2(), 0.6198398587293923);
	t.is(random2(), 0.8385338634252548);
	t.is(random2(), 0.3644848605617881);
});

test__to_random_seeded('seeded random uint32', () => {
	const random_uint32 = to_random_seeded('').uint32;
	t.is(random_uint32(), 715789690);
	t.is(random_uint32(), 2091287642);
	t.is(random_uint32(), 486307);
});

test__to_random_seeded('seeded random fract53', () => {
	const random_fract53 = to_random_seeded('').fract53;
	t.is(random_fract53(), 0.16665777435687268);
	t.is(random_fract53(), 0.00011322738143160205);
	t.is(random_fract53(), 0.17695781631176488);
});

test__to_random_seeded.run();
/* test__to_random_seeded */
