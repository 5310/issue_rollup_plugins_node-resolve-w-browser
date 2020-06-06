import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import polyfills from 'rollup-plugin-node-polyfills'

export default {
  input: "index.js",
  output: {
    dir: "web_modules",
    format: "esm",
  },
  plugins: [
    resolve({
      mainFields: ["browser:module", "module", "main"], // does not have `browser`
    }),
    commonjs(),
    json(), // test-case CJS package has some JSON in the graph
    polyfills(), // does not fail to resolve anything
  ],
};
