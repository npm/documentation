---
title: npm-stop
section: 1
description: Stop a package
github_repo: npm/cli
github_branch: latest
github_path: docs/lib/content/commands/npm-stop.md
redirect_from:
  - /cli-commands/npm-stop
  - /cli-commands/stop
  - /cli-documentation/cli-commands/npm-stop
  - /cli-documentation/cli-commands/stop
  - /cli-documentation/commands/npm-stop
  - /cli-documentation/commands/stop
  - /cli-documentation/npm-stop
  - /cli-documentation/stop
  - /cli-documentation/v9/cli-commands/npm-stop
  - /cli-documentation/v9/cli-commands/stop
  - /cli-documentation/v9/commands/npm-stop
  - /cli-documentation/v9/commands/stop
  - /cli-documentation/v9/npm-stop
  - /cli-documentation/v9/stop
  - /cli/cli-commands/npm-stop
  - /cli/cli-commands/stop
  - /cli/commands/npm-stop
  - /cli/commands/stop
  - /cli/npm-stop
  - /cli/stop
  - /cli/v9/cli-commands/npm-stop
  - /cli/v9/cli-commands/stop
  - /cli/v9/commands/stop
  - /cli/v9/npm-stop
  - /cli/v9/stop
  - /commands/npm-stop
  - /commands/stop
---

### Synopsis

```bash
npm stop [-- <args>]
```

### Description

This runs a predefined command specified in the "stop" property of a
package's "scripts" object.

Unlike with [npm start](/cli/v9/commands/npm-start), there is no default script
that will run if the `"stop"` property is not defined.

### Example

```json
{
  "scripts": {
    "stop": "node bar.js"
  }
}
```

```bash
npm stop

> npm@x.x.x stop
> node bar.js

(bar.js output would be here)

```

### Configuration

#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.

#### `script-shell`

* Default: '/bin/sh' on POSIX systems, 'cmd.exe' on Windows
* Type: null or String

The shell to use for scripts run with the `npm exec`, `npm run` and `npm
init <package-spec>` commands.

### See Also

* [npm run-script](/cli/v9/commands/npm-run-script)
* [npm scripts](/cli/v9/using-npm/scripts)
* [npm test](/cli/v9/commands/npm-test)
* [npm start](/cli/v9/commands/npm-start)
* [npm restart](/cli/v9/commands/npm-restart)
