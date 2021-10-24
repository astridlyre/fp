import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'index.js',
  output: {
    file: 'fp.js',
    format: 'esm',
  },
  inlineDynamicImports: true,
  plugins: [resolve(), commonjs(), babel({ babelHelpers: 'bundled' })],
}
