---
title: npm-shrinkwrap
section: 1
description: Lock down dependency versions for publication
github_repo: npm/cli
github_branch: latest
github_path: docs/lib/content/commands/npm-shrinkwrap.md
redirect_from:
  - /cli-commands/npm-shrinkwrap
  - /cli-commands/shrinkwrap
  - /cli-documentation/cli-commands/npm-shrinkwrap
  - /cli-documentation/cli-commands/shrinkwrap
  - /cli-documentation/commands/npm-shrinkwrap
  - /cli-documentation/commands/shrinkwrap
  - /cli-documentation/npm-shrinkwrap
  - /cli-documentation/shrinkwrap
  - /cli-documentation/v9/cli-commands/npm-shrinkwrap
  - /cli-documentation/v9/cli-commands/shrinkwrap
  - /cli-documentation/v9/commands/npm-shrinkwrap
  - /cli-documentation/v9/commands/shrinkwrap
  - /cli-documentation/v9/npm-shrinkwrap
  - /cli-documentation/v9/shrinkwrap
  - /cli/cli-commands/npm-shrinkwrap
  - /cli/cli-commands/shrinkwrap
  - /cli/commands/npm-shrinkwrap
  - /cli/commands/shrinkwrap
  - /cli/npm-shrinkwrap
  - /cli/shrinkwrap
  - /cli/v9/cli-commands/npm-shrinkwrap
  - /cli/v9/cli-commands/shrinkwrap
  - /cli/v9/commands/shrinkwrap
  - /cli/v9/npm-shrinkwrap
  - /cli/v9/shrinkwrap
  - /commands/npm-shrinkwrap
  - /commands/shrinkwrap
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
[package-lock-json](/cli/v9/configuring-npm/package-lock-json).

### See Also

* [npm install](/cli/v9/commands/npm-install)
* [npm run-script](/cli/v9/commands/npm-run-script)
* [npm scripts](/cli/v9/using-npm/scripts)
* [package.json](/cli/v9/configuring-npm/package-json)
* [package-lock.json](/cli/v9/configuring-npm/package-lock-json)
* [npm-shrinkwrap.json](/cli/v9/configuring-npm/npm-shrinkwrap-json)
* [npm ls](/cli/v9/commands/npm-ls)
