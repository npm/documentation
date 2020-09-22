---
title: npm-ping
section: 1
description: Ping npm registry
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-ping.md
---

### Synopsis

```bash
npm ping [--registry <registry>]
```

### Description

Ping the configured or given npm registry and verify authentication.
If it works it will output something like:

```bash
Ping success: {*Details about registry*}
```
otherwise you will get:
```bash
Ping error: {*Detail about error}
```

### See Also

* [npm config](/cli/v7/commands/npm-config)
* [npmrc](/cli/v7/configuring-npm/npmrc)
