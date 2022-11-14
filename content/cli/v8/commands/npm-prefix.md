---
title: npm-prefix
section: 1
description: Display prefix
github_repo: npm/cli
github_branch: release/v8
github_path: docs/lib/content/commands/npm-prefix.md
redirect_from:
  - /cli-documentation/v8/cli-commands/npm-prefix
  - /cli-documentation/v8/cli-commands/prefix
  - /cli-documentation/v8/commands/npm-prefix
  - /cli-documentation/v8/commands/prefix
  - /cli-documentation/v8/npm-prefix
  - /cli-documentation/v8/prefix
  - /cli/v8/cli-commands/npm-prefix
  - /cli/v8/cli-commands/prefix
  - /cli/v8/commands/prefix
  - /cli/v8/npm-prefix
  - /cli/v8/prefix
---

### Synopsis

```bash
npm prefix [-g]
```

Note: This command is unaware of workspaces.

### Description

Print the local prefix to standard output. This is the closest parent directory
to contain a `package.json` file or `node_modules` directory, unless `-g` is
also specified.

If `-g` is specified, this will be the value of the global prefix. See
[`npm config`](/cli/v8/commands/npm-config) for more detail.

### Example

```bash
npm prefix
/usr/local/projects/foo
```

```bash
npm prefix -g
/usr/local
```

### Configuration

#### `global`

* Default: false
* Type: Boolean

Operates in "global" mode, so that packages are installed into the `prefix`
folder instead of the current working directory. See
[folders](/cli/v8/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`

### See Also

* [npm root](/cli/v8/commands/npm-root)
* [npm bin](/cli/v8/commands/npm-bin)
* [npm folders](/cli/v8/configuring-npm/folders)
* [npm config](/cli/v8/commands/npm-config)
* [npmrc](/cli/v8/configuring-npm/npmrc)
