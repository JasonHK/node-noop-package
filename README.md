@jasonhk/noop-package
=====================

A package that does absolutely nothing.

[![npm-version-badge]][npm-package] [![npm-download-badge]][npm-package] [![npm-license-badge]][github-license] [![travis-build-badge]][travis-build] [![codecov-coverage-badge]][codecov-coverage]

## Motivation

In some circumstances, package bundlers might fail to remove modules that were not used. This package intended to be used as a placeholder module in those situations.

You can configure the bundler to use this package to replace the modules that were not able to remove. This way you can reduce the size of the package bundle.

## Installation

### NPM

```bash
$ npm install @jasonhk/noop-package
```

### Yarn

```bash
$ yarn add @jasonhk/noop-package
```

## License

Copyright &copy; 2020 [Jason Kwok][author-website].<br>
Licensed under [the Unlicense][github-license].

[author-website]: https://jasonhk.net/ "Author's Website"

[github-license]: https://github.com/JasonHK/node-noop-package/blob/master/LICENSE "Package's License File"

[npm-package]: https://www.npmjs.com/package/@jasonhk/noop-package "Package's NPM Registry Entry"
[npm-download-badge]: https://img.shields.io/npm/dt/@jasonhk/noop-package?style=flat-square "Package's Total Downloads"
[npm-license-badge]: https://img.shields.io/npm/l/@jasonhk/noop-package?style=flat-square "Package's License"
[npm-version-badge]: https://img.shields.io/npm/v/@jasonhk/noop-package?style=flat-square "Package's Version"

[travis-build]: https://travis-ci.com/JasonHK/node-noop-package "Repository's Travis CI Page"
[travis-build-badge]: https://img.shields.io/travis/com/JasonHK/node-noop-package?style=flat-square "Repository's Build Status"

[codecov-coverage]: https://codecov.io/gh/JasonHK/node-noop-package "Repository's Codecov Page"
[codecov-coverage-badge]: https://img.shields.io/codecov/c/github/JasonHK/node-noop-package?style=flat-square "Repository's Code Coverage"
