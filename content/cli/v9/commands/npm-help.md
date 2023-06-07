---
title: npm-help
section: 1
description: Get help on npm
github_repo: npm/cli
github_branch: latest
github_path: docs/lib/content/commands/npm-help.md
redirect_from:
  - /cli-commands/help
  - /cli-commands/npm-help
  - /cli-documentation/cli-commands/help
  - /cli-documentation/cli-commands/npm-help
  - /cli-documentation/commands/help
  - /cli-documentation/commands/npm-help
  - /cli-documentation/help
  - /cli-documentation/npm-help
  - /cli-documentation/v9/cli-commands/help
  - /cli-documentation/v9/cli-commands/npm-help
  - /cli-documentation/v9/commands/help
  - /cli-documentation/v9/commands/npm-help
  - /cli-documentation/v9/help
  - /cli-documentation/v9/npm-help
  - /cli/cli-commands/help
  - /cli/cli-commands/npm-help
  - /cli/commands/help
  - /cli/commands/npm-help
  - /cli/help
  - /cli/npm-help
  - /cli/v9/cli-commands/help
  - /cli/v9/cli-commands/npm-help
  - /cli/v9/commands/help
  - /cli/v9/help
  - /cli/v9/npm-help
  - /commands/help
  - /commands/npm-help
---

### Synopsis

```bash
npm help <term> [<terms..>]

alias: hlep
```

Note: This command is unaware of workspaces.

### Description

If supplied a topic, then show the appropriate documentation page.

If the topic does not exist, or if multiple terms are provided, then npm
will run the `help-search` command to find a match.  Note that, if
`help-search` finds a single subject, then it will run `help` on that
topic, so unique matches are equivalent to specifying a topic name.

### Configuration

#### `viewer`

* Default: "man" on Posix, "browser" on Windows
* Type: String

The program to use to view help content.

Set to `"browser"` to view html help content in the default web browser.



### See Also

* [npm](/cli/v9/commands/npm)
* [npm folders](/cli/v9/configuring-npm/folders)
* [npm config](/cli/v9/commands/npm-config)
* [npmrc](/cli/v9/configuring-npm/npmrc)
* [package.json](/cli/v9/configuring-npm/package-json)
* [npm help-search](/cli/v9/commands/npm-help-search)
