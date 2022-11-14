---
title: npm-ping
section: 1
description: Ping npm registry
github_repo: npm/cli
github_branch: latest
github_path: docs/lib/content/commands/npm-ping.md
redirect_from:
  - /cli-commands/npm-ping
  - /cli-commands/ping
  - /cli-documentation/cli-commands/npm-ping
  - /cli-documentation/cli-commands/ping
  - /cli-documentation/commands/npm-ping
  - /cli-documentation/commands/ping
  - /cli-documentation/npm-ping
  - /cli-documentation/ping
  - /cli-documentation/v9/cli-commands/npm-ping
  - /cli-documentation/v9/cli-commands/ping
  - /cli-documentation/v9/commands/npm-ping
  - /cli-documentation/v9/commands/ping
  - /cli-documentation/v9/npm-ping
  - /cli-documentation/v9/ping
  - /cli/cli-commands/npm-ping
  - /cli/cli-commands/ping
  - /cli/commands/npm-ping
  - /cli/commands/ping
  - /cli/npm-ping
  - /cli/ping
  - /cli/v9/cli-commands/npm-ping
  - /cli/v9/cli-commands/ping
  - /cli/v9/commands/ping
  - /cli/v9/npm-ping
  - /cli/v9/ping
  - /commands/npm-ping
  - /commands/ping
---

### Synopsis

```bash
npm ping
```

Note: This command is unaware of workspaces.

### Description

Ping the configured or given npm registry and verify authentication.
If it works it will output something like:

```bash
npm notice PING https://registry.npmjs.org/
npm notice PONG 255ms
```
otherwise you will get an error:
```bash
npm notice PING http://foo.com/
npm ERR! code E404
npm ERR! 404 Not Found - GET http://www.foo.com/-/ping?write=true
```

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.

### See Also

* [npm doctor](/cli/v9/commands/npm-doctor)
* [npm config](/cli/v9/commands/npm-config)
* [npmrc](/cli/v9/configuring-npm/npmrc)
