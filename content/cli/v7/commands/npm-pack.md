---
title: npm-pack
section: 1
description: Create a tarball from a package
redirect_from:
  - /cli/pack
  - /cli/pack.html
  - /cli/commands/pack
  - /cli-commands/pack
  - /cli-commands/pack.html
  - /cli-commands/npm-pack
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-pack.md
---

### Synopsis

```bash
npm pack [[<@scope>/]<pkg>...] [--dry-run]
```

### Configuration

#### dry-run

Do everything that pack usually does without actually packing anything.
That is, report on what would have gone into the tarball, but nothing
else.

#### workspaces

Enables workspaces context while creating tarballs. Tarballs for each
workspaces will be generated.

#### workspace

Enables workspaces context and limits results to only those specified by
this config item.  Tarballs will only be generated for the packages
named in the workspaces given here.

### Description

For anything that's installable (that is, a package folder, tarball,
tarball url, git url, name@tag, name@version, name, or scoped name), this
command will fetch it to the cache, copy the tarball to the current working
directory as `<name>-<version>.tgz`, and then write the filenames out to
stdout.

If the same package is specified multiple times, then the file will be
overwritten the second time.

If no arguments are supplied, then npm packs the current package folder.

### See Also

* [npm-packlist package](http://npm.im/npm-packlist)
* [npm cache](/cli/v7/commands/npm-cache)
* [npm publish](/cli/v7/commands/npm-publish)
* [npm config](/cli/v7/commands/npm-config)
* [npmrc](/cli/v7/configuring-npm/npmrc)
