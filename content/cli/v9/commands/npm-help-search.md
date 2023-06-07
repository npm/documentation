---
title: npm-help-search
section: 1
description: Search npm help documentation
github_repo: npm/cli
github_branch: latest
github_path: docs/lib/content/commands/npm-help-search.md
redirect_from:
  - /cli-commands/help-search
  - /cli-commands/npm-help-search
  - /cli-documentation/cli-commands/help-search
  - /cli-documentation/cli-commands/npm-help-search
  - /cli-documentation/commands/help-search
  - /cli-documentation/commands/npm-help-search
  - /cli-documentation/help-search
  - /cli-documentation/npm-help-search
  - /cli-documentation/v9/cli-commands/help-search
  - /cli-documentation/v9/cli-commands/npm-help-search
  - /cli-documentation/v9/commands/help-search
  - /cli-documentation/v9/commands/npm-help-search
  - /cli-documentation/v9/help-search
  - /cli-documentation/v9/npm-help-search
  - /cli/cli-commands/help-search
  - /cli/cli-commands/npm-help-search
  - /cli/commands/help-search
  - /cli/commands/npm-help-search
  - /cli/help-search
  - /cli/npm-help-search
  - /cli/v9/cli-commands/help-search
  - /cli/v9/cli-commands/npm-help-search
  - /cli/v9/commands/help-search
  - /cli/v9/help-search
  - /cli/v9/npm-help-search
  - /commands/help-search
  - /commands/npm-help-search
---

### Synopsis

```bash
npm help-search <text>
```

Note: This command is unaware of workspaces.

### Description

This command will search the npm markdown documentation files for the terms
provided, and then list the results, sorted by relevance.

If only one result is found, then it will show that help topic.

If the argument to `npm help` is not a known help topic, then it will call
`help-search`.  It is rarely if ever necessary to call this command
directly.

### Configuration

#### `long`

* Default: false
* Type: Boolean

Show extended information in `ls`, `search`, and `help-search`.



### See Also

* [npm](/cli/v9/commands/npm)
* [npm help](/cli/v9/commands/npm-help)
