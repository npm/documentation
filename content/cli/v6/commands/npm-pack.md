---
title: npm-pack
section: 1
description: Create a tarball from a package
github_repo: npm/cli
github_branch: v6-docs
github_path: docs/content/commands/npm-pack.md
---

### Synopsis

```bash
npm pack [[<@scope>/]<pkg>...] [--dry-run]
```

### Description

For anything that's installable (that is, a package folder, tarball,
tarball url, name@tag, name@version, name, or scoped name), this
command will fetch it to the cache, and then copy the tarball to the
current working directory as `<name>-<version>.tgz`, and then write
the filenames out to stdout.

If the same package is specified multiple times, then the file will be
overwritten the second time.

If no arguments are supplied, then npm packs the current package folder.

The `--dry-run` argument will do everything that pack usually does without
actually packing anything. Reports on what would have gone into the tarball.

### See Also

* [npm cache](/cli/v6/commands/npm-cache)
* [npm publish](/cli/v6/commands/npm-publish)
* [npm config](/cli/v6/commands/npm-config)
* [npmrc](/cli/v6/configuring-npm/npmrc)
