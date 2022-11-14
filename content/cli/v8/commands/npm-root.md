---
title: npm-root
section: 1
description: Display npm root
github_repo: npm/cli
github_branch: release/v8
github_path: docs/lib/content/commands/npm-root.md
redirect_from:
  - /cli-documentation/v8/cli-commands/npm-root
  - /cli-documentation/v8/cli-commands/root
  - /cli-documentation/v8/commands/npm-root
  - /cli-documentation/v8/commands/root
  - /cli-documentation/v8/npm-root
  - /cli-documentation/v8/root
  - /cli/v8/cli-commands/npm-root
  - /cli/v8/cli-commands/root
  - /cli/v8/commands/root
  - /cli/v8/npm-root
  - /cli/v8/root
---

### Synopsis

```bash
npm root
```

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
[folders](/cli/v8/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`

### See Also

* [npm prefix](/cli/v8/commands/npm-prefix)
* [npm bin](/cli/v8/commands/npm-bin)
* [npm folders](/cli/v8/configuring-npm/folders)
* [npm config](/cli/v8/commands/npm-config)
* [npmrc](/cli/v8/configuring-npm/npmrc)
