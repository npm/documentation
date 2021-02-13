---
title: npm-prefix
section: 1
description: Display prefix
redirect_from:
  - /cli/prefix
  - /cli/prefix.html
  - /cli/commands/prefix
  - /cli-commands/prefix
  - /cli-commands/prefix.html
  - /cli-commands/npm-prefix
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-prefix.md
---

### Synopsis

```bash
npm prefix [-g]
```

### Description

Print the local prefix to standard output. This is the closest parent directory
to contain a `package.json` file or `node_modules` directory, unless `-g` is
also specified.

If `-g` is specified, this will be the value of the global prefix. See
[`npm config`](/cli/v7/commands/npm-config) for more detail.

### Example

```bash
npm prefix
/usr/local/projects/foo
```

```bash
npm prefix -g
/usr/local
```

### See Also

* [npm root](/cli/v7/commands/npm-root)
* [npm bin](/cli/v7/commands/npm-bin)
* [npm folders](/cli/v7/configuring-npm/folders)
* [npm config](/cli/v7/commands/npm-config)
* [npmrc](/cli/v7/configuring-npm/npmrc)
