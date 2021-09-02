import {suite} from 'uvu';
import * as t from 'uvu/assert';

import {replaceExtension, toPathStem, toCommonBaseDir} from '$lib/util/path.js';
import {toPathParts, toPathSegments} from '$lib/util/pathParsing.js';

/* test__replaceExtension */
const test__replaceExtension = suite('replaceExtension');

test__replaceExtension('basic behavior', () => {
	t.is(replaceExtension('foo.ts', '.js'), 'foo.js');
	t.is(replaceExtension('foo.ts', ''), 'foo');
	t.is(replaceExtension('foo.ts', 'js'), 'foojs');
	t.is(replaceExtension('foo', '.js'), 'foo.js');
});

test__replaceExtension.run();
/* test__replaceExtension */

/* test__toPathStem */
const test__toPathStem = suite('toPathStem');

test__toPathStem('basic behavior', () => {
	t.is(toPathStem('foo.ts'), 'foo');
	t.is(toPathStem('foo'), 'foo');
	t.is(toPathStem('/absolute/bar/foo.ts'), 'foo');
	t.is(toPathStem('./relative/bar/foo.ts'), 'foo');
	t.is(toPathStem('relative/bar/foo.ts'), 'foo');
});

test__toPathStem.run();
/* test__toPathStem */

/* test__toPathSegments */
const test__toPathSegments = suite('toPathSegments');

test__toPathSegments('basic behavior', () => {
	t.equal(toPathSegments('foo/bar/baz.ts'), ['foo', 'bar', 'baz.ts']);
});

test__toPathSegments('leading dot', () => {
	t.equal(toPathSegments('./foo/bar/baz.ts'), ['foo', 'bar', 'baz.ts']);
});

test__toPathSegments('leading two dots', () => {
	t.equal(toPathSegments('../../foo/bar/baz.ts'), ['foo', 'bar', 'baz.ts']);
});

test__toPathSegments('leading slash', () => {
	t.equal(toPathSegments('/foo/bar/baz.ts'), ['foo', 'bar', 'baz.ts']);
});

test__toPathSegments('trailing slash', () => {
	t.equal(toPathSegments('foo/bar/baz/'), ['foo', 'bar', 'baz']);
});

test__toPathSegments.run();
/* test__toPathSegments */

/* test__toPathParts */
const test__toPathParts = suite('toPathParts');

test__toPathParts('basic behavior', () => {
	t.equal(toPathParts('foo/bar/baz.ts'), ['foo', 'foo/bar', 'foo/bar/baz.ts']);
});

test__toPathParts('leading dot', () => {
	t.equal(toPathParts('./foo/bar/baz.ts'), ['foo', 'foo/bar', 'foo/bar/baz.ts']);
});

test__toPathParts('leading slash', () => {
	t.equal(toPathParts('/foo/bar/baz.ts'), ['/foo', '/foo/bar', '/foo/bar/baz.ts']);
});

test__toPathParts('trailing slash', () => {
	t.equal(toPathParts('foo/bar/baz/'), ['foo', 'foo/bar', 'foo/bar/baz']);
});

test__toPathParts.run();
/* test__toPathParts */

/* test__toCommonBaseDir */
const test__toCommonBaseDir = suite('toCommonBaseDir');

test__toCommonBaseDir('basic behavior', () => {
	t.is(toCommonBaseDir(['a/b/c.ts', 'a/b/c/d.ts', 'a/b/c/e.ts', 'a/b/c/e/f']), 'a/b');
});

test__toCommonBaseDir.run();
/* test__toCommonBaseDir */
