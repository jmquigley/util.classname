'use strict';

export interface ClassObject {
	[key: string]: boolean;
}

export type ClassValue = string | string[] | ClassObject;

/**
 * This class is used to manage a set of class name strings used by CSS
 * for a react component.
 */
export class ClassNames {

	private _classes = new Map<string, boolean>();
	private _clstr: string = '';
	private _delimiter: string;
	private _dirty: boolean = true;

	constructor(strs: ClassValue = null, delimiter: string = ' ') {
		this._delimiter = delimiter;
		this.add(strs);
	}

	/**
	 * The current class objects in a Map of the form <string, boolean>
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
		if (this._dirty) {
			this._clstr = '';
			for (const [key, val] of this._classes.entries()) {
				if (val) {
					this._clstr += (key + this._delimiter);
				}
			}

			this._clstr = this._clstr.slice(0, -1);
			this._dirty = false;
		}

		return this._clstr;
	}

	/**
	 * @returns {number} the total number of class names in the map
	 */
	get length(): number {
		return this._classes.size;
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
	 * @param val {ClassValue} a value to add to the class name Map
	 * @param flag {boolean} the initial value to set for each key when
	 * they are added.  Set to true (on) by default.
	 */
	public add(val: ClassValue, flag: boolean = true) {
		if (val) {
			if (typeof val === 'string') {
				this._classes.set(val, flag);
			} else if (val instanceof Array) {
				for (const s of val) {
					this._classes.set(s, flag);
				}
			} else {
				for (const key in val) {
					if (val.hasOwnProperty(key)) {
						this._classes.set(key, val[key]);
					}
				}
			}
		}

		this._dirty = true;
	}

	/**
	 * Sets a key to "off" (false).  If the key doesn't exist it is created in
	 * the map.
	 * @param val {ClassValue} a value to turn on in the class name Map
	 */
	public off(val: ClassValue) {
		this.add(val, false);
	}

	/**
	 * Sets a key to "on" (true).  If the key doesn't exist it is created in
	 * the map.
	 * @param val {ClassValue} a value to turn on in the class name Map
	 */
	public on(val: ClassValue) {
		this.add(val, true);
	}

	/**
	 * Permanently removes a class name key from the map.
	 * @param val {string} a single string key to remove from the Map
	 */
	public remove(val: string) {
		this._classes.delete(val);
		this._dirty = true;
	}

	/**
	 * Switches a key's value to it's opposite. (on -> off or off -> on)
	 * @param val {string} a single string key to toggle.
	 */
	public toggle(val: string) {
		this._classes.set(val, !this._classes.get(val));
		this._dirty = true;
	}

}
