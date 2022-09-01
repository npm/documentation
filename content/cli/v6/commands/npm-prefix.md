---
title: npm-prefix
section: 1
description: Display prefix
github_repo: npm/cli
github_branch: v6
github_path: docs/content/commands/npm-prefix.md
---

### Synopsis

```bash
npm prefix [-g]
```

### Description

Print the local prefix to standard out. This is the closest parent directory
to contain a `package.json` file or `node_modules` directory, unless `-g` is
also specified.

If `-g` is specified, this will be the value of the global prefix. See
[`npm config`](/cli/v6/commands/npm-config) for more detail.

### See Also

* [npm root](/cli/v6/commands/npm-root)
* [npm bin](/cli/v6/commands/npm-bin)
* [npm folders](/cli/v6/configuring-npm/folders)
* [npm config](/cli/v6/commands/npm-config)
* [npmrc](/cli/v6/configuring-npm/npmrc)
