---
title: npm-edit
section: 1
description: Edit an installed package
github_repo: npm/cli
github_branch: latest
github_path: docs/lib/content/commands/npm-edit.md
redirect_from:
  - /cli-commands/edit
  - /cli-commands/npm-edit
  - /cli-documentation/cli-commands/edit
  - /cli-documentation/cli-commands/npm-edit
  - /cli-documentation/commands/edit
  - /cli-documentation/commands/npm-edit
  - /cli-documentation/edit
  - /cli-documentation/npm-edit
  - /cli-documentation/v9/cli-commands/edit
  - /cli-documentation/v9/cli-commands/npm-edit
  - /cli-documentation/v9/commands/edit
  - /cli-documentation/v9/commands/npm-edit
  - /cli-documentation/v9/edit
  - /cli-documentation/v9/npm-edit
  - /cli/cli-commands/edit
  - /cli/cli-commands/npm-edit
  - /cli/commands/edit
  - /cli/commands/npm-edit
  - /cli/edit
  - /cli/npm-edit
  - /cli/v9/cli-commands/edit
  - /cli/v9/cli-commands/npm-edit
  - /cli/v9/commands/edit
  - /cli/v9/edit
  - /cli/v9/npm-edit
  - /commands/edit
  - /commands/npm-edit
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

* Default: The EDITOR or VISUAL environment variables, or
  '%SYSTEMROOT%\notepad.exe' on Windows, or 'vi' on Unix systems
* Type: String

The command to run for `npm edit` and `npm config edit`.

### See Also

* [npm folders](/cli/v9/configuring-npm/folders)
* [npm explore](/cli/v9/commands/npm-explore)
* [npm install](/cli/v9/commands/npm-install)
* [npm config](/cli/v9/commands/npm-config)
* [npmrc](/cli/v9/configuring-npm/npmrc)
