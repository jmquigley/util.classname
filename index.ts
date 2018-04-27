'use strict';

export interface ClassObject {
	[key: string]: boolean;
}

export type ClassValueStr = string | string[];
export type ClassValue = ClassValueStr | ClassObject;

/**
 * This class is used to manage a set of class name strings used by CSS
 * for a react component.
 */
export class ClassNames {

	private _classes = new Map<string, boolean>();
	private _clstr: string = '';
	private _delimiter: string;
	private _dirty: boolean = true;
	private _obj: any = null;

	constructor(strs: ClassValue = null, delimiter: string = ' ') {
		this._delimiter = delimiter;
		this.add(strs);
	}

	/**
	 * @return the current value of the dirty flag.
	 */
	get dirty(): boolean {
		return this._dirty;
	}

	/**
	 * When the Map object is modified the dirty state is set to true.
	 * @param val {boolean} the state of the dirtfy flag
	 */
	set dirty(val: boolean) {
		this._dirty = val;
		this._obj = null;
	}

	/**
	 * @return {Map<string, boolean>} the current class objects in a Map
	 */
	get classes(): Map<string, boolean> {
		return this._classes;
	}

	/**
	 * Takes a set of class name strings that are currently active and
	 * concatenates them into a string.
	 * @return {string} a string representing all active classes within
	 * the object.
	 */
	get classnames(): string {
		if (this.dirty) {
			this._clstr = '';
			for (const [key, val] of this._classes.entries()) {
				if (val) {
					this._clstr += (key + this._delimiter);
				}
			}

			this._clstr = this._clstr.slice(0, -1);
			this.dirty = false;
		}

		return this._clstr;
	}

	/**
	 * @return {number} the total number of class names in the map
	 */
	get length(): number {
		return this._classes.size;
	}

	/**
	 * @return {any} converts the Map object of <string, boolean> into a
	 * key/value pair object.
	 */
	get obj(): any {

		if (this._obj == null) {
			this._obj = {};

			for (const [key, val] of this._classes.entries()) {
				this._obj[key] = val;
			}
		}

		return this._obj;
	}

	/**
	 * @returns {number} the total number of class names in the map
	 */
	get size(): number {
		return this._classes.size;
	}

	/**
	 * Adds a new value to the class names map.  It can accept a string, an
	 * array of strings, or a simple key/value object (in the form
	 * <string, boolean>).  By default the key is added in the "on" state.
	 * The default flag state is only used when adding a "string" or array
	 * of strings.  If an object with key/value paris are given, then it is
	 * added with the given state values in the object.
	 * @param val {ClassValue} a value to add to the class name Map
	 * @param flag {boolean} the initial value to set for each key when
	 * they are added.  Set to true (on) by default.
	 */
	public add(val: ClassValue, flag: boolean = true) {
		if (val) {
			if (typeof val === 'string') {
				const tmp = this._classes.get(val);
				if (tmp == null || tmp !== flag) {
					this._classes.set(val, flag);
					this.dirty = true;
				}
			} else if (val instanceof Array) {
				for (const s of val) {
					this.add(s, flag);
				}
			} else {
				this.update(val);
			}
		}
	}

	/**
	 * Removes all entries from the class object an resets it to empty
	 */
	public clear() {
		this._classes.clear();
		this._clstr = '';
		this._dirty = false;
		this._obj = null;
	}

	/**
	 * Checks if the class name is in the map and is currently active.
	 * @param key {string} the name of the class key to find
	 * @return true if the class name is found and is on, otherwise false
	 */
	public contains(key: string): boolean {
		const val = this._classes.get(key);
		return val !== undefined && val !== false;
	}

	/**
	 * Permanently removes a class name key from the map.  This is an alias
	 * for the remove method.
	 * @param val {ClassValueStr} a single string key to remove from the Map
	 */
	public delete = this.remove;

	/**
	 * Checks if the given key is in the class list regardless if it is on
	 * or off.  It just needs to be in the map.
	 * @param key {string} the name of the class key to search for in the map
	 * @return true if the key is in the class list otherwise false.
	 */
	public has(key: string): boolean {
		return this._classes.has(key);
	}

	/**
	 * Sets a key to "off" (false).  If the key doesn't exist it is created in
	 * the map.
	 * @param val {ClassValueStr} a value to turn on in the class name Map
	 */
	public off(val: ClassValueStr) {
		this.add(val, false);
	}

	/**
	 * Takes a condition (predicate) and a set of keys.  If the predicate is
	 * true, then the keys are turned off.  If the predicate is false, then
	 * the keys are turned on. This works to toggle a value based on a
	 * predicate.
	 *
	 * ```javascript
	 * clsn.offIf(true)(
	 *     'toggle-off'
	 * );
	 * ```
	 *
	 * @param predicate {boolean} a boolean condition when true means that the
	 * items will be turned on in the Map
	 * @param keys {string} N number of strings to use for the toggle
	 */
	public offIf(predicate: boolean) {
		return (...keys: string[]) => {
			for (const key of keys) {
				this.add(key, !predicate);
			}
		};
	}

	/**
	 * Takes a given set of strings and removes them from the input Map if a given
	 * condition (predicate) is met.  If not met, then different set of strings are
	 * turned off.  This means that if one set is turned off, then the other set
	 * is turned on (toggled)
	 *
	 * ```javascript
	 * clsn.offIfElse(true)(
	 * 	   'toggle-off'
	 * )(
	 * 	   'toggle-on'
	 * );
	 * ```
	 *
	 * @param predicate {boolean} a boolean condition when true means that the
	 * items will be turned off in the set
	 * @param ifKeys {string} N number of strings to use for the if toggle
	 * @param elseKeys {string} N number of strings to use for the else toggle
	 */
	public offIfElse(predicate: boolean) {
		return (...ifKeys: string[]) => {
			return (...elseKeys: string[]) => {
				if (predicate) {
					this.off([...ifKeys]);
					this.on([...elseKeys]);
				} else {
					this.on([...ifKeys]);
					this.off([...elseKeys]);
				}
			};
		};
	}

	/**
	 * Sets a key to "on" (true).  If the key doesn't exist it is created in
	 * the map.
	 * @param val {ClassValueStr} a value to turn on in the class name Map
	 */
	public on(val: ClassValueStr) {
		this.add(val, true);
	}

	/**
	 * Takes a condition (predicate) and a set of keys.  If the predicate is
	 * true, then the keys are turned on.  If the predicate is false, then
	 * the keys are turned off. This works to toggle a value based on a
	 * predicate.
	 *
	 * ```javascript
	 * clsn.onIf(true)(
	 *     'toggle-on'
	 * );
	 * ```
	 *
	 * @param predicate {boolean} a boolean condition when true means that the
	 * items will be turned on in the Map
	 * @param keys {string} N number of strings to use for the toggle
	 */
	public onIf(predicate: boolean) {
		return (...keys: string[]) => {
			for (const key of keys) {
				this.add(key, predicate);
			}
		};
	}

	/**
	 * Takes a given set of strings and adds them to the input Map if a given
	 * condition (predicate) is met.  If not met, then different set of strings are
	 * turned off.  This means that if one set is turned on, then the other set
	 * is turned off (toggled)
	 *
	 * ```javascript
	 * clsn.onIfElse(true)(
	 * 	   'toggle-on'
	 * )(
	 * 	   'toggle-off'
	 * );
	 * ```
	 *
	 * @param predicate {boolean} a boolean condition when true means that the
	 * items will be turned off in the set
	 * @param ifKeys {string} N number of strings to use for the if toggle
	 * @param elseKeys {string} N number of strings to use for the else toggle
	 */
	public onIfElse(predicate: boolean) {
		return (...ifKeys: string[]) => {
			return (...elseKeys: string[]) => {

				if (predicate) {
					this.on([...ifKeys]);
					this.off([...elseKeys]);
				} else {
					this.off([...ifKeys]);
					this.on([...elseKeys]);
				}
			};
		};
	}

	/**
	 * Permanently removes a class name key from the map.
	 * @param val {ClassValueStr} a single string key to remove from the Map
	 */
	public remove(val: ClassValueStr) {

		if (typeof val === 'string') {
			val = [val];
		}

		for (const s of val) {
			if (this._classes.has(s)) {
				this._classes.delete(s);
				this.dirty = true;
			}
		}
	}

	/**
	 * Takes a string or list of string keys and resets their values to the
	 * "off"" state.  This is an alias for the "off" function.
	 * @param val {ClassValueStr} the string keys to turn off
	 */
	public reset = this.off;

	/**
	 * Resets all keys back to their "off" state.
	 */
	public resetAll() {
		this.off(Array.from(this._classes.keys()));
	}

	/**
	 * Switches a key's value to it's opposite. (on -> off or off -> on)
	 * If the key requested doesn't exist, then it is added in the initial
	 * on state.
	 * @param val {string} a single string key to toggle.
	 */
	public toggle(val: ClassValueStr) {

		if (typeof val === 'string') {
			val = [val];
		}

		for (const s of val) {
			if (this._classes.has(s)) {
				this.add(s, !this._classes.get(s));
			} else {
				this.add(s);
			}
		}
	}

	/**
	 * Takes an input object of type <string, boolean> and udpates the
	 * keys in the Map with the given values.
	 * @param obj {ClassObject} an object with key/value pairs that should
	 * be set in the Map.
	 */
	public update(obj: ClassObject) {
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				this.add(key, obj[key]);
			}
		}
	}
}
