---
title: npm-completion
section: 1
description: Tab Completion for npm
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-completion.md
redirect_from:
  - /cli-documentation/v6/cli-commands/completion
  - /cli-documentation/v6/cli-commands/npm-completion
  - /cli-documentation/v6/commands/completion
  - /cli-documentation/v6/commands/npm-completion
  - /cli-documentation/v6/completion
  - /cli-documentation/v6/npm-completion
  - /cli/v6/cli-commands/completion
  - /cli/v6/cli-commands/npm-completion
  - /cli/v6/commands/completion
  - /cli/v6/completion
  - /cli/v6/npm-completion
---

### Synopsis
```bash
source <(npm completion)
```

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

* [npm developers](/cli/v6/using-npm/developers)
* [npm](/cli/v6/commands/npm)
