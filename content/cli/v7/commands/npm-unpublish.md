---
title: npm-unpublish
section: 1
description: Remove a package from the registry
redirect_from:
  - /cli/unpublish
  - /cli/unpublish.html
  - /cli/commands/unpublish
  - /cli-commands/unpublish
  - /cli-commands/unpublish.html
  - /cli-commands/npm-unpublish
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-unpublish.md
---

### Synopsis

To learn more about how the npm registry treats unpublish, see our <a
href="https://www.npmjs.com/policies/unpublish" target="_blank"
rel="noopener noreferrer"> unpublish policies</a>

#### Unpublishing a single version of a package

```bash
npm unpublish [<@scope>/]<pkg>@<version>
```

#### Unpublishing an entire package

```bash
npm unpublish [<@scope>/]<pkg> --force
```

### Warning

Consider using the [`deprecate`](/cli/v7/commands/npm-deprecate) command instead,
if your intent is to encourage users to upgrade, or if you no longer
want to maintain a package.

### Description

This removes a package version from the registry, deleting its entry and
removing the tarball.

The npm registry will return an error if you are not [logged
in](/cli/v7/commands/npm-login).

If you do not specify a version or if you remove all of a package's
versions then the registry will remove the root package entry entirely.

Even if you unpublish a package version, that specific name and version
combination can never be reused. In order to publish the package again,
you must use a new version number. If you unpublish the entire package,
you may not publish any new versions of that package until 24 hours have
passed.

### See Also

* [npm deprecate](/cli/v7/commands/npm-deprecate)
* [npm publish](/cli/v7/commands/npm-publish)
* [npm registry](/cli/v7/using-npm/registry)
* [npm adduser](/cli/v7/commands/npm-adduser)
* [npm owner](/cli/v7/commands/npm-owner)
* [npm login](/cli/v7/commands/npm-login)
