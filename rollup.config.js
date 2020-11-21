import pkg from './package.json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const banner = `/*! ${pkg.name} v${pkg.version} | ${pkg.homepage} */`;

export default {
  input: 'src/index.js',
  output: [
    { format: 'umd', file: pkg.browser, name: pkg.name, banner },
    { format: 'cjs', file: pkg.main, banner },
    { format: 'esm', file: pkg.module, banner }
  ],
  plugins: [
    nodeResolve(),
    babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
    commonjs(),
    terser()
  ]
};
