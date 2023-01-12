---
title: npm-login
section: 1
description: Login to a registry user account
github_repo: npm/cli
github_branch: latest
github_path: docs/lib/content/commands/npm-login.md
redirect_from:
  - /cli-commands/login
  - /cli-commands/npm-login
  - /cli-documentation/cli-commands/login
  - /cli-documentation/cli-commands/npm-login
  - /cli-documentation/commands/login
  - /cli-documentation/commands/npm-login
  - /cli-documentation/login
  - /cli-documentation/npm-login
  - /cli-documentation/v9/cli-commands/login
  - /cli-documentation/v9/cli-commands/npm-login
  - /cli-documentation/v9/commands/login
  - /cli-documentation/v9/commands/npm-login
  - /cli-documentation/v9/login
  - /cli-documentation/v9/npm-login
  - /cli/cli-commands/login
  - /cli/cli-commands/npm-login
  - /cli/commands/login
  - /cli/commands/npm-login
  - /cli/login
  - /cli/npm-login
  - /cli/v9/cli-commands/login
  - /cli/v9/cli-commands/npm-login
  - /cli/v9/commands/login
  - /cli/v9/login
  - /cli/v9/npm-login
  - /commands/login
  - /commands/npm-login
---

### Synopsis

```bash
npm login
```

Note: This command is unaware of workspaces.

### Description

Verify a user in the specified registry, and save the credentials to the
`.npmrc` file. If no registry is specified, the default registry will be
used (see [`config`](/cli/v9/using-npm/config)).

When using `legacy` for your `auth-type`, the username and password, are
read in from prompts.

To reset your password, go to <https://www.npmjs.com/forgot>

To change your email address, go to <https://www.npmjs.com/email-edit>

You may use this command multiple times with the same user account to
authorize on a new machine.  When authenticating on a new machine,
the username, password and email address must all match with
your existing record.

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.

#### `scope`

* Default: the scope of the current project, if any, or ""
* Type: String

Associate an operation with a scope for a scoped registry.

Useful when logging in to or out of a private registry:

```
# log in, linking the scope to the custom registry
npm login --scope=@mycorp --registry=https://registry.mycorp.com

# log out, removing the link and the auth token
npm logout --scope=@mycorp
```

This will cause `@mycorp` to be mapped to the registry for future
installation of packages specified according to the pattern
`@mycorp/package`.

This will also cause `npm init` to create a scoped package.

```
# accept all defaults, and create a package named "@foo/whatever",
# instead of just named "whatever"
npm init --scope=@foo --yes
```


#### `auth-type`

* Default: "web"
* Type: "legacy" or "web"

What authentication strategy to use with `login`. Note that if an `otp`
config is given, this value will always be set to `legacy`.

### See Also

* [npm registry](/cli/v9/using-npm/registry)
* [npm config](/cli/v9/commands/npm-config)
* [npmrc](/cli/v9/configuring-npm/npmrc)
* [npm owner](/cli/v9/commands/npm-owner)
* [npm whoami](/cli/v9/commands/npm-whoami)
* [npm token](/cli/v9/commands/npm-token)
* [npm profile](/cli/v9/commands/npm-profile)
