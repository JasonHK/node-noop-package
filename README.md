@jasonhk/noop-package
=====================

A package that does absolutely nothing.

[![npm-version-badge]][npm] [![npm-download-badge]][npm] [![npm-license-badge]][github-license] [![libraries.io-dependencies-badge]][libraries.io] [![travis-build-badge]][travis] [![codeclimate-maintainability-badge]][codeclimate] [![codecov-coverage-badge]][codecov-coverage]

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

[![fossa-status-badge]][fossa]

[author-website]: https://jasonhk.net/ "Author's Website"

[github-license]: https://github.com/JasonHK/node-noop-package/blob/master/LICENSE "Package's License File"

[npm]: https://www.npmjs.com/package/@jasonhk/noop-package "Package's NPM Page"
[npm-download-badge]: https://img.shields.io/npm/dt/@jasonhk/noop-package?style=flat-square "Package's Total Downloads"
[npm-license-badge]: https://img.shields.io/npm/l/@jasonhk/noop-package?style=flat-square "Package's License"
[npm-version-badge]: https://img.shields.io/npm/v/@jasonhk/noop-package?style=flat-square "Package's Version"

[libraries.io]: https://libraries.io/npm/@jasonhk%2Fnoop-package "Package's Libraries.io Page"
[libraries.io-dependencies-badge]: https://img.shields.io/librariesio/release/npm/@jasonhk/noop-package?style=flat-square "Package's Sependency Status"

[travis]: https://travis-ci.com/JasonHK/node-noop-package "Repository's Travis CI Page"
[travis-build-badge]: https://img.shields.io/travis/com/JasonHK/node-noop-package?style=flat-square "Repository's Build Status"

[codeclimate]: https://codeclimate.com/github/JasonHK/node-noop-package "Repository's Code Climate Page"
[codeclimate-maintainability-badge]: https://img.shields.io/codeclimate/maintainability/JasonHK/node-noop-package?style=flat-square "Repository's Code Maintainability"

[codecov-coverage]: https://codecov.io/gh/JasonHK/node-noop-package "Repository's Codecov Page"
[codecov-coverage-badge]: https://img.shields.io/codecov/c/github/JasonHK/node-noop-package?style=flat-square "Repository's Code Coverage"

[fossa]: https://app.fossa.com/projects/git%2Bgithub.com%2FJasonHK%2Fnode-noop-package/refs/branch/master/790626ce4fe615e134fc47e0427f571f51f54075 "Repository's FOSSA Page"
[fossa-status-badge]: https://app.fossa.com/api/projects/git%2Bgithub.com%2FJasonHK%2Fnode-noop-package.svg?type=large "Repository's License Check Status"
