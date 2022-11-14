---
title: npm-adduser
section: 1
description: Add a registry user account
github_repo: npm/cli
github_branch: release/v8
github_path: docs/lib/content/commands/npm-adduser.md
redirect_from:
  - /cli-documentation/v8/adduser
  - /cli-documentation/v8/cli-commands/adduser
  - /cli-documentation/v8/cli-commands/npm-adduser
  - /cli-documentation/v8/commands/adduser
  - /cli-documentation/v8/commands/npm-adduser
  - /cli-documentation/v8/npm-adduser
  - /cli/v8/adduser
  - /cli/v8/cli-commands/adduser
  - /cli/v8/cli-commands/npm-adduser
  - /cli/v8/commands/adduser
  - /cli/v8/npm-adduser
---

### Synopsis

```bash
npm adduser

aliases: login, add-user
```

Note: This command is unaware of workspaces.

### Description

Create or verify a user named `<username>` in the specified registry, and
save the credentials to the `.npmrc` file. If no registry is specified,
the default registry will be used (see [`config`](/cli/v8/using-npm/config)).

The username, password, and email are read in from prompts.

To reset your password, go to <https://www.npmjs.com/forgot>

To change your email address, go to <https://www.npmjs.com/email-edit>

You may use this command multiple times with the same user account to
authorize on a new machine.  When authenticating on a new machine,
the username, password and email address must all match with
your existing record.

`npm login` is an alias to `adduser` and behaves exactly the same way.

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

* Default: "legacy"
* Type: "legacy", "web", "sso", "saml", "oauth", or "webauthn"

NOTE: auth-type values "sso", "saml", "oauth", and "webauthn" will be
removed in a future version.

What authentication strategy to use with `login`.

### See Also

* [npm registry](/cli/v8/using-npm/registry)
* [npm config](/cli/v8/commands/npm-config)
* [npmrc](/cli/v8/configuring-npm/npmrc)
* [npm owner](/cli/v8/commands/npm-owner)
* [npm whoami](/cli/v8/commands/npm-whoami)
* [npm token](/cli/v8/commands/npm-token)
* [npm profile](/cli/v8/commands/npm-profile)
