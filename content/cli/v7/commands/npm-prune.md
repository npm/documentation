---
title: npm-prune
section: 1
description: Remove extraneous packages
redirect_from:
  - /cli/prune
  - /cli/prune.html
  - /cli/commands/prune
  - /cli-commands/prune
  - /cli-commands/prune.html
  - /cli-commands/npm-prune
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-prune.md
---

### Synopsis

```bash
npm prune [[<@scope>/]<pkg>...] [--production] [--dry-run] [--json]
```

### Description

This command removes "extraneous" packages.  If a package name is provided,
then only packages matching one of the supplied names are removed.

Extraneous packages are those present in the `node_modules` folder that are
not listed as any package's dependency list.

If the `--production` flag is specified or the `NODE_ENV` environment
variable is set to `production`, this command will remove the packages
specified in your `devDependencies`. Setting `--no-production` will negate
`NODE_ENV` being set to `production`.

If the `--dry-run` flag is used then no changes will actually be made.

If the `--json` flag is used, then the changes `npm prune` made (or would
have made with `--dry-run`) are printed as a JSON object.

In normal operation, extraneous modules are pruned automatically, so you'll
only need this command with the `--production` flag.  However, in the real
world, operation is not always "normal".  When crashes or mistakes happen,
this command can help clean up any resulting garbage.

### See Also

* [npm uninstall](/cli/v7/commands/npm-uninstall)
* [npm folders](/cli/v7/configuring-npm/folders)
* [npm ls](/cli/v7/commands/npm-ls)
