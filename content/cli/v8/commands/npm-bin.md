---
title: npm-bin
section: 1
description: Display npm bin folder
github_repo: npm/cli
github_branch: release/v8
github_path: docs/lib/content/commands/npm-bin.md
redirect_from:
  - /cli-documentation/v8/bin
  - /cli-documentation/v8/cli-commands/bin
  - /cli-documentation/v8/cli-commands/npm-bin
  - /cli-documentation/v8/commands/bin
  - /cli-documentation/v8/commands/npm-bin
  - /cli-documentation/v8/npm-bin
  - /cli/v8/bin
  - /cli/v8/cli-commands/bin
  - /cli/v8/cli-commands/npm-bin
  - /cli/v8/commands/bin
  - /cli/v8/npm-bin
---

### Synopsis

```bash
npm bin
```

Note: This command is unaware of workspaces.

### Description

Print the folder where npm will install executables.

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

* [npm prefix](/cli/v8/commands/npm-prefix)
* [npm root](/cli/v8/commands/npm-root)
* [npm folders](/cli/v8/configuring-npm/folders)
* [npm config](/cli/v8/commands/npm-config)
* [npmrc](/cli/v8/configuring-npm/npmrc)
