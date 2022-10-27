---
title: npm-ping
section: 1
description: Ping npm registry
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-ping.md
redirect_from:
  - /cli-documentation/v6/cli-commands/npm-ping
  - /cli-documentation/v6/cli-commands/ping
  - /cli-documentation/v6/commands/npm-ping
  - /cli-documentation/v6/commands/ping
  - /cli-documentation/v6/npm-ping
  - /cli-documentation/v6/ping
  - /cli/v6/cli-commands/npm-ping
  - /cli/v6/cli-commands/ping
  - /cli/v6/commands/ping
  - /cli/v6/npm-ping
  - /cli/v6/ping
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

* [npm config](/cli/v6/commands/npm-config)
* [npmrc](/cli/v6/configuring-npm/npmrc)
