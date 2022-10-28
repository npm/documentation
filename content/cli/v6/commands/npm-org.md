---
title: npm-org
section: 1
description: Manage orgs
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-org.md
redirect_from:
  - /cli-documentation/v6/cli-commands/npm-org
  - /cli-documentation/v6/cli-commands/org
  - /cli-documentation/v6/commands/npm-org
  - /cli-documentation/v6/commands/org
  - /cli-documentation/v6/npm-org
  - /cli-documentation/v6/org
  - /cli/v6/cli-commands/npm-org
  - /cli/v6/cli-commands/org
  - /cli/v6/commands/org
  - /cli/v6/npm-org
  - /cli/v6/org
---

### Synopsis

```bash
npm org set <orgname> <username> [developer | admin | owner]
npm org rm <orgname> <username>
npm org ls <orgname> [<username>]
```

### Example

Add a new developer to an org:

```bash
$ npm org set my-org @mx-smith
```

Add a new admin to an org (or change a developer to an admin):

```bash
$ npm org set my-org @mx-santos admin
```

Remove a user from an org:

```bash
$ npm org rm my-org mx-santos
```

List all users in an org:

```bash
$ npm org ls my-org
```

List all users in JSON format:

```bash
$ npm org ls my-org --json
```

See what role a user has in an org:

```bash
$ npm org ls my-org @mx-santos
```

### Description

You can use the `npm org` commands to manage and view users of an organization.
It supports adding and removing users, changing their roles, listing them, and
finding specific ones and their roles.

### See Also

* [Documentation on npm Orgs](https://docs.npmjs.com/orgs/)
