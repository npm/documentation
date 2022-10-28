---
title: npm-shrinkwrap
section: 1
description: Lock down dependency versions for publication
github_repo: npm/cli
github_branch: release/v7
github_path: docs/content/commands/npm-shrinkwrap.md
redirect_from:
  - /cli-documentation/v7/cli-commands/npm-shrinkwrap
  - /cli-documentation/v7/cli-commands/shrinkwrap
  - /cli-documentation/v7/commands/npm-shrinkwrap
  - /cli-documentation/v7/commands/shrinkwrap
  - /cli-documentation/v7/npm-shrinkwrap
  - /cli-documentation/v7/shrinkwrap
  - /cli/v7/cli-commands/npm-shrinkwrap
  - /cli/v7/cli-commands/shrinkwrap
  - /cli/v7/commands/shrinkwrap
  - /cli/v7/npm-shrinkwrap
  - /cli/v7/shrinkwrap
---

### Synopsis

```bash
npm shrinkwrap
```

Note: This command is unaware of workspaces.

### Description

This command repurposes `package-lock.json` into a publishable
`npm-shrinkwrap.json` or simply creates a new one. The file created and
updated by this command will then take precedence over any other existing
or future `package-lock.json` files. For a detailed explanation of the
design and purpose of package locks in npm, see
[package-lock-json](/cli/v7/configuring-npm/package-lock-json).

### See Also

* [npm install](/cli/v7/commands/npm-install)
* [npm run-script](/cli/v7/commands/npm-run-script)
* [npm scripts](/cli/v7/using-npm/scripts)
* [package.json](/cli/v7/configuring-npm/package-json)
* [package-lock.json](/cli/v7/configuring-npm/package-lock-json)
* [npm-shrinkwrap.json](/cli/v7/configuring-npm/npm-shrinkwrap-json)
* [npm ls](/cli/v7/commands/npm-ls)
