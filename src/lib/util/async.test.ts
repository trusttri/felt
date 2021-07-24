import {suite} from 'uvu';
import * as t from 'uvu/assert';

import {wait, wrap} from '$lib/util/async.js';

/* test__wait */
const test__wait = suite('wait');

test__wait('basic behavior', async () => {
	await wait();
	await wait(10);
});

test__wait.run();
/* /test__wait */

/* test__wrap */
const test__wrap = suite('wrap');

test__wrap('basic behavior', async () => {
	let v = 'start';
	await wrap(async (after) => {
		t.is(v, 'start');
		after(async () => {
			await wait();
			v = 'after1';
		});
		after(() => t.is(v, 'after1'));
		after(async () => {
			await wait();
			v = 'after2';
		});
		after(() => t.is(v, 'after2'));
		after(async () => {
			await wait();
			v = 'after3';
		});
		after(() => t.is(v, 'after3'));
		t.is(v, 'start');
	});
	t.is(v, 'after3');
});

test__wrap.run();
/* /test__wrap */
