---
title: npm-explore
section: 1
description: Browse an installed package
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-explore.md
redirect_from:
  - /cli-documentation/v6/cli-commands/explore
  - /cli-documentation/v6/cli-commands/npm-explore
  - /cli-documentation/v6/commands/explore
  - /cli-documentation/v6/commands/npm-explore
  - /cli-documentation/v6/explore
  - /cli-documentation/v6/npm-explore
  - /cli/v6/cli-commands/explore
  - /cli/v6/cli-commands/npm-explore
  - /cli/v6/commands/explore
  - /cli/v6/explore
  - /cli/v6/npm-explore
---

### Synopsis

```bash
npm explore <pkg> [ -- <command>]
```

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

#### shell

* Default: SHELL environment variable, or "bash" on Posix, or "cmd" on
  Windows
* Type: path

The shell to run for the `npm explore` command.

### See Also

* [npm folders](/cli/v6/configuring-npm/folders)
* [npm edit](/cli/v6/commands/npm-edit)
* [npm rebuild](/cli/v6/commands/npm-rebuild)
* [npm build](/cli/v6/commands/npm-build)
* [npm install](/cli/v6/commands/npm-install)
