import fs from 'node:fs/promises';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import generatePackageJSON from 'rollup-plugin-generate-package-json';

export default async () => {
    const pkg = JSON.parse(await fs.readFile('package.json'));

    return {
        input: 'src/<insert-name>.js',
        output: [
            {
                name: '<insert-name>',
                file: pkg.browser,
                format: 'umd'
            },
            {
                file: pkg.main,
                format: 'cjs',
                plugins: [
                    generatePackageJSON({
                        baseContents: {
                            type: 'commonjs'
                        },
                        outputFolder: 'dist/cjs'
                    })
                ]
            },
            {
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
};
