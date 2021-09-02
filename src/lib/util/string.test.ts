import {suite} from 'uvu';
import * as t from 'uvu/assert';

import {
	plural,
	truncate,
	stripStart,
	stripEnd,
	stripAfter,
	stripBefore,
	ensureStart,
	ensureEnd,
	deindent,
} from '$lib/util/string.js';

/* test__truncate */
const test__truncate = suite('truncate');

test__truncate('basic behavior', () => {
	t.is(truncate('foobarbaz', 5), 'fo...');
});

test__truncate('no truncation needed', () => {
	t.is(truncate('foobarbaz', 9), 'foobarbaz');
});

test__truncate('custom suffix', () => {
	t.is(truncate('foobarbaz', 5, '-'), 'foob-');
});

test__truncate('no suffix', () => {
	t.is(truncate('foobarbaz', 5, ''), 'fooba');
});

test__truncate('zero length', () => {
	t.is(truncate('foobarbaz', 0), '');
});

test__truncate('zero length and no suffix', () => {
	t.is(truncate('foobarbaz', 0, ''), '');
});

test__truncate('negative length', () => {
	t.is(truncate('foobarbaz', -5), '');
});

test__truncate('length equal to suffix', () => {
	t.is(truncate('foobarbaz', 2, '..'), '..');
});

test__truncate('length shorter than suffix returns empty string', () => {
	t.is(truncate('foobarbaz', 2, '...'), '');
});

test__truncate.run();
/* test__truncate */

/* test__stripStart */
const test__stripStart = suite('stripStart');

test__stripStart('basic behavior', () => {
	t.is(stripStart('foobar', 'foo'), 'bar');
});

test__stripStart('single character', () => {
	t.is(stripStart('foobar', 'f'), 'oobar');
});

test__stripStart('single character of multiple', () => {
	t.is(stripStart('ffoobar', 'f'), 'foobar');
});

test__stripStart('noop for partial match', () => {
	t.is(stripStart('foobar', 'fob'), 'foobar');
});

test__stripStart('noop for matching end but not start', () => {
	t.is(stripStart('foobar', 'bar'), 'foobar');
});

test__stripStart('noop for empty string', () => {
	t.is(stripStart('foobar', ''), 'foobar');
});

test__stripStart.run();
/* test__stripStart */

/* test__stripEnd */
const test__stripEnd = suite('stripEnd');

test__stripEnd('basic behavior', () => {
	t.is(stripEnd('foobar', 'bar'), 'foo');
});

test__stripEnd('single character', () => {
	t.is(stripEnd('foobar', 'r'), 'fooba');
});

test__stripEnd('single character of multiple', () => {
	t.is(stripEnd('foobarr', 'r'), 'foobar');
});

test__stripEnd('noop for partial match', () => {
	t.is(stripEnd('foobar', 'oar'), 'foobar');
});

test__stripEnd('noop for matching start but not end', () => {
	t.is(stripEnd('foobar', 'foo'), 'foobar');
});

test__stripEnd('noop for empty string', () => {
	t.is(stripEnd('foobar', ''), 'foobar');
});

test__stripEnd.run();
/* test__stripEnd */

/* test__stripAfter */
const test__stripAfter = suite('stripAfter');

test__stripAfter('basic behavior', () => {
	t.is(stripAfter('foobar', 'oo'), 'f');
});

test__stripAfter('starting characters', () => {
	t.is(stripAfter('foobar', 'foo'), '');
});

test__stripAfter('ending characters', () => {
	t.is(stripAfter('foobar', 'bar'), 'foo');
});

test__stripAfter('single character', () => {
	t.is(stripAfter('foobar', 'b'), 'foo');
});

test__stripAfter('first of many characters', () => {
	t.is(stripAfter('foobar', 'o'), 'f');
});

test__stripAfter('strips after first character', () => {
	t.is(stripAfter('foobar', 'f'), '');
});

test__stripAfter('strips last character', () => {
	t.is(stripAfter('foobar', 'r'), 'fooba');
});

test__stripAfter('noop for missing character', () => {
	t.is(stripAfter('foobar', 'x'), 'foobar');
});

test__stripAfter('noop for partial match', () => {
	t.is(stripAfter('foobar', 'bo'), 'foobar');
});

test__stripAfter('empty string', () => {
	t.is(stripAfter('foobar', ''), 'foobar');
});

test__stripAfter.run();
/* test__stripAfter */

/* test__stripBefore */
const test__stripBefore = suite('stripBefore');

test__stripBefore('basic behavior', () => {
	t.is(stripBefore('foobar', 'oo'), 'bar');
});

test__stripBefore('starting characters', () => {
	t.is(stripBefore('foobar', 'foo'), 'bar');
});

test__stripBefore('ending characters', () => {
	t.is(stripBefore('foobar', 'bar'), '');
});

test__stripBefore('single character', () => {
	t.is(stripBefore('foobar', 'b'), 'ar');
});

test__stripBefore('first of many characters', () => {
	t.is(stripBefore('foobar', 'o'), 'obar');
});

test__stripBefore('strips after first character', () => {
	t.is(stripBefore('foobar', 'f'), 'oobar');
});

test__stripBefore('strips last character', () => {
	t.is(stripBefore('foobar', 'r'), '');
});

test__stripBefore('noop for missing character', () => {
	t.is(stripBefore('foobar', 'x'), 'foobar');
});

test__stripBefore('noop for partial match', () => {
	t.is(stripBefore('foobar', 'bo'), 'foobar');
});

test__stripBefore('empty string', () => {
	t.is(stripBefore('foobar', ''), 'foobar');
});

test__stripBefore.run();
/* test__stripBefore */

/* test__ensureStart */
const test__ensureStart = suite('ensureStart');

test__ensureStart('basic behavior', () => {
	t.is(ensureStart('foobar', 'food'), 'foodfoobar');
});

test__ensureStart('existing text', () => {
	t.is(ensureStart('foobar', 'foo'), 'foobar');
});

test__ensureStart('existing character', () => {
	t.is(ensureStart('foobar', 'f'), 'foobar');
});

test__ensureStart('second character', () => {
	t.is(ensureStart('foobar', 'o'), 'ofoobar');
});

test__ensureStart('empty string', () => {
	t.is(ensureStart('foobar', ''), 'foobar');
});

test__ensureStart('whole string', () => {
	t.is(ensureStart('foobar', 'foobar'), 'foobar');
});

test__ensureStart('whole string plus a start character', () => {
	t.is(ensureStart('foobar', 'xfoobar'), 'xfoobarfoobar');
});

test__ensureStart('whole string plus an end character', () => {
	t.is(ensureStart('foobar', 'foobarx'), 'foobarxfoobar');
});

test__ensureStart('empty strings', () => {
	t.is(ensureStart('', ''), '');
});

test__ensureStart('empty source string', () => {
	t.is(ensureStart('', 'foo'), 'foo');
});

test__ensureStart.run();
/* test__ensureStart */

/* test__ensureEnd */
const test__ensureEnd = suite('ensureEnd');

test__ensureEnd('basic behavior', () => {
	t.is(ensureEnd('foobar', 'abar'), 'foobarabar');
});

test__ensureEnd('existing text', () => {
	t.is(ensureEnd('foobar', 'bar'), 'foobar');
});

test__ensureEnd('existing character', () => {
	t.is(ensureEnd('foobar', 'r'), 'foobar');
});

test__ensureEnd('second to last character', () => {
	t.is(ensureEnd('foobar', 'a'), 'foobara');
});

test__ensureEnd('empty string', () => {
	t.is(ensureEnd('foobar', ''), 'foobar');
});

test__ensureEnd('whole string', () => {
	t.is(ensureEnd('foobar', 'foobar'), 'foobar');
});

test__ensureEnd('whole string plus a start character', () => {
	t.is(ensureEnd('foobar', 'xfoobar'), 'foobarxfoobar');
});

test__ensureEnd('whole string plus an end character', () => {
	t.is(ensureEnd('foobar', 'foobarx'), 'foobarfoobarx');
});

test__ensureEnd('empty strings', () => {
	t.is(ensureEnd('', ''), '');
});

test__ensureEnd('empty source string', () => {
	t.is(ensureEnd('', 'foo'), 'foo');
});

test__ensureEnd.run();
/* test__ensureEnd */

/* test__deindent */
const test__deindent = suite('deindent');

test__deindent('basic behavior', () => {
	t.is(
		deindent(`
			hello
			world
				- nested
					- more
				- less
	`),
		`hello
world
- nested
- more
- less
`,
	);
});

test__deindent('single line', () => {
	t.is(deindent('  hey'), 'hey');
});

test__deindent('strips trailing spaces', () => {
	t.is(deindent('  hey  '), 'hey');
});

test__deindent.run();
/* test__deindent */

/* test__plural */
const test__plural = suite('plural');

test__plural('pluralizes 0', () => {
	t.is(plural(0), 's');
});

test__plural('pluralizes a positive float', () => {
	t.is(plural(45.8), 's');
});

test__plural('pluralizes a negative number', () => {
	t.is(plural(-3), 's');
});

test__plural('does not pluralize 1', () => {
	t.is(plural(1), '');
});

test__plural.run();
/* test__plural */
