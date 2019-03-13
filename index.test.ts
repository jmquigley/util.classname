"use strict";

import {ClassNames} from "./index";

test("Test creation of a ClassNames object with a string", () => {
	const clsn = new ClassNames("a");

	expect(clsn).toBeDefined();
	expect(clsn.classnames).toBe("a");
	expect(clsn.str).toBe("a");
	expect(clsn.length).toBe(1);
});

test("Test creation of a ClassNames object", () => {
	const clsn = new ClassNames(["a", "b", "c"]);

	expect(clsn).toBeDefined();
	expect(clsn.classnames).toBe("a b c");
	expect(clsn.str).toBe("a b c");
	expect(clsn.size).toBe(3);

	const cls = clsn.classes;
	expect(clsn).toBeDefined();

	expect(cls.get("a")).toBe(true);
	expect(cls.get("b")).toBe(true);
	expect(cls.get("c")).toBe(true);
});

test("Test creation of a ClassNames object using an object", () => {
	const clsn = new ClassNames({a: true, b: true, c: true});

	expect(clsn).toBeDefined();
	expect(clsn.classnames).toBe("a b c");
	expect(clsn.str).toBe("a b c");
	expect(clsn.length).toBe(3);
});

test("Test accessing an empty ClassName object", () => {
	const clsn = new ClassNames();

	expect(clsn).toBeDefined();
	expect(clsn.classnames).toBe("");
	expect(clsn.length).toBe(0);
});

test("Test adding a name and turning if off in a ClassNames", () => {
	const clsn = new ClassNames();

	expect(clsn).toBeDefined();
	expect(clsn.classnames).toBe("");
	expect(clsn.length).toBe(0);

	clsn.add("a");
	expect(clsn.length).toBe(1);
	expect(clsn.classnames).toBe("a");

	clsn.off("a");
	expect(clsn.length).toBe(1);
	expect(clsn.classnames).toBe("");
});

test("Test adding a null value to the ClassNames object", () => {
	const clsn = new ClassNames();

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(0);
	expect(clsn.classnames).toBe("");

	clsn.add(null);
	expect(clsn.length).toBe(0);
	expect(clsn.classnames).toBe("");
});

test("Test turning a name on in an empty ClassNames object", () => {
	const clsn = new ClassNames();

	expect(clsn).toBeDefined();
	expect(clsn.classnames).toBe("");
	expect(clsn.length).toBe(0);

	clsn.on("a");
	expect(clsn.length).toBe(1);
	expect(clsn.classnames).toBe("a");
});

test("Test removing a value from a ClassNames object", () => {
	const clsn = new ClassNames();

	expect(clsn).toBeDefined();
	clsn.add(["a", "b", "c"]);
	expect(clsn.length).toBe(3);
	expect(clsn.classnames).toBe("a b c");

	clsn.remove("c");
	expect(clsn.length).toBe(2);
	expect(clsn.classnames).toBe("a b");
});

test("Test removing a list of values from a ClassNames object", () => {
	const clsn = new ClassNames(["a", "b", "c", "d", "e"]);

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(5);
	expect(clsn.classnames).toBe("a b c d e");

	clsn.remove(["a", "c", "e"]);
	expect(clsn.length).toBe(2);
	expect(clsn.classnames).toBe("b d");
});

test("Test toggling a value on and off", () => {
	const clsn = new ClassNames("a");

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(1);
	expect(clsn.classnames).toBe("a");

	clsn.toggle("a");
	expect(clsn.length).toBe(1);
	expect(clsn.classnames).toBe("");

	clsn.toggle("a");
	expect(clsn.length).toBe(1);
	expect(clsn.classnames).toBe("a");
});

test("Test toggling a value thaexpect not in the map", () => {
	const clsn = new ClassNames();

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(0);
	expect(clsn.classnames).toBe("");

	clsn.toggle("a");

	expect(clsn.length).toBe(1);
	expect(clsn.classnames).toBe("a");
});

test("Test adding duplicate elements to a ClassNames object", () => {
	const clsn = new ClassNames(["a", "a", "a", "a", "a", "a"]);

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(1);
	expect(clsn.classnames).toBe("a");
});

test("Test retrieving the same string over and over", () => {
	const clsn = new ClassNames(["a", "b", "c"]);

	expect(clsn).toBeDefined();
	for (let i = 0; i < 10; i++) {
		expect(clsn.classnames).toBe("a b c");
		expect(clsn.length).toBe(3);
	}
});

test("Test adding an object with different state values", () => {
	const clsn = new ClassNames();

	expect(clsn).toBeDefined();
	expect(clsn.classnames).toBe("");
	expect(clsn.length).toBe(0);

	clsn.add({
		a: true,
		b: false
	});

	expect(clsn.length).toBe(2);
	expect(clsn.classnames).toBe("a");
	expect(clsn.classes.get("b")).toBe(false);
});

test("Test updating values in an existing ClassNames object", () => {
	const clsn = new ClassNames(["a", "b", "c"]);

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(3);
	expect(clsn.classnames).toBe("a b c");

	clsn.update({
		a: false,
		c: false
	});

	expect(clsn.length).toBe(3);
	expect(clsn.classnames).toBe("b");
});

test("Test creating the classnames string with a differnet delimiter", () => {
	const clsn = new ClassNames(["a", "b", "c"], "@");

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(3);
	expect(clsn.classnames).toBe("a@b@c");
});

test("Test retrieval of key/value object from ClassNames instance", () => {
	const clsn = new ClassNames(["a", "b", "c"]);

	clsn.off("d");

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(4);
	expect(clsn.classnames).toBe("a b c");

	const obj = clsn.obj;

	expect(obj["a"]).toBe(true);
	expect(obj["b"]).toBe(true);
	expect(obj["c"]).toBe(true);
	expect(obj["d"]).toBe(false);
});

test("Test the onIf predicate function", () => {
	const clsn = new ClassNames(["a", "b", "c"]);

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(3);
	expect(clsn.classnames).toBe("a b c");

	clsn.onIf(true)("d");

	expect(clsn.length).toBe(4);
	expect(clsn.classnames).toBe("a b c d");

	clsn.onIf(false)("d");

	expect(clsn.length).toBe(4);
	expect(clsn.classnames).toBe("a b c");
});

test("Test the offIf predicate function", () => {
	const clsn = new ClassNames(["a", "b", "c", "d"]);

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(4);
	expect(clsn.classnames).toBe("a b c d");

	clsn.offIf(true)("d");

	expect(clsn.length).toBe(4);
	expect(clsn.classnames).toBe("a b c");

	clsn.offIf(false)("d");

	expect(clsn.length).toBe(4);
	expect(clsn.classnames).toBe("a b c d");
});

test("Test the onIfElse predicate function", () => {
	const clsn = new ClassNames(["a", "b", "c"]);

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(3);
	expect(clsn.classnames).toBe("a b c");

	clsn.onIfElse(false)("c")("d");

	expect(clsn.length).toBe(4);
	expect(clsn.classnames).toBe("a b d");

	clsn.onIfElse(true)("c")("d");

	expect(clsn.length).toBe(4);
	expect(clsn.classnames).toBe("a b c");
});

test("Test the offIfElse predicate function", () => {
	const clsn = new ClassNames(["a", "b", "c"]);

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(3);
	expect(clsn.classnames).toBe("a b c");

	clsn.offIfElse(true)("c")("d");

	expect(clsn.length).toBe(4);
	expect(clsn.classnames).toBe("a b d");

	clsn.offIfElse(false)("c")("d");

	expect(clsn.length).toBe(4);
	expect(clsn.classnames).toBe("a b c");
});

test("Test the resetAll function", () => {
	const clsn = new ClassNames(["a", "b", "c"]);

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(3);
	expect(clsn.classnames).toBe("a b c");

	clsn.resetAll();

	expect(clsn.length).toBe(3);
	expect(clsn.classnames).toBe("");
});

test("Test the reset function", () => {
	const clsn = new ClassNames(["a", "b", "c"]);

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(3);
	expect(clsn.classnames).toBe("a b c");

	clsn.reset(["b", "c"]);

	expect(clsn.length).toBe(3);
	expect(clsn.classnames).toBe("a");
});

test("Test the clear function", () => {
	const clsn = new ClassNames(["a", "b", "c"]);

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(3);
	expect(clsn.classnames).toBe("a b c");

	clsn.clear();

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(0);
	expect(clsn.classnames).toBe("");
	expect(clsn.dirty).toBe(false);
});

test("Test contains function", () => {
	const clsn = new ClassNames(["a", "b", "c"]);

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(3);
	expect(clsn.classnames).toBe("a b c");
	clsn.off("c");

	expect(clsn.contains("a")).toBe(true); // on
	expect(clsn.contains("z")).toBe(false); // undefined
	expect(clsn.contains("c")).toBe(false); // off
});

test("Test the has function", () => {
	const clsn = new ClassNames(["a", "b", "c"]);

	expect(clsn).toBeDefined();
	expect(clsn.length).toBe(3);
	expect(clsn.classnames).toBe("a b c");
	clsn.off("c");

	expect(clsn.has("a")).toBe(true); // on
	expect(clsn.has("z")).toBe(false); // undefined
	expect(clsn.has("c")).toBe(true); // off, but exists
});
