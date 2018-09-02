# libnpm

[`libnpm`](https://github.com/npm/libnpm) is the programmatic API for npm.

For bug reports and support, please head over to [npm.community](https://npm.community).


## Install

`$ npm install libnpm`

## Table of Contents

* [Example](#example)
* [Features](#features)
* [API](#api)
  * Fetching Packages and Their Info
    * [`manifest`](https://www.npmjs.com/package/pacote#manifest)
    * [`packument`](https://www.npmjs.com/package/pacote#packument)
    * [`tarball`](https://www.npmjs.com/package/pacote#tarball)
    * [`extract`](https://www.npmjs.com/package/pacote#extract)
    * [`search`](https://www.npmjs.com/package/libnpmsearch#searchquery-opts---promise)
  * Package-related Registry APIs
    * [`publish`](https://www.npmjs.com/packagelibnpmpublish#libpubpublishpkgjson-tardata-opts---promise)
    * [`unpublish`](https://www.npmjs.com/package/libnpmpublish#libpubunpublishspec-opts---promise)
    * [`access`](https://www.npmjs.com/package/libnpmaccess)
  * Account-related Registry APIs
    * [`login`](https://www.npmjs.com/package/npm-profile#login)
    * [`adduser`](https://www.npmjs.com/package/npm-profile#adduser)
    * [`profile`](https://npm.im/npm-profile)
    * [`hook`](https://www.npmjs.com/package/libnpmhook#api)
    * [`team`](https://www.npmjs.com/package/libnpmteam#api)
    * [`org`](https://www.npmjs.com/package/libnpmorg#api)
  * Miscellaneous
    * [`runScript`](https://www.npmjs.com/package/npm-lifecycle#lifecycle)
    * [`fetch`](https://npm.im/npm-registry-fetch) (plain ol' client for registry interaction)

### Example

```javascript
await libnpm.manifest('libnpm') // => Manifest { name: 'libnpm', ... }
```

### API

This package re-exports the APIs from other packages for convenience. Refer to
the [table of contents](#table-of-contents) for detailed documentation on each
individual exported API.
