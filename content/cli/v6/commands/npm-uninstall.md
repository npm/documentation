---
title: npm-uninstall
section: 1
description: Remove a package
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-uninstall.md
redirect_from:
  - /cli-documentation/v6/cli-commands/npm-uninstall
  - /cli-documentation/v6/cli-commands/uninstall
  - /cli-documentation/v6/commands/npm-uninstall
  - /cli-documentation/v6/commands/uninstall
  - /cli-documentation/v6/npm-uninstall
  - /cli-documentation/v6/uninstall
  - /cli/v6/cli-commands/npm-uninstall
  - /cli/v6/cli-commands/uninstall
  - /cli/v6/commands/uninstall
  - /cli/v6/npm-uninstall
  - /cli/v6/uninstall
---

### Synopsis

```bash
npm uninstall [<@scope>/]<pkg>[@<version>]... [-S|--save|-D|--save-dev|-O|--save-optional|--no-save]

aliases: remove, rm, r, un, unlink
```

### Description

This uninstalls a package, completely removing everything npm installed
on its behalf.

Example:

```bash
npm uninstall sax
```

In global mode (ie, with `-g` or `--global` appended to the command),
it uninstalls the current package context as a global package.

`npm uninstall` takes 3 exclusive, optional flags which save or update
the package version in your main package.json:

* `-S, --save`: Package will be removed from your `dependencies`.

* `-D, --save-dev`: Package will be removed from your `devDependencies`.

* `-O, --save-optional`: Package will be removed from your `optionalDependencies`.

* `--no-save`: Package will not be removed from your `package.json` file.

Further, if you have an `npm-shrinkwrap.json` then it will be updated as
well.

Scope is optional and follows the usual rules for [`scope`](/cli/v6/using-npm/scope).

Examples:
```bash
npm uninstall sax --save
npm uninstall @myorg/privatepackage --save
npm uninstall node-tap --save-dev
npm uninstall dtrace-provider --save-optional
npm uninstall lodash --no-save
```

### See Also

* [npm prune](/cli/v6/commands/npm-prune)
* [npm install](/cli/v6/commands/npm-install)
* [npm folders](/cli/v6/configuring-npm/folders)
* [npm config](/cli/v6/commands/npm-config)
* [npmrc](/cli/v6/configuring-npm/npmrc)
