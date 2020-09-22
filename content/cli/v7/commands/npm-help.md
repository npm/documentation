---
title: npm-help
section: 1
description: Get help on npm
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-help.md
---

### Synopsis

```bash
npm help <term> [<terms..>]
```

### Description

If supplied a topic, then show the appropriate documentation page.

If the topic does not exist, or if multiple terms are provided, then npm
will run the `help-search` command to find a match.  Note that, if
`help-search` finds a single subject, then it will run `help` on that
topic, so unique matches are equivalent to specifying a topic name.

### Configuration

#### viewer

* Default: "man" on Posix, "browser" on Windows
* Type: path

The program to use to view help content.

Set to `"browser"` to view html help content in the default web browser.

### See Also

* [npm](/cli/v7/commands/npm)
* [npm folders](/cli/v7/configuring-npm/folders)
* [npm config](/cli/v7/commands/npm-config)
* [npmrc](/cli/v7/configuring-npm/npmrc)
* [package.json](/cli/v7/configuring-npm/package-json)
* [npm help-search](/cli/v7/commands/npm-help-search)
