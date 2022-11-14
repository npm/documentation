---
title: npm-edit
section: 1
description: Edit an installed package
github_repo: npm/cli
github_branch: release/v8
github_path: docs/lib/content/commands/npm-edit.md
redirect_from:
  - /cli-documentation/v8/cli-commands/edit
  - /cli-documentation/v8/cli-commands/npm-edit
  - /cli-documentation/v8/commands/edit
  - /cli-documentation/v8/commands/npm-edit
  - /cli-documentation/v8/edit
  - /cli-documentation/v8/npm-edit
  - /cli/v8/cli-commands/edit
  - /cli/v8/cli-commands/npm-edit
  - /cli/v8/commands/edit
  - /cli/v8/edit
  - /cli/v8/npm-edit
---

### Synopsis

```bash
npm edit <pkg>[/<subpkg>...]
```

Note: This command is unaware of workspaces.

### Description

Selects a dependency in the current project and opens the package folder in
the default editor (or whatever you've configured as the npm `editor`
config -- see [`npm-config`](npm-config).)

After it has been edited, the package is rebuilt so as to pick up any
changes in compiled packages.

For instance, you can do `npm install connect` to install connect
into your package, and then `npm edit connect` to make a few
changes to your locally installed copy.

### Configuration

#### `editor`

* Default: The EDITOR or VISUAL environment variables, or 'notepad.exe' on
  Windows, or 'vim' on Unix systems
* Type: String

The command to run for `npm edit` and `npm config edit`.

### See Also

* [npm folders](/cli/v8/configuring-npm/folders)
* [npm explore](/cli/v8/commands/npm-explore)
* [npm install](/cli/v8/commands/npm-install)
* [npm config](/cli/v8/commands/npm-config)
* [npmrc](/cli/v8/configuring-npm/npmrc)
