# util.classnames

> A class to manage CSS classes in a react component

[![build](https://travis-ci.org/jmquigley/util.classnames.svg?branch=master)](https://travis-ci.org/jmquigley/util.classnames)
[![analysis](https://img.shields.io/badge/analysis-tslint-9cf.svg)](https://palantir.github.io/tslint/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![testing](https://img.shields.io/badge/testing-jest-blue.svg)](https://facebook.github.io/jest/)
[![NPM](https://img.shields.io/npm/v/util.classnames.svg)](https://www.npmjs.com/package/util.classnames)
[![coverage](https://coveralls.io/repos/github/jmquigley/util.classnames/badge.svg?branch=master)](https://coveralls.io/github/jmquigley/util.classnames?branch=master)


## Installation

This module uses [yarn](https://yarnpkg.com/en/) to manage dependencies and run scripts for development.

To install as an application dependency:
```
$ yarn add --dev util.classnames
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

// clsn.classnames => 'a'
```

#### Initialize with an object

```javascript
import {ClassNames} from 'util.classnames';

const clsn = new ClassNames({a: true, b: true, c: false});

// clsn.classnames => 'a b c'
```


## API

#### attributes
- [.classes](docs/index.md#ClassNames+classes)
- [.classnames](docs/index.md#ClassNames+classnames)
- [.length](docs/index.md#ClassNames+length)
- [.obj](docs/index.md#ClassNames+obj)
- [.size](docs/index.md#ClassNames+size)
- [.str](docs/index.md#ClassNames+str)

#### methods
- [add()](docs/index.md#ClassNames+add)
- [clear()](docs/index.md#ClassNames+clear)
- [contains()](docs/index.md#ClassNames+contains)
- [delete()](docs/index.md#ClassNames+delete)
- [has()](docs/index.md#ClassNames+has)
- [off()](docs/index.md#ClassNames+off)
- [offIf()](docs/index.md#ClassNames+offIf)
- [offIfElse()](docs/index.md#ClassNames=offIfElse)
- [on()](docs/index.md#ClassNames+on)
- [onIf()](docs/index.md#ClassNames+onIf)
- [onIfElse()](docs/index.md#ClassNames=onIfElse)
- [remove()](docs/index.md#ClassNames+remove)
- [reset()](docs/index.md#ClassNames+reset)
- [resetAll()](docs/index.md#ClassNames+resetAll)
- [toggle()](docs/index.md#ClassNames+toggle)
- [update()](docs/index.md#ClassNames+update)
