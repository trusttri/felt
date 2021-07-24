import {suite} from 'uvu';
import * as t from 'uvu/assert';

import {random_float, random_int, random_item} from '$lib/util/random.js';

/* test__random_float */
const test__random_float = suite('random_float');

test__random_float('-5.5 to 7', () => {
	for (let i = 0; i < 20; i++) {
		const result = random_float(-5.5, 7);
		t.ok(result >= -5.5);
		t.ok(result < 7);
	}
});

test__random_float.run();
/* /test__random_float */

/* test__random_int */
const test__random_int = suite('random_int');

test__random_int('0 to 1', () => {
	const items = [0, 1];
	const results = [];
	for (let i = 0; i < 20; i++) {
		const result = random_int(0, 1);
		t.ok(items.includes(result));
		results.push(result);
	}
	for (const item of items) {
		t.ok(results.includes(item));
	}
});

test__random_int('1 to 5', () => {
	const items = [1, 2, 3, 4, 5];
	const results = [];
	for (let i = 0; i < 100; i++) {
		const result = random_int(1, 5);
		t.ok(items.includes(result));
		results.push(result);
	}
	for (const item of items) {
		t.ok(results.includes(item));
	}
});

test__random_int('-3 to 2', () => {
	const items = [-3, -2, -1, 0, 1, 2];
	const results = [];
	for (let i = 0; i < 100; i++) {
		const result = random_int(-3, 2);
		t.ok(items.includes(result));
		results.push(result);
	}
	for (const item of items) {
		t.ok(results.includes(item));
	}
});

test__random_int('2 to 2', () => {
	t.is(random_int(2, 2), 2);
});

test__random_int.run();
/* /test__random_int */

/* test__random_item */
const test__random_item = suite('random_item');

test__random_item('a and b', () => {
	const items = ['a', 'b'];
	const results = [];
	for (let i = 0; i < 20; i++) {
		const result = random_item(items)!;
		t.ok(items.includes(result));
		results.push(result);
	}
	for (const item of items) {
		t.ok(results.includes(item));
	}
});
test__random_item('1 to 5', () => {
	const items = [1, 2, 3, 4, 5];
	const results = [];
	for (let i = 0; i < 100; i++) {
		const result = random_item(items)!;
		t.ok(items.includes(result));
		results.push(result);
	}
	for (const item of items) {
		t.ok(results.includes(item));
	}
});
test__random_item('empty array', () => {
	t.is(random_item([]), undefined);
});

test__random_item.run();
/* /test__random_item */
