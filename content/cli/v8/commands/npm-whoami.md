---
title: npm-whoami
section: 1
description: Display npm username
github_repo: npm/cli
github_branch: release/v8
github_path: docs/lib/content/commands/npm-whoami.md
redirect_from:
  - /cli-documentation/v8/cli-commands/npm-whoami
  - /cli-documentation/v8/cli-commands/whoami
  - /cli-documentation/v8/commands/npm-whoami
  - /cli-documentation/v8/commands/whoami
  - /cli-documentation/v8/npm-whoami
  - /cli-documentation/v8/whoami
  - /cli/v8/cli-commands/npm-whoami
  - /cli/v8/cli-commands/whoami
  - /cli/v8/commands/whoami
  - /cli/v8/npm-whoami
  - /cli/v8/whoami
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

* [npm config](/cli/v8/commands/npm-config)
* [npmrc](/cli/v8/configuring-npm/npmrc)
* [npm adduser](/cli/v8/commands/npm-adduser)
