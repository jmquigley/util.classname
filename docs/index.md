<a name="ClassNames"></a>

## ClassNames
This class is used to manage a set of class name strings used by CSS
for a react component.

**Kind**: global class  

* [ClassNames](#ClassNames)
    * [.dirty](#ClassNames+dirty) ⇒
    * [.dirty](#ClassNames+dirty)
    * [.classes](#ClassNames+classes) ⇒ <code>Map.&lt;string, boolean&gt;</code>
    * [.classnames](#ClassNames+classnames) ⇒ <code>string</code>
    * [.length](#ClassNames+length) ⇒ <code>number</code>
    * [.obj](#ClassNames+obj) ⇒ <code>any</code>
    * [.size](#ClassNames+size) ⇒ <code>number</code>
    * [.add(val, flag)](#ClassNames+add)
    * [.off(val)](#ClassNames+off)
    * [.offIf(predicate, keys)](#ClassNames+offIf)
    * [.offIfElse(predicate, ifKeys, elseKeys)](#ClassNames+offIfElse)
    * [.on(val)](#ClassNames+on)
    * [.onIf(predicate, keys)](#ClassNames+onIf)
    * [.onIfElse(predicate, ifKeys, elseKeys)](#ClassNames+onIfElse)
    * [.remove(val)](#ClassNames+remove)
    * [.toggle(val)](#ClassNames+toggle)
    * [.update(obj)](#ClassNames+update)

<a name="ClassNames+dirty"></a>

### classNames.dirty ⇒
**Kind**: instance property of [<code>ClassNames</code>](#ClassNames)  
**Returns**: the current value of the dirty flag.  
<a name="ClassNames+dirty"></a>

### classNames.dirty
When the Map object is modified the dirty state is set to true.

**Kind**: instance property of [<code>ClassNames</code>](#ClassNames)  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>boolean</code> | the state of the dirtfy flag |

<a name="ClassNames+classes"></a>

### classNames.classes ⇒ <code>Map.&lt;string, boolean&gt;</code>
**Kind**: instance property of [<code>ClassNames</code>](#ClassNames)  
**Returns**: <code>Map.&lt;string, boolean&gt;</code> - the current class objects in a Map  
<a name="ClassNames+classnames"></a>

### classNames.classnames ⇒ <code>string</code>
Takes a set of class name strings that are currently active and
concatenates them into a string.

**Kind**: instance property of [<code>ClassNames</code>](#ClassNames)  
**Returns**: <code>string</code> - a string representing all active classes within
the object.  
<a name="ClassNames+length"></a>

### classNames.length ⇒ <code>number</code>
**Kind**: instance property of [<code>ClassNames</code>](#ClassNames)  
**Returns**: <code>number</code> - the total number of class names in the map  
<a name="ClassNames+obj"></a>

### classNames.obj ⇒ <code>any</code>
**Kind**: instance property of [<code>ClassNames</code>](#ClassNames)  
**Returns**: <code>any</code> - converts the Map object of <string, boolean> into a
key/value pair object.  
<a name="ClassNames+size"></a>

### classNames.size ⇒ <code>number</code>
**Kind**: instance property of [<code>ClassNames</code>](#ClassNames)  
**Returns**: <code>number</code> - the total number of class names in the map  
<a name="ClassNames+add"></a>

### classNames.add(val, flag)
Adds a new value to the class names map.  It can accept a string, an
array of strings, or a simple key/value object (in the form
<string, boolean>).  By default the key is added in the "on" state.
The default flag state is only used when adding a "string" or array
of strings.  If an object with key/value paris are given, then it is
added with the given state values in the object.

**Kind**: instance method of [<code>ClassNames</code>](#ClassNames)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| val | <code>ClassValue</code> |  | a value to add to the class name Map |
| flag | <code>boolean</code> | <code>true</code> | the initial value to set for each key when they are added.  Set to true (on) by default. |

<a name="ClassNames+off"></a>

### classNames.off(val)
Sets a key to "off" (false).  If the key doesn't exist it is created in
the map.

**Kind**: instance method of [<code>ClassNames</code>](#ClassNames)  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>ClassValueStr</code> | a value to turn on in the class name Map |

<a name="ClassNames+offIf"></a>

### classNames.offIf(predicate, keys)
Takes a condition (predicate) and a set of keys.  If the predicate is
true, then the keys are turned off.  If the predicate is false, then
the keys are turned on. This works to toggle a value based on a
predicate.

```javascript
clsn.offIf(true)(
    'toggle-off'
);
```

**Kind**: instance method of [<code>ClassNames</code>](#ClassNames)  

| Param | Type | Description |
| --- | --- | --- |
| predicate | <code>boolean</code> | a boolean condition when true means that the items will be turned on in the Map |
| keys | <code>string</code> | N number of strings to use for the toggle |

<a name="ClassNames+offIfElse"></a>

### classNames.offIfElse(predicate, ifKeys, elseKeys)
Takes a given set of strings and removes them from the input Map if a given
condition (predicate) is met.  If not met, then different set of strings are
turned off.  This means that if one set is turned off, then the other set
is turned on (toggled)

```javascript
clsn.offIfElse(true)(
	   'toggle-off'
)(
	   'toggle-on'
);
```

**Kind**: instance method of [<code>ClassNames</code>](#ClassNames)  

| Param | Type | Description |
| --- | --- | --- |
| predicate | <code>boolean</code> | a boolean condition when true means that the items will be turned off in the set |
| ifKeys | <code>string</code> | N number of strings to use for the if toggle |
| elseKeys | <code>string</code> | N number of strings to use for the else toggle |

<a name="ClassNames+on"></a>

### classNames.on(val)
Sets a key to "on" (true).  If the key doesn't exist it is created in
the map.

**Kind**: instance method of [<code>ClassNames</code>](#ClassNames)  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>ClassValueStr</code> | a value to turn on in the class name Map |

<a name="ClassNames+onIf"></a>

### classNames.onIf(predicate, keys)
Takes a condition (predicate) and a set of keys.  If the predicate is
true, then the keys are turned on.  If the predicate is false, then
the keys are turned off. This works to toggle a value based on a
predicate.

```javascript
clsn.onIf(true)(
    'toggle-on'
);
```

**Kind**: instance method of [<code>ClassNames</code>](#ClassNames)  

| Param | Type | Description |
| --- | --- | --- |
| predicate | <code>boolean</code> | a boolean condition when true means that the items will be turned on in the Map |
| keys | <code>string</code> | N number of strings to use for the toggle |

<a name="ClassNames+onIfElse"></a>

### classNames.onIfElse(predicate, ifKeys, elseKeys)
Takes a given set of strings and adds them to the input Map if a given
condition (predicate) is met.  If not met, then different set of strings are
turned off.  This means that if one set is turned on, then the other set
is turned off (toggled)

```javascript
clsn.onIfElse(true)(
	   'toggle-on'
)(
	   'toggle-off'
);
```

**Kind**: instance method of [<code>ClassNames</code>](#ClassNames)  

| Param | Type | Description |
| --- | --- | --- |
| predicate | <code>boolean</code> | a boolean condition when true means that the items will be turned off in the set |
| ifKeys | <code>string</code> | N number of strings to use for the if toggle |
| elseKeys | <code>string</code> | N number of strings to use for the else toggle |

<a name="ClassNames+remove"></a>

### classNames.remove(val)
Permanently removes a class name key from the map.

**Kind**: instance method of [<code>ClassNames</code>](#ClassNames)  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>ClassValueStr</code> | a single string key to remove from the Map |

<a name="ClassNames+toggle"></a>

### classNames.toggle(val)
Switches a key's value to it's opposite. (on -> off or off -> on)
If the key requested doesn't exist, then it is added in the initial
on state.

**Kind**: instance method of [<code>ClassNames</code>](#ClassNames)  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>string</code> | a single string key to toggle. |

<a name="ClassNames+update"></a>

### classNames.update(obj)
Takes an input object of type <string, boolean> and udpates the
keys in the Map with the given values.

**Kind**: instance method of [<code>ClassNames</code>](#ClassNames)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>ClassObject</code> | an object with key/value pairs that should be set in the Map. |
