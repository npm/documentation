---
title: npm-help
section: 1
description: Get help on npm
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-help.md
redirect_from:
  - /cli-documentation/v6/cli-commands/help
  - /cli-documentation/v6/cli-commands/npm-help
  - /cli-documentation/v6/commands/help
  - /cli-documentation/v6/commands/npm-help
  - /cli-documentation/v6/help
  - /cli-documentation/v6/npm-help
  - /cli/v6/cli-commands/help
  - /cli/v6/cli-commands/npm-help
  - /cli/v6/commands/help
  - /cli/v6/help
  - /cli/v6/npm-help
---

### Synopsis

```bash
npm help <term> [<terms..>]
```

### Description

If supplied a topic, then show the appropriate documentation page.

If the topic does not exist, or if multiple terms are provided, then run
the `help-search` command to find a match.  Note that, if `help-search`
finds a single subject, then it will run `help` on that topic, so unique
matches are equivalent to specifying a topic name.

### Configuration

#### viewer

* Default: "man" on Posix, "browser" on Windows
* Type: path

The program to use to view help content.

Set to `"browser"` to view html help content in the default web browser.

### See Also

* [npm](/cli/v6/commands/npm)
* [npm folders](/cli/v6/configuring-npm/folders)
* [npm config](/cli/v6/commands/npm-config)
* [npmrc](/cli/v6/configuring-npm/npmrc)
* [package.json](/cli/v6/configuring-npm/package-json)
* [npm help-search](/cli/v6/commands/npm-help-search)
