---
title: npm-root
section: 1
description: Display npm root
redirect_from:
  - /cli/root
  - /cli/root.html
  - /cli/commands/root
  - /cli-commands/root
  - /cli-commands/root.html
  - /cli-commands/npm-root
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-root.md
---

### Synopsis

```bash
npm root [-g]
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

### See Also

* [npm prefix](/cli/v7/commands/npm-prefix)
* [npm bin](/cli/v7/commands/npm-bin)
* [npm folders](/cli/v7/configuring-npm/folders)
* [npm config](/cli/v7/commands/npm-config)
* [npmrc](/cli/v7/configuring-npm/npmrc)
