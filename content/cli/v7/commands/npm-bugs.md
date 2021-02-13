---
title: npm-bugs
section: 1
description: Report bugs for a package in a web browser
redirect_from:
  - /cli/bugs
  - /cli/bugs.html
  - /cli/commands/bugs
  - /cli-commands/bugs
  - /cli-commands/bugs.html
  - /cli-commands/npm-bugs
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-bugs.md
---

### Synopsis

```bash
npm bugs [<pkgname> [<pkgname> ...]]

aliases: issues
```

### Description

This command tries to guess at the likely location of a package's bug
tracker URL, and then tries to open it using the `--browser` config param.
If no package name is provided, it will search for a `package.json` in the
current folder and use the `name` property.

### Configuration

#### browser

* Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
* Type: String or Boolean

The browser that is called by the `npm bugs` command to open websites.

Set to `false` to suppress browser behavior and instead print urls to
terminal.

Set to `true` to use default system URL opener.

#### registry

* Default: https://registry.npmjs.org/
* Type: url

The base URL of the npm package registry.

### See Also

* [npm docs](/cli/v7/commands/npm-docs)
* [npm view](/cli/v7/commands/npm-view)
* [npm publish](/cli/v7/commands/npm-publish)
* [npm registry](/cli/v7/using-npm/registry)
* [npm config](/cli/v7/commands/npm-config)
* [npmrc](/cli/v7/configuring-npm/npmrc)
* [package.json](/cli/v7/configuring-npm/package-json)
