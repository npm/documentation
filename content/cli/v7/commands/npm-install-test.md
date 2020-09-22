---
title: npm-install-test
section: 1
description: Install package(s) and run tests
redirect_from:
  - /cli/install-test
  - /cli/install-test.html
  - /cli/commands/install-test
  - /cli-commands/install-test
  - /cli-commands/install-test.html
  - /cli-commands/npm-install-test
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-install-test.md
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

* [npm install](/cli/v7/commands/npm-install)
* [npm install-ci-test](/cli/v7/commands/npm-install-ci-test)
* [npm test](/cli/v7/commands/npm-test)
