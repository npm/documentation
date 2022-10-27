---
title: npm-logout
section: 1
description: Log out of the registry
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-logout.md
redirect_from:
  - /cli-documentation/v6/cli-commands/logout
  - /cli-documentation/v6/cli-commands/npm-logout
  - /cli-documentation/v6/commands/logout
  - /cli-documentation/v6/commands/npm-logout
  - /cli-documentation/v6/logout
  - /cli-documentation/v6/npm-logout
  - /cli/v6/cli-commands/logout
  - /cli/v6/cli-commands/npm-logout
  - /cli/v6/commands/logout
  - /cli/v6/logout
  - /cli/v6/npm-logout
---

### Synopsis

```bash
npm logout [--registry=<url>] [--scope=<@scope>]
```

### Description

When logged into a registry that supports token-based authentication, tell the
server to end this token's session. This will invalidate the token everywhere
you're using it, not just for the current environment.

When logged into a legacy registry that uses username and password authentication, this will
clear the credentials in your user configuration. In this case, it will _only_ affect
the current environment.

If `--scope` is provided, this will find the credentials for the registry
connected to that scope, if set.

### Configuration

#### registry

Default: https://registry.npmjs.org/

The base URL of the npm package registry. If `scope` is also specified,
it takes precedence.

#### scope

Default: The scope of your current project, if any, otherwise none.

If specified, you will be logged out of the specified scope. See [`scope`](/cli/v6/using-npm/scope).

```bash
npm logout --scope=@myco
```

### See Also

* [npm adduser](/cli/v6/commands/npm-adduser)
* [npm registry](/cli/v6/using-npm/registry)
* [npm config](/cli/v6/commands/npm-config)
* [npm whoami](/cli/v6/commands/npm-whoami)
