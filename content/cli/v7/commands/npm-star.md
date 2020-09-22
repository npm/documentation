---
title: npm-star
section: 1
description: Mark your favorite packages
redirect_from:
  - /cli/star
  - /cli/star.html
  - /cli/commands/star
  - /cli-commands/star
  - /cli-commands/star.html
  - /cli-commands/npm-star
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-star.md
---

### Synopsis

```bash
npm star [<pkg>...]
```

Note: This command is unaware of workspaces.

### Description

"Starring" a package means that you have some interest in it.  It's
a vaguely positive way to show that you care.

It's a boolean thing. Starring repeatedly has no additional effect.

### More

There's also these extra commands to help you manage your favorite packages:

#### Unstar

You can also "unstar" a package using [`npm unstar`](/cli/v7/commands/npm-unstar)

"Unstarring" is the same thing, but in reverse.

#### Listing stars

You can see all your starred packages using [`npm stars`](/cli/v7/commands/npm-stars)

### See Also

* [npm unstar](/cli/v7/commands/npm-unstar)
* [npm stars](/cli/v7/commands/npm-stars)
* [npm view](/cli/v7/commands/npm-view)
* [npm whoami](/cli/v7/commands/npm-whoami)
* [npm adduser](/cli/v7/commands/npm-adduser)
