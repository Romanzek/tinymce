# Description

`katamari` is a collection of various data structures and reusable higher-order functions. It does not bundle any commands. It is only a collection of `bolt` ([github](https://github.com/ephox/bolt), [npm](https://www.npmjs.com/package/@ephox/bolt)) modules.

# Installation

`katamari` is available as an `npm` package. You can install it via the npm package `@ephox/katamari` or from source

## Install from npm

`npm install @ephox/katamari`.

## Install from source (start in source directory)

`$ npm install .`


# Usage

> Note, refrain from using any modules that are not in the `api` package.

Below is a list of commonly used parts of `katamari`

# Data Structures

## Optional Data Types

`Option': A representation of None or Some(x)
`Result`: A representation of Error(str) or Value(v)

## Asynchronous Data Types

`Future`: An abstraction over an asynchronous value
`FutureResult': A composition of a `Result` and a `Future`
`LazyValue': An asynchronous value that is only calculated once

## Mutable Data Types 

`Cell`: A mutable piece of data'
`Singleton`: A mutable piece of optional data

## Immutable Data Types

`Struct`: An immmutable collection of fields

## Algebraic Data Types

`Adt`: An approximate representation of an [Algebraic Data Type](https://en.wikipedia.org/wiki/Algebraic_data_type) in JavaScript

# Higher-order Functions

`Arr`: collection of functions that operate on arrays
`Obj`: collection of functions that operate on JavaScript objects
`Merger`: collection of functions to merge JavaScript objects

# Tests

`katamari` uses `bolt` to run atomic tests. The tests are chiefly written using [jsverify](https://github.com/jsverify/jsverify)

## Running Tests

`$ npm test`

