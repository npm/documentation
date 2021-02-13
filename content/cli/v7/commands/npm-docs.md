---
title: npm-docs
section: 1
description: Open documentation for a package in a web browser
redirect_from:
  - /cli/docs
  - /cli/docs.html
  - /cli/commands/docs
  - /cli-commands/docs
  - /cli-commands/docs.html
  - /cli-commands/npm-docs
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-docs.md
---

### Synopsis

```bash
npm docs [<pkgname> [<pkgname> ...]]

aliases: home
```

### Description

This command tries to guess at the likely location of a package's
documentation URL, and then tries to open it using the `--browser` config
param. You can pass multiple package names at once. If no package name is
provided, it will search for a `package.json` in the current folder and use
the `name` property.

### Configuration

#### browser

* Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
* Type: String or Boolean

The browser that is called by the `npm docs` command to open websites.

Set to `false` to suppress browser behavior and instead print urls to
terminal.

Set to `true` to use default system URL opener.

#### registry

* Default: https://registry.npmjs.org/
* Type: url

The base URL of the npm package registry.

### See Also

* [npm view](/cli/v7/commands/npm-view)
* [npm publish](/cli/v7/commands/npm-publish)
* [npm registry](/cli/v7/using-npm/registry)
* [npm config](/cli/v7/commands/npm-config)
* [npmrc](/cli/v7/configuring-npm/npmrc)
* [package.json](/cli/v7/configuring-npm/package-json)
