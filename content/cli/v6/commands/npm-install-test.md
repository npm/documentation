---
title: npm-install-test
section: 1
description: Install package(s) and run tests
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-install-test.md
redirect_from:
  - /cli-documentation/v6/cli-commands/install-test
  - /cli-documentation/v6/cli-commands/npm-install-test
  - /cli-documentation/v6/commands/install-test
  - /cli-documentation/v6/commands/npm-install-test
  - /cli-documentation/v6/install-test
  - /cli-documentation/v6/npm-install-test
  - /cli/v6/cli-commands/install-test
  - /cli/v6/cli-commands/npm-install-test
  - /cli/v6/commands/install-test
  - /cli/v6/install-test
  - /cli/v6/npm-install-test
---

### Synopsis

```bash
npm install-test (with no args, in package dir)
npm install-test [<@scope>/]<name>
npm install-test [<@scope>/]<name>@<tag>
npm install-test [<@scope>/]<name>@<version>
npm install-test [<@scope>/]<name>@<version range>
npm install-test <tarball file>
npm install-test <tarball url>
npm install-test <folder>

alias: npm it
common options: [--save|--save-dev|--save-optional] [--save-exact] [--dry-run]
```

### Description

This command runs an `npm install` followed immediately by an `npm test`. It
takes exactly the same arguments as `npm install`.

### See Also

* [npm install](/cli/v6/commands/npm-install)
* [npm test](/cli/v6/commands/npm-test)
