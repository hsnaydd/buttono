import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

import appConfig from './app';
import paths from './paths';

export default {
  input: appConfig.entry.scripts,
  output: {
    file: `${paths.styleguide.dist}/${paths.styleguide.assets.scripts}/app.js`,
    format: 'iife', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true,
    name: 'App',
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
  ],
};
