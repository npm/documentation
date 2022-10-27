---
title: npm-build
section: 1
description: Build a package
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-build.md
redirect_from:
  - /cli-documentation/v6/build
  - /cli-documentation/v6/cli-commands/build
  - /cli-documentation/v6/cli-commands/npm-build
  - /cli-documentation/v6/commands/build
  - /cli-documentation/v6/commands/npm-build
  - /cli-documentation/v6/npm-build
  - /cli/v6/build
  - /cli/v6/cli-commands/build
  - /cli/v6/cli-commands/npm-build
  - /cli/v6/commands/build
  - /cli/v6/npm-build
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
