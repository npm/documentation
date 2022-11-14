---
title: npm-ping
section: 1
description: Ping npm registry
github_repo: npm/cli
github_branch: release/v8
github_path: docs/lib/content/commands/npm-ping.md
redirect_from:
  - /cli-documentation/v8/cli-commands/npm-ping
  - /cli-documentation/v8/cli-commands/ping
  - /cli-documentation/v8/commands/npm-ping
  - /cli-documentation/v8/commands/ping
  - /cli-documentation/v8/npm-ping
  - /cli-documentation/v8/ping
  - /cli/v8/cli-commands/npm-ping
  - /cli/v8/cli-commands/ping
  - /cli/v8/commands/ping
  - /cli/v8/npm-ping
  - /cli/v8/ping
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

* [npm doctor](/cli/v8/commands/npm-doctor)
* [npm config](/cli/v8/commands/npm-config)
* [npmrc](/cli/v8/configuring-npm/npmrc)
