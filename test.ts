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

test('Test adding a null value to the ClassNames object', t => {
	const clsn = new ClassNames();

	t.truthy(clsn);
	t.is(clsn.length, 0);
	t.is(clsn.classnames, '');

	clsn.add(null);
	t.is(clsn.length, 0);
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

test('Test removing a list of values from a ClassNames object', t => {
	const clsn = new ClassNames(['a', 'b', 'c', 'd', 'e']);

	t.truthy(clsn);
	t.is(clsn.length, 5);
	t.is(clsn.classnames, 'a b c d e');

	clsn.remove(['a', 'c', 'e']);
	t.is(clsn.length, 2);
	t.is(clsn.classnames, 'b d');
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

test('Test toggling a value that is not in the map', t => {
	const clsn = new ClassNames();

	t.truthy(clsn);
	t.is(clsn.length, 0);
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

test('Test adding an object with different state values', t => {
	const clsn = new ClassNames();

	t.truthy(clsn)	;
	t.is(clsn.classnames, '');
	t.is(clsn.length, 0);

	clsn.add({
		a: true,
		b: false
	});

	t.is(clsn.length, 2);
	t.is(clsn.classnames, 'a');
	t.false(clsn.classes.get('b'));
});

test('Test updating values in an existing ClassNames object', t => {
	const clsn = new ClassNames(['a', 'b', 'c']);

	t.truthy(clsn);
	t.is(clsn.length, 3);
	t.is(clsn.classnames, 'a b c');

	clsn.update({
		a: false,
		c: false
	});

	t.is(clsn.length, 3);
	t.is(clsn.classnames, 'b');
});

test('Test creating the classnames string with a differnet delimiter', t => {
	const clsn = new ClassNames(['a', 'b', 'c'], '@');

	t.truthy(clsn);
	t.is(clsn.length, 3);
	t.is(clsn.classnames, 'a@b@c');
});

test('Test retrieval of key/value object from ClassNames instance', t => {
	const clsn = new ClassNames(['a', 'b', 'c']);

	clsn.off('d');

	t.truthy(clsn);
	t.is(clsn.length, 4);
	t.is(clsn.classnames, 'a b c');

	const obj = clsn.obj;

	t.true(obj['a']);
	t.true(obj['b']);
	t.true(obj['c']);
	t.false(obj['d']);
});

test('Test the onIf predicate function', t => {
	const clsn = new ClassNames(['a', 'b', 'c']);

	t.truthy(clsn);
	t.is(clsn.length, 3);
	t.is(clsn.classnames, 'a b c');

	clsn.onIf(true)(
		'd'
	);

	t.is(clsn.length, 4);
	t.is(clsn.classnames, 'a b c d');

	clsn.onIf(false)(
		'd'
	);

	t.is(clsn.length, 4);
	t.is(clsn.classnames, 'a b c');
});

test('Test the offIf predicate function', t => {
	const clsn = new ClassNames(['a', 'b', 'c', 'd']);

	t.truthy(clsn);
	t.is(clsn.length, 4);
	t.is(clsn.classnames, 'a b c d');

	clsn.offIf(true)(
		'd'
	);

	t.is(clsn.length, 4);
	t.is(clsn.classnames, 'a b c');

	clsn.offIf(false)(
		'd'
	);

	t.is(clsn.length, 4);
	t.is(clsn.classnames, 'a b c d');
});
