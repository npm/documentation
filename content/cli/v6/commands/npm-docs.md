---
title: npm-docs
section: 1
description: Docs for a package in a web browser maybe
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-docs.md
redirect_from:
  - /cli-documentation/v6/cli-commands/docs
  - /cli-documentation/v6/cli-commands/npm-docs
  - /cli-documentation/v6/commands/docs
  - /cli-documentation/v6/commands/npm-docs
  - /cli-documentation/v6/docs
  - /cli-documentation/v6/npm-docs
  - /cli/v6/cli-commands/docs
  - /cli/v6/cli-commands/npm-docs
  - /cli/v6/commands/docs
  - /cli/v6/docs
  - /cli/v6/npm-docs
---

### Synopsis

```bash
npm docs [<pkgname> [<pkgname> ...]]
npm docs .
npm home [<pkgname> [<pkgname> ...]]
npm home .
```

### Description

This command tries to guess at the likely location of a package's
documentation URL, and then tries to open it using the `--browser`
config param. You can pass multiple package names at once. If no
package name is provided, it will search for a `package.json` in
the current folder and use the `name` property.

### Configuration

#### browser

* Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
* Type: String

The browser that is called by the `npm docs` command to open websites.

#### registry

* Default: https://registry.npmjs.org/
* Type: url

The base URL of the npm package registry.


### See Also

* [npm view](/cli/v6/commands/npm-view)
* [npm publish](/cli/v6/commands/npm-publish)
* [npm registry](/cli/v6/using-npm/registry)
* [npm config](/cli/v6/commands/npm-config)
* [npmrc](/cli/v6/configuring-npm/npmrc)
* [package.json](/cli/v6/configuring-npm/package-json)
