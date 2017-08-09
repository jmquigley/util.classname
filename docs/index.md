<a name="ClassNames"></a>

## ClassNames
This class is used to manage a set of class name strings used by CSS
for a react component.

**Kind**: global class  

* [ClassNames](#ClassNames)
    * [.classes](#ClassNames+classes)
    * [.classnames](#ClassNames+classnames) ⇒ <code>string</code>
    * [.length](#ClassNames+length) ⇒ <code>number</code>
    * [.size](#ClassNames+size) ⇒ <code>number</code>
    * [.add(val, flag)](#ClassNames+add)
    * [.off(val)](#ClassNames+off)
    * [.on(val)](#ClassNames+on)
    * [.remove(val)](#ClassNames+remove)
    * [.toggle(val)](#ClassNames+toggle)

<a name="ClassNames+classes"></a>

### classNames.classes
The current class objects in a Map of the form <string, boolean>

**Kind**: instance property of [<code>ClassNames</code>](#ClassNames)  
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
<a name="ClassNames+size"></a>

### classNames.size ⇒ <code>number</code>
**Kind**: instance property of [<code>ClassNames</code>](#ClassNames)  
**Returns**: <code>number</code> - the total number of class names in the map  
<a name="ClassNames+add"></a>

### classNames.add(val, flag)
Adds a new value to the class names map.  It can accept a string, an
array of strings, or a simple key/value object (in the form
<string, boolean>).  By default the key is added in the "on" state.

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
| val | <code>ClassValue</code> | a value to turn on in the class name Map |

<a name="ClassNames+on"></a>

### classNames.on(val)
Sets a key to "on" (true).  If the key doesn't exist it is created in
the map.

**Kind**: instance method of [<code>ClassNames</code>](#ClassNames)  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>ClassValue</code> | a value to turn on in the class name Map |

<a name="ClassNames+remove"></a>

### classNames.remove(val)
Permanently removes a class name key from the map.

**Kind**: instance method of [<code>ClassNames</code>](#ClassNames)  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>string</code> | a single string key to remove from the Map |

<a name="ClassNames+toggle"></a>

### classNames.toggle(val)
Switches a key's value to it's opposite. (on -> off or off -> on)

**Kind**: instance method of [<code>ClassNames</code>](#ClassNames)  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>string</code> | a single string key to toggle. |

