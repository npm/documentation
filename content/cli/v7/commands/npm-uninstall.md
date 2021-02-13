---
title: npm-uninstall
section: 1
description: Remove a package
redirect_from:
  - /cli/uninstall
  - /cli/uninstall.html
  - /cli/commands/uninstall
  - /cli-commands/uninstall
  - /cli-commands/uninstall.html
  - /cli-commands/npm-uninstall
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-uninstall.md
---

### Synopsis

```bash
npm uninstall [<@scope>/]<pkg>[@<version>]... [-S|--save|--no-save]

aliases: remove, rm, r, un, unlink
```

### Description

This uninstalls a package, completely removing everything npm installed
on its behalf.

It also removes the package from the `dependencies`, `devDependencies`,
`optionalDependencies`, and `peerDependencies` objects in your
`package.json`.

Futher, if you have an `npm-shrinkwrap.json` or `package-lock.json`, npm
will update those files as well.

`--no-save` will tell npm not to remove the package from your
`package.json`, `npm-shrinkwrap.json`, or `package-lock.json` files.

`--save` or `-S` will tell npm to remove the package from your
`package.json`, `npm-shrinkwrap.json`, and `package-lock.json` files.
This is the default, but you may need to use this if you have for
instance `save=false` in your `npmrc` file

In global mode (ie, with `-g` or `--global` appended to the command),
it uninstalls the current package context as a global package.
`--no-save` is ignored in this case.

Scope is optional and follows the usual rules for [`scope`](/cli/v7/using-npm/scope).

### Examples

```bash
npm uninstall sax
```

`sax` will no longer be in your `package.json`, `npm-shrinkwrap.json`, or
`package-lock.json` files.

```bash
npm uninstall lodash --no-save
```

`lodash` will not be removed from your `package.json`,
`npm-shrinkwrap.json`, or `package-lock.json` files.

### See Also

* [npm prune](/cli/v7/commands/npm-prune)
* [npm install](/cli/v7/commands/npm-install)
* [npm folders](/cli/v7/configuring-npm/folders)
* [npm config](/cli/v7/commands/npm-config)
* [npmrc](/cli/v7/configuring-npm/npmrc)
