---
title: npm-owner
section: 1
description: Manage package owners
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-owner.md
redirect_from:
  - /cli-documentation/v6/cli-commands/npm-owner
  - /cli-documentation/v6/cli-commands/owner
  - /cli-documentation/v6/commands/npm-owner
  - /cli-documentation/v6/commands/owner
  - /cli-documentation/v6/npm-owner
  - /cli-documentation/v6/owner
  - /cli/v6/cli-commands/npm-owner
  - /cli/v6/cli-commands/owner
  - /cli/v6/commands/owner
  - /cli/v6/npm-owner
  - /cli/v6/owner
---

### Synopsis

```bash
npm owner add <user> [<@scope>/]<pkg>
npm owner rm <user> [<@scope>/]<pkg>
npm owner ls [<@scope>/]<pkg>

aliases: author
```

### Description

Manage ownership of published packages.

* ls:
  List all the users who have access to modify a package and push new versions.
  Handy when you need to know who to bug for help.
* add:
  Add a new user as a maintainer of a package.  This user is enabled to modify
  metadata, publish new versions, and add other owners.
* rm:
  Remove a user from the package owner list.  This immediately revokes their
  privileges.

Note that there is only one level of access.  Either you can modify a package,
or you can't.  Future versions may contain more fine-grained access levels, but
that is not implemented at this time.

If you have two-factor authentication enabled with `auth-and-writes` then
you'll need to include an otp on the command line when changing ownership
with `--otp`.

### See Also

* [npm publish](/cli/v6/commands/npm-publish)
* [npm registry](/cli/v6/using-npm/registry)
* [npm adduser](/cli/v6/commands/npm-adduser)
