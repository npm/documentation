---
title: npm-whoami
section: 1
description: Display npm username
github_repo: npm/cli
github_branch: latest
github_path: docs/lib/content/commands/npm-whoami.md
redirect_from:
  - /cli-commands/npm-whoami
  - /cli-commands/whoami
  - /cli-documentation/cli-commands/npm-whoami
  - /cli-documentation/cli-commands/whoami
  - /cli-documentation/commands/npm-whoami
  - /cli-documentation/commands/whoami
  - /cli-documentation/npm-whoami
  - /cli-documentation/v9/cli-commands/npm-whoami
  - /cli-documentation/v9/cli-commands/whoami
  - /cli-documentation/v9/commands/npm-whoami
  - /cli-documentation/v9/commands/whoami
  - /cli-documentation/v9/npm-whoami
  - /cli-documentation/v9/whoami
  - /cli-documentation/whoami
  - /cli/cli-commands/npm-whoami
  - /cli/cli-commands/whoami
  - /cli/commands/npm-whoami
  - /cli/commands/whoami
  - /cli/npm-whoami
  - /cli/v9/cli-commands/npm-whoami
  - /cli/v9/cli-commands/whoami
  - /cli/v9/commands/whoami
  - /cli/v9/npm-whoami
  - /cli/v9/whoami
  - /cli/whoami
  - /commands/npm-whoami
  - /commands/whoami
---

### Synopsis

```bash
npm whoami
```

Note: This command is unaware of workspaces.

### Description

Display the npm username of the currently logged-in user.

If logged into a registry that provides token-based authentication, then
connect to the `/-/whoami` registry endpoint to find the username
associated with the token, and print to standard output.

If logged into a registry that uses Basic Auth, then simply print the
`username` portion of the authentication string.

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



### See Also

* [npm config](/cli/v9/commands/npm-config)
* [npmrc](/cli/v9/configuring-npm/npmrc)
* [npm adduser](/cli/v9/commands/npm-adduser)
