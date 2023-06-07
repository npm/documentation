---
title: npm-explore
section: 1
description: Browse an installed package
github_repo: npm/cli
github_branch: latest
github_path: docs/lib/content/commands/npm-explore.md
redirect_from:
  - /cli-commands/explore
  - /cli-commands/npm-explore
  - /cli-documentation/cli-commands/explore
  - /cli-documentation/cli-commands/npm-explore
  - /cli-documentation/commands/explore
  - /cli-documentation/commands/npm-explore
  - /cli-documentation/explore
  - /cli-documentation/npm-explore
  - /cli-documentation/v9/cli-commands/explore
  - /cli-documentation/v9/cli-commands/npm-explore
  - /cli-documentation/v9/commands/explore
  - /cli-documentation/v9/commands/npm-explore
  - /cli-documentation/v9/explore
  - /cli-documentation/v9/npm-explore
  - /cli/cli-commands/explore
  - /cli/cli-commands/npm-explore
  - /cli/commands/explore
  - /cli/commands/npm-explore
  - /cli/explore
  - /cli/npm-explore
  - /cli/v9/cli-commands/explore
  - /cli/v9/cli-commands/npm-explore
  - /cli/v9/commands/explore
  - /cli/v9/explore
  - /cli/v9/npm-explore
  - /commands/explore
  - /commands/npm-explore
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

* [npm folders](/cli/v9/configuring-npm/folders)
* [npm edit](/cli/v9/commands/npm-edit)
* [npm rebuild](/cli/v9/commands/npm-rebuild)
* [npm install](/cli/v9/commands/npm-install)
