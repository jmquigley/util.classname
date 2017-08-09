'use strict';

import test from 'ava';
import {ClassNames} from './index';

test('Test creation of a ClassNames object with a string', t => {
	const clsn = new ClassNames('a');

	t.truthy(clsn);
	t.is(clsn.classnames, 'a');
	t.is(clsn.length, 1);
});

test('Test creation of a ClassNames object', t => {
	const clsn = new ClassNames(['a', 'b', 'c']);

	t.truthy(clsn);
	t.is(clsn.classnames, 'a b c');
	t.is(clsn.size, 3);

	const cls = clsn.classes;
	t.truthy(clsn);

	t.true(cls.get('a'));
	t.true(cls.get('b'));
	t.true(cls.get('c'));
});

test('Test creation of a ClassNames object using an object', t => {
	const clsn = new ClassNames({a: true, b: true, c: true});

	t.truthy(clsn);
	t.is(clsn.classnames, 'a b c');
	t.is(clsn.length, 3);
});

test('Test accessing an emtpy ClassName object', t => {
	const clsn = new ClassNames();

	t.truthy(clsn);
	t.is(clsn.classnames, '');
	t.is(clsn.length, 0);
});

test('Test adding a name and turning if off in a ClassNames', t => {
	const clsn = new ClassNames();

	t.truthy(clsn);
	t.is(clsn.classnames, '');
	t.is(clsn.length, 0);

	clsn.add('a');
	t.is(clsn.length, 1);
	t.is(clsn.classnames, 'a');

	clsn.off('a');
	t.is(clsn.length, 1);
	t.is(clsn.classnames, '');
});

test('Test turning a name on in an empty ClassNames object', t => {
	const clsn = new ClassNames();

	t.truthy(clsn);
	t.is(clsn.classnames, '');
	t.is(clsn.length, 0);

	clsn.on('a');
	t.is(clsn.length, 1);
	t.is(clsn.classnames, 'a');
});

test('Test removing a value from a ClassNames object', t => {
	const clsn = new ClassNames();

	t.truthy(clsn);
	clsn.add(['a', 'b', 'c']);
	t.is(clsn.length, 3);
	t.is(clsn.classnames, 'a b c');

	clsn.remove('c');
	t.is(clsn.length, 2);
	t.is(clsn.classnames, 'a b');
});

test('Test toggling a value on and off', t => {
	const clsn = new ClassNames('a');

	t.truthy(clsn);
	t.is(clsn.length, 1);
	t.is(clsn.classnames, 'a');

	clsn.toggle('a');
	t.is(clsn.length, 1);
	t.is(clsn.classnames, '');

	clsn.toggle('a');
	t.is(clsn.length, 1);
	t.is(clsn.classnames, 'a');
});

test('Test adding duplicate elements to a ClassNames object', t => {
	const clsn = new ClassNames(['a', 'a', 'a', 'a', 'a', 'a']);

	t.truthy(clsn);
	t.is(clsn.length, 1);
	t.is(clsn.classnames, 'a');
});

test('Test retrieving the same string over and over', t => {
	const clsn = new ClassNames(['a', 'b', 'c']);

	t.truthy(clsn);
	for (let i = 0; i < 10; i++) {
		t.is(clsn.classnames, 'a b c');
		t.is(clsn.length, 3);
	}
});
