import {suite} from 'uvu';
import * as t from 'uvu/assert';

import {replace_extension, to_path_stem, to_common_base_dir} from '$lib/util/path.js';
import {to_path_parts, to_path_segments} from '$lib/util/path_parsing.js';

/* test__replace_extension */
const test__replace_extension = suite('replace_extension');

test__replace_extension('basic behavior', () => {
	t.is(replace_extension('foo.ts', '.js'), 'foo.js');
	t.is(replace_extension('foo.ts', ''), 'foo');
	t.is(replace_extension('foo.ts', 'js'), 'foojs');
	t.is(replace_extension('foo', '.js'), 'foo.js');
});

test__replace_extension.run();
/* test__replace_extension */

/* test__to_path_stem */
const test__to_path_stem = suite('to_path_stem');

test__to_path_stem('basic behavior', () => {
	t.is(to_path_stem('foo.ts'), 'foo');
	t.is(to_path_stem('foo'), 'foo');
	t.is(to_path_stem('/absolute/bar/foo.ts'), 'foo');
	t.is(to_path_stem('./relative/bar/foo.ts'), 'foo');
	t.is(to_path_stem('relative/bar/foo.ts'), 'foo');
});

test__to_path_stem.run();
/* test__to_path_stem */

/* test__to_path_segments */
const test__to_path_segments = suite('to_path_segments');

test__to_path_segments('basic behavior', () => {
	t.equal(to_path_segments('foo/bar/baz.ts'), ['foo', 'bar', 'baz.ts']);
});

test__to_path_segments('leading dot', () => {
	t.equal(to_path_segments('./foo/bar/baz.ts'), ['foo', 'bar', 'baz.ts']);
});

test__to_path_segments('leading two dots', () => {
	t.equal(to_path_segments('../../foo/bar/baz.ts'), ['foo', 'bar', 'baz.ts']);
});

test__to_path_segments('leading slash', () => {
	t.equal(to_path_segments('/foo/bar/baz.ts'), ['foo', 'bar', 'baz.ts']);
});

test__to_path_segments('trailing slash', () => {
	t.equal(to_path_segments('foo/bar/baz/'), ['foo', 'bar', 'baz']);
});

test__to_path_segments.run();
/* test__to_path_segments */

/* test__to_path_parts */
const test__to_path_parts = suite('to_path_parts');

test__to_path_parts('basic behavior', () => {
	t.equal(to_path_parts('foo/bar/baz.ts'), ['foo', 'foo/bar', 'foo/bar/baz.ts']);
});

test__to_path_parts('leading dot', () => {
	t.equal(to_path_parts('./foo/bar/baz.ts'), ['foo', 'foo/bar', 'foo/bar/baz.ts']);
});

test__to_path_parts('leading slash', () => {
	t.equal(to_path_parts('/foo/bar/baz.ts'), ['/foo', '/foo/bar', '/foo/bar/baz.ts']);
});

test__to_path_parts('trailing slash', () => {
	t.equal(to_path_parts('foo/bar/baz/'), ['foo', 'foo/bar', 'foo/bar/baz']);
});

test__to_path_parts.run();
/* test__to_path_parts */

/* test__to_common_base_dir */
const test__to_common_base_dir = suite('to_common_base_dir');

test__to_common_base_dir('basic behavior', () => {
	t.is(to_common_base_dir(['a/b/c.ts', 'a/b/c/d.ts', 'a/b/c/e.ts', 'a/b/c/e/f']), 'a/b');
});

test__to_common_base_dir.run();
/* test__to_common_base_dir */
