---
title: npm-deprecate
section: 1
description: Deprecate a version of a package
github_repo: npm/cli
github_branch: latest
github_path: docs/lib/content/commands/npm-deprecate.md
redirect_from:
  - /cli-commands/deprecate
  - /cli-commands/npm-deprecate
  - /cli-documentation/cli-commands/deprecate
  - /cli-documentation/cli-commands/npm-deprecate
  - /cli-documentation/commands/deprecate
  - /cli-documentation/commands/npm-deprecate
  - /cli-documentation/deprecate
  - /cli-documentation/npm-deprecate
  - /cli-documentation/v9/cli-commands/deprecate
  - /cli-documentation/v9/cli-commands/npm-deprecate
  - /cli-documentation/v9/commands/deprecate
  - /cli-documentation/v9/commands/npm-deprecate
  - /cli-documentation/v9/deprecate
  - /cli-documentation/v9/npm-deprecate
  - /cli/cli-commands/deprecate
  - /cli/cli-commands/npm-deprecate
  - /cli/commands/deprecate
  - /cli/commands/npm-deprecate
  - /cli/deprecate
  - /cli/npm-deprecate
  - /cli/v9/cli-commands/deprecate
  - /cli/v9/cli-commands/npm-deprecate
  - /cli/v9/commands/deprecate
  - /cli/v9/deprecate
  - /cli/v9/npm-deprecate
  - /commands/deprecate
  - /commands/npm-deprecate
---

### Synopsis

```bash
npm deprecate <package-spec> <message>
```

Note: This command is unaware of workspaces.

### Description

This command will update the npm registry entry for a package, providing a
deprecation warning to all who attempt to install it.

It works on [version ranges](https://semver.npmjs.com/) as well as specific
versions, so you can do something like this:

```bash
npm deprecate my-thing@"< 0.2.3" "critical bug fixed in v0.2.3"
```

SemVer ranges passed to this command are interpreted such that they *do*
include prerelease versions.  For example:

```bash
npm deprecate my-thing@1.x "1.x is no longer supported"
```

In this case, a version `my-thing@1.0.0-beta.0` will also be deprecated.

You must be the package owner to deprecate something.  See the `owner` and
`adduser` help topics.

To un-deprecate a package, specify an empty string (`""`) for the `message`
argument. Note that you must use double quotes with no space between them to
format an empty string.

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `otp`

* Default: null
* Type: null or String

This is a one-time password from a two-factor authenticator. It's needed
when publishing or changing package permissions with `npm access`.

If not set, and a registry response fails with a challenge for a one-time
password, npm will prompt on the command line for one.



### See Also

* [package spec](/cli/v9/using-npm/package-spec)
* [npm publish](/cli/v9/commands/npm-publish)
* [npm registry](/cli/v9/using-npm/registry)
* [npm owner](/cli/v9/commands/npm-owner)
* [npm adduser](/cli/v9/commands/npm-adduser)
