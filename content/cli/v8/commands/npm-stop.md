---
title: npm-stop
section: 1
description: Stop a package
github_repo: npm/cli
github_branch: release/v8
github_path: docs/lib/content/commands/npm-stop.md
redirect_from:
  - /cli-documentation/v8/cli-commands/npm-stop
  - /cli-documentation/v8/cli-commands/stop
  - /cli-documentation/v8/commands/npm-stop
  - /cli-documentation/v8/commands/stop
  - /cli-documentation/v8/npm-stop
  - /cli-documentation/v8/stop
  - /cli/v8/cli-commands/npm-stop
  - /cli/v8/cli-commands/stop
  - /cli/v8/commands/stop
  - /cli/v8/npm-stop
  - /cli/v8/stop
---

### Synopsis

```bash
npm stop [-- <args>]
```

### Description

This runs a predefined command specified in the "stop" property of a
package's "scripts" object.

Unlike with [npm start](/cli/v8/commands/npm-start), there is no default script
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

* [npm run-script](/cli/v8/commands/npm-run-script)
* [npm scripts](/cli/v8/using-npm/scripts)
* [npm test](/cli/v8/commands/npm-test)
* [npm start](/cli/v8/commands/npm-start)
* [npm restart](/cli/v8/commands/npm-restart)
