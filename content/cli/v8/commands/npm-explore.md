---
title: npm-explore
section: 1
description: Browse an installed package
github_repo: npm/cli
github_branch: release/v8
github_path: docs/lib/content/commands/npm-explore.md
redirect_from:
  - /cli-documentation/v8/cli-commands/explore
  - /cli-documentation/v8/cli-commands/npm-explore
  - /cli-documentation/v8/commands/explore
  - /cli-documentation/v8/commands/npm-explore
  - /cli-documentation/v8/explore
  - /cli-documentation/v8/npm-explore
  - /cli/v8/cli-commands/explore
  - /cli/v8/cli-commands/npm-explore
  - /cli/v8/commands/explore
  - /cli/v8/explore
  - /cli/v8/npm-explore
---

### Synopsis

```bash
npm explore <pkg> [ -- <command>]
```

Note: This command is unaware of workspaces.

### Description

Spawn a subshell in the directory of the installed package specified.

If a command is specified, then it is run in the subshell, which then
immediately terminates.

This is particularly handy in the case of git submodules in the
`node_modules` folder:

```bash
npm explore some-dependency -- git pull origin master
```

Note that the package is *not* automatically rebuilt afterwards, so be
sure to use `npm rebuild <pkg>` if you make any changes.

### Configuration

#### `shell`

* Default: SHELL environment variable, or "bash" on Posix, or "cmd.exe" on
  Windows
* Type: String

The shell to run for the `npm explore` command.

### See Also

* [npm folders](/cli/v8/configuring-npm/folders)
* [npm edit](/cli/v8/commands/npm-edit)
* [npm rebuild](/cli/v8/commands/npm-rebuild)
* [npm install](/cli/v8/commands/npm-install)
