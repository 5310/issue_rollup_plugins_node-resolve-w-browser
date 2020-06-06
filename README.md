> This is a bug reproduction repository.
> 
> See:
>
> - https://www.pika.dev/npm/snowpack/discuss/275
> - https://github.com/rollup/plugins/issues/440

Upon trying to use a CJS dependency with Snowpack we discovered that the `rollup-plugin-node-polyfills` plugin breaks if the `@rollup/plugin-node-resolve` plugin targets `browser` as a `mainField`.

Caveat: Rollup can actually build the test-case dependency without having to use the polyfills at all, but the Rollup configuration within Snowpack can't handle the node builtins, which is why we had to add a polyfill library. However, the issue seems to be more with how the resolve plugin adds empty files for browser imports, which is why this repro was made.

`$ npm run broken` running the `rollup.config.broken.js` with node-resolve targeting the browser and the polyfill plugin breaks with `[!] Error: 'Buffer' is not exported by node-resolve:empty.js, imported by node_modules/node-forge/lib/baseN.js`

However, `$ npm run working` running the `rollup.config.working.js` which is the same as before but without the `browser` `mainField` can build it just fine.
