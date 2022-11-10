---
title: npm-help
section: 1
description: Get help on npm
github_repo: npm/cli
github_branch: release/v8
github_path: docs/lib/content/commands/npm-help.md
redirect_from:
  - /cli-documentation/v8/cli-commands/help
  - /cli-documentation/v8/cli-commands/npm-help
  - /cli-documentation/v8/commands/help
  - /cli-documentation/v8/commands/npm-help
  - /cli-documentation/v8/help
  - /cli-documentation/v8/npm-help
  - /cli/v8/cli-commands/help
  - /cli/v8/cli-commands/npm-help
  - /cli/v8/commands/help
  - /cli/v8/help
  - /cli/v8/npm-help
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

* [npm](/cli/v8/commands/npm)
* [npm folders](/cli/v8/configuring-npm/folders)
* [npm config](/cli/v8/commands/npm-config)
* [npmrc](/cli/v8/configuring-npm/npmrc)
* [package.json](/cli/v8/configuring-npm/package-json)
* [npm help-search](/cli/v8/commands/npm-help-search)
