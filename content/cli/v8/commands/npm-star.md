---
title: npm-star
section: 1
description: Mark your favorite packages
github_repo: npm/cli
github_branch: release/v8
github_path: docs/lib/content/commands/npm-star.md
redirect_from:
  - /cli-documentation/v8/cli-commands/npm-star
  - /cli-documentation/v8/cli-commands/star
  - /cli-documentation/v8/commands/npm-star
  - /cli-documentation/v8/commands/star
  - /cli-documentation/v8/npm-star
  - /cli-documentation/v8/star
  - /cli/v8/cli-commands/npm-star
  - /cli/v8/cli-commands/star
  - /cli/v8/commands/star
  - /cli/v8/npm-star
  - /cli/v8/star
---

### Synopsis

```bash
npm star [<package-spec>...]
```

Note: This command is unaware of workspaces.

### Description

"Starring" a package means that you have some interest in it.  It's
a vaguely positive way to show that you care.

It's a boolean thing. Starring repeatedly has no additional effect.

### More

There's also these extra commands to help you manage your favorite packages:

#### Unstar

You can also "unstar" a package using [`npm unstar`](/cli/v8/commands/npm-unstar)

"Unstarring" is the same thing, but in reverse.

#### Listing stars

You can see all your starred packages using [`npm stars`](/cli/v8/commands/npm-stars)

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.

#### `unicode`

* Default: false on windows, true on mac/unix systems with a unicode locale,
  as defined by the `LC_ALL`, `LC_CTYPE`, or `LANG` environment variables.
* Type: Boolean

When set to true, npm uses unicode characters in the tree output. When
false, it uses ascii characters instead of unicode glyphs.

#### `otp`

* Default: null
* Type: null or String

This is a one-time password from a two-factor authenticator. It's needed
when publishing or changing package permissions with `npm access`.

If not set, and a registry response fails with a challenge for a one-time
password, npm will prompt on the command line for one.

### See Also

* [package spec](/cli/v8/using-npm/package-spec)
* [npm unstar](/cli/v8/commands/npm-unstar)
* [npm stars](/cli/v8/commands/npm-stars)
* [npm view](/cli/v8/commands/npm-view)
* [npm whoami](/cli/v8/commands/npm-whoami)
* [npm adduser](/cli/v8/commands/npm-adduser)
