# js-boilerplate

> Minimal boilerplate for Node.js and universal JavaScript projects.

## Features

* Bundle modules with [Rollup](https://rollupjs.org) and generate a build for each of [CJS](http://www.commonjs.org/), [ESM](https://v8.dev/features/modules), and [UMD](https://github.com/umdjs/umd)
* Code linting courtesy of [ESLint](http://eslint.org/)
* Unit testing with [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), and [Sinon](http://sinonjs.org/)
* Code minification via [terser](https://github.com/terser/terser)
* Includes `.travis.yml` file to support continuous integration with [Travis CI](https://travis-ci.org/)
* Automatically includes a (configurable) banner to the distributed builds

## Setup

1. Run `npm install` to install the developmental dependencies
2. Open `package.json` and change the relevant fields: `name`, `description`, `homepage`, etc.
3. Open `rollup.config.js` and make the necessary changes to reflect your preferences

## Commands

* `npm test` - Run unit tests
* `npm run lint` - Lint source files and test specs
* `npm run build` - Bundle, transpile, and minify the source into the distributed builds

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).