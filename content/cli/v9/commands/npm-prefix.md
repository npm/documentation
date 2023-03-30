---
title: npm-prefix
section: 1
description: Display prefix
github_repo: npm/cli
github_branch: latest
github_path: docs/lib/content/commands/npm-prefix.md
redirect_from:
  - /cli-commands/npm-prefix
  - /cli-commands/prefix
  - /cli-documentation/cli-commands/npm-prefix
  - /cli-documentation/cli-commands/prefix
  - /cli-documentation/commands/npm-prefix
  - /cli-documentation/commands/prefix
  - /cli-documentation/npm-prefix
  - /cli-documentation/prefix
  - /cli-documentation/v9/cli-commands/npm-prefix
  - /cli-documentation/v9/cli-commands/prefix
  - /cli-documentation/v9/commands/npm-prefix
  - /cli-documentation/v9/commands/prefix
  - /cli-documentation/v9/npm-prefix
  - /cli-documentation/v9/prefix
  - /cli/cli-commands/npm-prefix
  - /cli/cli-commands/prefix
  - /cli/commands/npm-prefix
  - /cli/commands/prefix
  - /cli/npm-prefix
  - /cli/prefix
  - /cli/v9/cli-commands/npm-prefix
  - /cli/v9/cli-commands/prefix
  - /cli/v9/commands/prefix
  - /cli/v9/npm-prefix
  - /cli/v9/prefix
  - /commands/npm-prefix
  - /commands/prefix
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
[`npm config`](/cli/v9/commands/npm-config) for more detail.

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
[folders](/cli/v9/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`

### See Also

* [npm root](/cli/v9/commands/npm-root)
* [npm folders](/cli/v9/configuring-npm/folders)
* [npm config](/cli/v9/commands/npm-config)
* [npmrc](/cli/v9/configuring-npm/npmrc)
