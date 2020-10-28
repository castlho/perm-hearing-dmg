import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import config from 'sapper/config/rollup.js'
import path from 'path'
import pkg from './package.json'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'
import url from '@rollup/plugin-url'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const onwarn = (warning, callback) =>
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
  callback(warning)

export default {
  client: {
    input: config.client.input(),
    onwarn,
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        dev,
        emitCss: true,
        hydratable: true,
      }),
      url({
        publicPath: '/client/',
        sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
      }),
      resolve({
        browser: true,
        dedupe: [ 'svelte' ],
      }),
      commonjs(),
      legacy && babel({
        babelHelpers: 'runtime',
        exclude: [ 'node_modules/@babel/**' ],
        extensions: [ '.js', '.mjs', '.html', '.svelte' ],
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
          [
            '@babel/plugin-transform-runtime',
            { useESModules: true },
          ],
        ],
        presets: [
          [
            '@babel/preset-env',
            { targets: '> 0.25%, not dead' },
          ],
        ],
      }),
      !dev && terser({ module: true }),
    ],
    preserveEntrySignatures: false,
  },
  server: {
    external: Object.keys(pkg.dependencies)
      .concat(require('module').builtinModules),
    input: config.server.input(),
    onwarn,
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        dev,
        generate: 'ssr',
        hydratable: true,
      }),
      url({
        emitFiles: false, // already emitted by client build
        publicPath: '/client/',
        sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
      }),
      resolve({ dedupe: [ 'svelte' ] }),
      commonjs(),
    ],
    preserveEntrySignatures: 'strict',
  },
  serviceworker: {
    input: config.serviceworker.input(),
    onwarn,
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],
    preserveEntrySignatures: false,
  },
}
