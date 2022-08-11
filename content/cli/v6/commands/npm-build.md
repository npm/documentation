---
title: npm-build
section: 1
description: Build a package
github_repo: npm/cli
github_branch: v6-docs
github_path: docs/content/commands/npm-build.md
---

### Synopsis
```shell
npm build [<package-folder>]
```

* `<package-folder>`:
  A folder containing a `package.json` file in its root.

### Description

This is the plumbing command called by `npm link` and `npm install`.

It should generally be called during installation, but if you need to run it
directly, run:
```bash
    npm build
```

### See Also

* [npm install](/cli/v6/commands/npm-install)
* [npm link](/cli/v6/commands/npm-link)
* [npm scripts](/cli/v6/using-npm/scripts)
* [package.json](/cli/v6/configuring-npm/package-json)
