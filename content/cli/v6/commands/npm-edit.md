---
title: npm-edit
section: 1
description: Edit an installed package
github_repo: npm/cli
github_branch: v6
github_path: docs/content/commands/npm-edit.md
---

### Synopsis

```bash
npm edit <pkg>[/<subpkg>...]
```

### Description

Selects a (sub)dependency in the current
working directory and opens the package folder in the default editor
(or whatever you've configured as the npm `editor` config -- see
[`npm-config`](npm-config).)

After it has been edited, the package is rebuilt so as to pick up any
changes in compiled packages.

For instance, you can do `npm install connect` to install connect
into your package, and then `npm edit connect` to make a few
changes to your locally installed copy.

### Configuration

#### editor

* Default: `EDITOR` environment variable if set, or `"vi"` on Posix,
  or `"notepad"` on Windows.
* Type: path

The command to run for `npm edit` or `npm config edit`.

### See Also

* [npm folders](/cli/v6/configuring-npm/folders)
* [npm explore](/cli/v6/commands/npm-explore)
* [npm install](/cli/v6/commands/npm-install)
* [npm config](/cli/v6/commands/npm-config)
* [npmrc](/cli/v6/configuring-npm/npmrc)
