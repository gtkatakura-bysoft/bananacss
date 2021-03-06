# Banana CSS

> :banana: The Brazilian CSS superset.

[![Build Status](https://travis-ci.org/bananacss/bananacss.svg?branch=master)](https://travis-ci.org/bananacss/bananacss)
[![Coverage Status](https://coveralls.io/repos/github/bananacss/bananacss/badge.svg?branch=master)](https://coveralls.io/github/bananacss/bananacss?branch=master)
[![Dependency Status](https://david-dm.org/bananacss/bananacss.svg)](https://david-dm.org/bananacss/bananacss)
[![devDependency Status](https://david-dm.org/bananacss/bananacss/dev-status.svg)](https://david-dm.org/bananacss/bananacss#info=devDependencies)
[![npm](https://img.shields.io/npm/v/bananacss.svg)](https://www.npmjs.com/package/bananacss)
[![npm](https://img.shields.io/npm/dt/bananacss.svg)](https://www.npmjs.com/package/bananacss)

## Table of contents

- [How to install](#how-to-install)
- [Command Line Usage](#command-line-usage)
- [Module Usage](#module-usage)
- [Features](#features)
- [Example](#example)
- [Development](#development)
  - [Code Style](#code-style)
  - [Code Docs](#code-docs)
  - [Tests](#tests)
- [Versioning](#versioning)
- [Contributing](#contributing)
- [History](#history)
- [License](#license)

<hr>

## How to install

Verify if you have [node](http://nodejs.org/) and [npm](https://www.npmjs.org/) installed.

### Command Line

```sh
$ npm install -g bananacss
```

### Module

```sh
$ npm install bananacss --save
```

<hr>

## Command Line Usage

*Compile you .bnn file to .css*

```sh
$ banana <input_path>
```

*Watch for changes.*

```sh
$ banana <input_path> -w
```

*Output to dir when passing files.*

```sh
$ banana <input_path> -o <out_path>
```

*Show the project version.*

```sh
$ banana --version
```

*Show all available commands.*

```sh
$ banana --help
```

<hr>

## Module Usage

```js
const inputBananaCode = '.a {bnn-size: 50px;}';

// Features injection
const config = {};
config.bnnSize = true; // Default: false
config.bnnPosition = true; // Default: false
config.bnnGradient = true; // Default: false
config.bnnVariable = true; // Default: false
config.bnnImport = true; // Default: false
config.bnnAlign = true; // Default: false
config.bnnWidth = true; // Default: false
config.bnnHeight = true; // Default: false
config.bnnCol = true; // Default: false
config.bnnRow = true; // Default: false
config.bnnBox= true; // Default: false
config.compress = true; // Default: false

const Banana = require('banana')(config);

// Output the css
const output = Banana.render("./fake_path.bnn", inputBananaCode);

console.log(output); // .a {width: 50px; height: 50px;}
```

<hr>

## Features

- [bnn-size](docs/features-docs.md#bnn-size) property.
- [bnn-position](docs/features-docs.md#bnn-position) property.
- [bnn-gradient](docs/features-docs.md#bnn-gradient) property.
- [bnn-align](docs/features-docs.md#bnn-align) property.
- [bnn-width](docs/features-docs.md#bnn-width) property.
- [bnn-height](docs/features-docs.md#bnn-height) property.
- Intuitive box model with [bnn-box](docs/features-docs.md#bnn-box) property and inside/outside values.
- Customizable [Grid System](docs/features-docs.md#grid-system) with `bnn-row` and `bnn-col`.
- [Module Bundler](docs/features-docs.md#module-bundler) with native `@import` syntax.
- Global [variables](docs/features-docs.md#variables) with native custom properties syntax.
- Minify/Compress the generated CSS.

View all [features docs here](docs/features-docs.md).

<hr>

## Example

*Banana code:*
```css
/* style.bnn */
.header {
	bnn-size: 100% 300px;
	bnn-position: center;
	bnn-gradient: #000 #fff;
	bnn-align: center bottom;
}
```

*Result:*
```css
/* style.css */
.header {
  width: 100%;
  height: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(to bottom, #000, #fff);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
}
```

<hr>

## Development

### Code Style

Follow the [Banana NodeJS style guide](https://github.com/bananacss/banana-style-guide).

*Validate the code style with [ESLint](http://eslint.org/):*
```sh
$ npm run eslint
```

### Code Docs

*Generate code docs with [JSDocs](http://usejsdoc.org/)*
```sh
$ npm run jsdocs
```

View code docs in `out/index.html`

### Tests

*Run the unit tests with [mocha](https://mochajs.org/):*
```sh
$ npm test
```

*Calculate the coverage with [Istanbul](https://gotwarlost.github.io/istanbul/):*
```sh
$ npm run cover
```

<hr>

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/bananacss/bananacss/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/bananacss/bananacss/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/bananacss/bananacss/releases) for detailed changelog.

## License

[MIT License](https://github.com/bananacss/bananacss/blob/master/LICENSE.md) © [Afonso Pacifer](http://afonsopacifer.com/)
