---
title: npm-root
section: 1
description: Display npm root
github_repo: npm/cli
github_branch: latest
github_path: docs/lib/content/commands/npm-root.md
redirect_from:
  - /cli-commands/npm-root
  - /cli-commands/root
  - /cli-documentation/cli-commands/npm-root
  - /cli-documentation/cli-commands/root
  - /cli-documentation/commands/npm-root
  - /cli-documentation/commands/root
  - /cli-documentation/npm-root
  - /cli-documentation/root
  - /cli-documentation/v9/cli-commands/npm-root
  - /cli-documentation/v9/cli-commands/root
  - /cli-documentation/v9/commands/npm-root
  - /cli-documentation/v9/commands/root
  - /cli-documentation/v9/npm-root
  - /cli-documentation/v9/root
  - /cli/cli-commands/npm-root
  - /cli/cli-commands/root
  - /cli/commands/npm-root
  - /cli/commands/root
  - /cli/npm-root
  - /cli/root
  - /cli/v9/cli-commands/npm-root
  - /cli/v9/cli-commands/root
  - /cli/v9/commands/root
  - /cli/v9/npm-root
  - /cli/v9/root
  - /commands/npm-root
  - /commands/root
---

### Synopsis

```bash
npm root
```

Note: This command is unaware of workspaces.

### Description

Print the effective `node_modules` folder to standard out.

Useful for using npm in shell scripts that do things with the
`node_modules` folder.  For example:

```bash
#!/bin/bash
global_node_modules="$(npm root --global)"
echo "Global packages installed in: ${global_node_modules}"
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

* [npm prefix](/cli/v9/commands/npm-prefix)
* [npm folders](/cli/v9/configuring-npm/folders)
* [npm config](/cli/v9/commands/npm-config)
* [npmrc](/cli/v9/configuring-npm/npmrc)
