---
title: npm-repo
section: 1
description: Open package repository page in the browser
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-repo.md
redirect_from:
  - /cli-documentation/v6/cli-commands/npm-repo
  - /cli-documentation/v6/cli-commands/repo
  - /cli-documentation/v6/commands/npm-repo
  - /cli-documentation/v6/commands/repo
  - /cli-documentation/v6/npm-repo
  - /cli-documentation/v6/repo
  - /cli/v6/cli-commands/npm-repo
  - /cli/v6/cli-commands/repo
  - /cli/v6/commands/repo
  - /cli/v6/npm-repo
  - /cli/v6/repo
---

### Synopsis

```bash
npm repo [<pkg>]
```

### Description

This command tries to guess at the likely location of a package's
repository URL, and then tries to open it using the `--browser`
config param. If no package name is provided, it will search for
a `package.json` in the current folder and use the `name` property.

### Configuration

#### browser

* Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
* Type: String

The browser that is called by the `npm repo` command to open websites.

### See Also

* [npm docs](/cli/v6/commands/npm-docs)
* [npm config](/cli/v6/commands/npm-config)
