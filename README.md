# util.classnames

> A class to manage CSS classes in a react component

[![Build Status](https://travis-ci.org/jmquigley/util.classnames.svg?branch=master)](https://travis-ci.org/jmquigley/util.classnames)
[![tslint code style](https://img.shields.io/badge/code_style-TSlint-5ed9c7.svg)](https://palantir.github.io/tslint/)
[![Test Runner](https://img.shields.io/badge/testing-ava-blue.svg)](https://github.com/avajs/ava)
[![NPM](https://img.shields.io/npm/v/util.classnames.svg)](https://www.npmjs.com/package/util.classnames)
[![Coverage Status](https://coveralls.io/repos/github/jmquigley/util.classnames/badge.svg?branch=master)](https://coveralls.io/github/jmquigley/util.classnames?branch=master)


## Installation

This module uses [yarn](https://yarnpkg.com/en/) to manage dependencies and run scripts for development.

To install as an application dependency:
```
$ yarn add --dev util.toggle
```

To build the app and run all tests:
```
$ yarn run all
```


## Overview

Provides an ES6 class for managing CSS class names strings used in a [react](https://facebook.github.io/react/) component.  Strings are added to an instance and later retrieved using the `classnames` property.  This property represents an concatenation of all active strings within the instance.  The values within the class can be turned on and off to create different combinations.  These strings can be used in the `className` property of a component.


## Usage

#### Initialize with an array of strings

```javascript
import {ClassNames} from 'util.classnames';

const clsn = new ClassNames(['a', 'b', 'c']);

// clsn.classnames => 'a b c'

clsn.add('d');

// clsn.classnames => 'a b c d'

clsn.remove('a');

// clsn.classnames => 'b c d'

clsn.off('b');

// clsn.classnames => 'c d'

clsn.on('b');

// clsn.classnames => 'b c d'

clsn.toggle('b');

// clsn.classnames => 'c d'

clsn.toggle('b');

// clsn.classnames => 'b c d'
```

#### Initialize with a string

```javascript
import {ClassNames} from 'util.classnames';

const clsn = new ClassNames('a');
```

#### Initialize with an object

```javascript
import {ClassNames} from 'util.classnames';

const clsn = new ClassNames({a: true, b: true, c: false});
```


## API

- [classes()](docs/index.md#ClassNames+classes)
- [classnames()](docs/index.md#ClassNames+classnames)
- [length()](docs/index.md#ClassNames+length)
- [size()](docs/index.md#ClassNames+size)
- [add()](docs/index.md#ClassNames+add)
- [off()](docs/index.md#ClassNames+off)
- [on()](docs/index.md#ClassNames+on)
- [remove()](docs/index.md#ClassNames+remove)
- [toggle()](docs/index.md#ClassNames+toggle)
