# ES6 Boilerplate

> Minimal boilerplate for ES6 (ES2015) JavaScript projects.

## Features

* [ES6](http://www.ecma-international.org/ecma-262/6.0/) syntax using the [Babel transpiler](https://babeljs.io/)
* Build for the browser using a [UMD (Universal Module Definition)](https://github.com/umdjs/umd) wrapper with [Browserify](http://browserify.org/)
* Automated tasks using the [Gulp](http://gulpjs.com/) task runner
* Code linting using [ESLint](http://eslint.org/)
* Unit testing with [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), and [Sinon](http://sinonjs.org/)
* Code coverage reports using [Istanbul](https://github.com/gotwarlost/istanbul) and [Isparta](https://github.com/douglasduteil/isparta).
* Code minification and optimization using [UglifyJS 2](https://github.com/mishoo/UglifyJS2)
* Automatically generates [source maps](https://github.com/ryanseddon/source-map/wiki/Source-maps:-languages,-tools-and-other-info)
* Includes `.travis.yml` file to support continuous integration with [Travis CI](https://travis-ci.org/)
* Automatically includes a (configurable) banner to the distributed builds

## Setup Guide

1. Run `npm install` to install the developmental dependencies
2. If you don't have Gulp installed globally, run `npm install -g gulp` to do so
3. Open `package.json` and change the relevant fields: `name`, `description`, `homepage`, etc.
4. Open `gulpfile.babel.js` and change the `config` variable to reflect the directory structure and filenames you prefer
5. If you do change the `config` variable, ensure you mirror the changes in the directory and files
5. Edit `.eslintrc` to change the linting rules to suit your preferences

## Gulp Tasks

* `gulp lint` - Run ESLint against source files, test specs, and the gulpfile
* `gulp test` - Run Mocha unit tests
* `gulp coverage` - Run Mocha unit tests and generate code coverage reports
* `gulp build` - Transpile ES6 to ES5, bundle, wrap in UMD, minify, generate source map, and write to `dist` directory
* `gulp watch` - Watch for changes in files and automatically run `gulp lint` and `gulp test` tasks
* `gulp` - Default tasks, runs `gulp lint`, `gulp coverage`, `gulp build`, and `gulp watch`

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).