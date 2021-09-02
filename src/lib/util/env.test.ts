import {suite} from 'uvu';
import * as t from 'uvu/assert';

import {toEnvString, toEnvNumber} from '$lib/util/env.js';

/* test__toEnvString */
const test__toEnvString = suite('toEnvString');

test__toEnvString('basic behavior', async () => {
	process.env.GRO_TEST_1 = '1';
	t.is(toEnvString('GRO_TEST_1'), '1');
	t.is(toEnvString('GRO_TEST_1', '2'), '1');
	t.is(toEnvString('GRO_TEST_MISSING'), undefined);
	t.is(toEnvString('GRO_TEST_MISSING', '1'), '1');
});

test__toEnvString.run();
/* test__toEnvString */

/* test__toEnvNumber */
const test__toEnvNumber = suite('toEnvNumber');

test__toEnvNumber('basic behavior', async () => {
	process.env.GRO_TEST_1 = '1';
	t.is(toEnvNumber('GRO_TEST_1'), 1);
	t.is(toEnvNumber('GRO_TEST_1', 2), 1);
	t.is(toEnvNumber('GRO_TEST_MISSING'), undefined);
	t.is(toEnvNumber('GRO_TEST_MISSING', 1), 1);
});

test__toEnvNumber.run();
/* test__toEnvNumber */
