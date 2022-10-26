---
title: npm-dist-tag
section: 1
description: Modify package distribution tags
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-dist-tag.md
redirect_from:
  - /cli-documentation/v6/cli-commands/dist-tag
  - /cli-documentation/v6/cli-commands/npm-dist-tag
  - /cli-documentation/v6/commands/dist-tag
  - /cli-documentation/v6/commands/npm-dist-tag
  - /cli-documentation/v6/dist-tag
  - /cli-documentation/v6/npm-dist-tag
  - /cli/v6/cli-commands/dist-tag
  - /cli/v6/cli-commands/npm-dist-tag
  - /cli/v6/commands/dist-tag
  - /cli/v6/dist-tag
  - /cli/v6/npm-dist-tag
---

### Synopsis
```bash
npm dist-tag add <pkg>@<version> [<tag>]
npm dist-tag rm <pkg> <tag>
npm dist-tag ls [<pkg>]

aliases: dist-tags
```

### Description

Add, remove, and enumerate distribution tags on a package:

* add:
  Tags the specified version of the package with the specified tag, or the
  `--tag` config if not specified. If you have two-factor authentication on
  auth-and-writes then you’ll need to include a one-time password on the
  command line with `--otp <one-time password>`.

* rm:
  Clear a tag that is no longer in use from the package.

* ls:
  Show all of the dist-tags for a package, defaulting to the package in
  the current prefix. This is the default action if none is specified.

A tag can be used when installing packages as a reference to a version instead
of using a specific version number:

```bash
npm install <name>@<tag>
```

When installing dependencies, a preferred tagged version may be specified:

```bash
npm install --tag <tag>
```

This also applies to `npm dedupe`.

Publishing a package sets the `latest` tag to the published version unless the
`--tag` option is used. For example, `npm publish --tag=beta`.

By default, `npm install <pkg>` (without any `@<version>` or `@<tag>`
specifier) installs the `latest` tag.

### Purpose

Tags can be used to provide an alias instead of version numbers.

For example, a project might choose to have multiple streams of development
and use a different tag for each stream,
e.g., `stable`, `beta`, `dev`, `canary`.

By default, the `latest` tag is used by npm to identify the current version of
a package, and `npm install <pkg>` (without any `@<version>` or `@<tag>`
specifier) installs the `latest` tag. Typically, projects only use the `latest`
tag for stable release versions, and use other tags for unstable versions such
as prereleases.

The `next` tag is used by some projects to identify the upcoming version.

By default, other than `latest`, no tag has any special significance to npm
itself.

### Caveats

This command used to be known as `npm tag`, which only created new tags, and so
had a different syntax.

Tags must share a namespace with version numbers, because they are specified in
the same slot: `npm install <pkg>@<version>` vs `npm install <pkg>@<tag>`.

Tags that can be interpreted as valid semver ranges will be rejected. For
example, `v1.4` cannot be used as a tag, because it is interpreted by semver as
`>=1.4.0 <1.5.0`.  See <https://github.com/npm/npm/issues/6082>.

The simplest way to avoid semver problems with tags is to use tags that do not
begin with a number or the letter `v`.

### See Also

* [npm publish](/cli/v6/commands/npm-publish)
* [npm install](/cli/v6/commands/npm-install)
* [npm dedupe](/cli/v6/commands/npm-dedupe)
* [npm registry](/cli/v6/using-npm/registry)
* [npm config](/cli/v6/commands/npm-config)
* [npmrc](/cli/v6/configuring-npm/npmrc)
