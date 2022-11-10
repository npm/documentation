---
title: npm-completion
section: 1
description: Tab Completion for npm
github_repo: npm/cli
github_branch: release/v8
github_path: docs/lib/content/commands/npm-completion.md
redirect_from:
  - /cli-documentation/v8/cli-commands/completion
  - /cli-documentation/v8/cli-commands/npm-completion
  - /cli-documentation/v8/commands/completion
  - /cli-documentation/v8/commands/npm-completion
  - /cli-documentation/v8/completion
  - /cli-documentation/v8/npm-completion
  - /cli/v8/cli-commands/completion
  - /cli/v8/cli-commands/npm-completion
  - /cli/v8/commands/completion
  - /cli/v8/completion
  - /cli/v8/npm-completion
---

### Synopsis

```bash
npm completion
```

Note: This command is unaware of workspaces.

### Description

Enables tab-completion in all npm commands.

The synopsis above
loads the completions into your current shell.  Adding it to
your ~/.bashrc or ~/.zshrc will make the completions available
everywhere:

```bash
npm completion >> ~/.bashrc
npm completion >> ~/.zshrc
```

You may of course also pipe the output of `npm completion` to a file
such as `/usr/local/etc/bash_completion.d/npm` or 
`/etc/bash_completion.d/npm` if you have a system that will read 
that file for you.

When `COMP_CWORD`, `COMP_LINE`, and `COMP_POINT` are defined in the
environment, `npm completion` acts in "plumbing mode", and outputs
completions based on the arguments.

### See Also

* [npm developers](/cli/v8/using-npm/developers)
* [npm](/cli/v8/commands/npm)
