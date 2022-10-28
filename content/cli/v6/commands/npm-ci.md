---
title: npm-ci
section: 1
description: Install a project with a clean slate
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-ci.md
redirect_from:
  - /cli-documentation/v6/ci
  - /cli-documentation/v6/cli-commands/ci
  - /cli-documentation/v6/cli-commands/npm-ci
  - /cli-documentation/v6/commands/ci
  - /cli-documentation/v6/commands/npm-ci
  - /cli-documentation/v6/npm-ci
  - /cli/v6/ci
  - /cli/v6/cli-commands/ci
  - /cli/v6/cli-commands/npm-ci
  - /cli/v6/commands/ci
  - /cli/v6/npm-ci
---

### Synopsis
```bash
npm ci
```

### Example

Make sure you have a package-lock and an up-to-date install:

```bash
$ cd ./my/npm/project
$ npm install
added 154 packages in 10s
$ ls | grep package-lock
```

Run `npm ci` in that project

```bash
$ npm ci
added 154 packages in 5s
```

Configure Travis to build using `npm ci` instead of `npm install`:

```bash
# .travis.yml
install:
- npm ci
# keep the npm cache around to speed up installs
cache:
  directories:
  - "$HOME/.npm"
```

### Description

This command is similar to [`npm install`](/cli/v6/commands/npm-install), except it's meant to be used in
automated environments such as test platforms, continuous integration, and
deployment -- or any situation where you want to make sure you're doing a clean
install of your dependencies. It can be significantly faster than a regular npm
install by skipping certain user-oriented features. It is also more strict than
a regular install, which can help catch errors or inconsistencies caused by the
incrementally-installed local environments of most npm users.

In short, the main differences between using `npm install` and `npm ci` are:

* The project **must** have an existing `package-lock.json` or `npm-shrinkwrap.json`.
* If dependencies in the package lock do not match those in `package.json`, `npm ci` will exit with an error, instead of updating the package lock.
* `npm ci` can only install entire projects at a time: individual dependencies cannot be added with this command.
* If a `node_modules` is already present, it will be automatically removed before `npm ci` begins its install.
* It will never write to `package.json` or any of the package-locks: installs are essentially frozen.

### See Also

* [npm install](/cli/v6/commands/npm-install)
* [package-locks](/cli/v6/configuring-npm/package-locks)
