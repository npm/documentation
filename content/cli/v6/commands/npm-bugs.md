---
title: npm-bugs
section: 1
description: Bugs for a package in a web browser maybe
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-bugs.md
redirect_from:
  - /cli-documentation/v6/bugs
  - /cli-documentation/v6/cli-commands/bugs
  - /cli-documentation/v6/cli-commands/npm-bugs
  - /cli-documentation/v6/commands/bugs
  - /cli-documentation/v6/commands/npm-bugs
  - /cli-documentation/v6/npm-bugs
  - /cli/v6/bugs
  - /cli/v6/cli-commands/bugs
  - /cli/v6/cli-commands/npm-bugs
  - /cli/v6/commands/bugs
  - /cli/v6/npm-bugs
---

### Synopsis
```bash
npm bugs [<pkgname>]

aliases: issues
```

### Description

This command tries to guess at the likely location of a package's
bug tracker URL, and then tries to open it using the `--browser`
config param. If no package name is provided, it will search for
a `package.json` in the current folder and use the `name` property.

### Configuration

#### browser

* Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
* Type: String

The browser that is called by the `npm bugs` command to open websites.

#### registry

* Default: https://registry.npmjs.org/
* Type: url

The base URL of the npm package registry.


### See Also

* [npm docs](/cli/v6/commands/npm-docs)
* [npm view](/cli/v6/commands/npm-view)
* [npm publish](/cli/v6/commands/npm-publish)
* [npm registry](/cli/v6/using-npm/registry)
* [npm config](/cli/v6/commands/npm-config)
* [npmrc](/cli/v6/configuring-npm/npmrc)
* [package.json](/cli/v6/configuring-npm/package-json)
