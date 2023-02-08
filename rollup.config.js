import pkg from './package.json' assert { type: "json" };
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const banner = `/*! ${pkg.name} v${pkg.version} | ${pkg.homepage} */`;

export default {
    input: 'src/index.js',
    output: [
        {
            banner,
            name: '<foo>',
            file: pkg.browser,
            format: 'umd'
        },
        {
            banner,
            file: pkg.main,
            format: 'cjs'
        },
        {
            banner,
            file: pkg.module,
            format: 'esm'
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        terser()
    ]
};
