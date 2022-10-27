---
title: npm-shrinkwrap
section: 1
description: Lock down dependency versions for publication
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-shrinkwrap.md
redirect_from:
  - /cli-documentation/v6/cli-commands/npm-shrinkwrap
  - /cli-documentation/v6/cli-commands/shrinkwrap
  - /cli-documentation/v6/commands/npm-shrinkwrap
  - /cli-documentation/v6/commands/shrinkwrap
  - /cli-documentation/v6/npm-shrinkwrap
  - /cli-documentation/v6/shrinkwrap
  - /cli/v6/cli-commands/npm-shrinkwrap
  - /cli/v6/cli-commands/shrinkwrap
  - /cli/v6/commands/shrinkwrap
  - /cli/v6/npm-shrinkwrap
  - /cli/v6/shrinkwrap
---

### Synopsis

```bash
npm shrinkwrap
```

### Description

This command repurposes `package-lock.json` into a publishable
`npm-shrinkwrap.json` or simply creates a new one. The file created and updated
by this command will then take precedence over any other existing or future
`package-lock.json` files. For a detailed explanation of the design and purpose
of package locks in npm, see [package-locks](/cli/v6/configuring-npm/package-locks).

### See Also

* [npm install](/cli/v6/commands/npm-install)
* [npm run-script](/cli/v6/commands/npm-run-script)
* [npm scripts](/cli/v6/using-npm/scripts)
* [package.js](/cli/v6/configuring-npm/package-json)
* [package-locks](/cli/v6/configuring-npm/package-locks)
* [package-lock.json](/cli/v6/configuring-npm/package-lock-json)
* [shrinkwrap.json](/cli/v6/configuring-npm/shrinkwrap-json)
* [npm ls](/cli/v6/commands/npm-ls)
