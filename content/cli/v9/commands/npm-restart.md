---
title: npm-restart
section: 1
description: Restart a package
github_repo: npm/cli
github_branch: latest
github_path: docs/lib/content/commands/npm-restart.md
redirect_from:
  - /cli-commands/npm-restart
  - /cli-commands/restart
  - /cli-documentation/cli-commands/npm-restart
  - /cli-documentation/cli-commands/restart
  - /cli-documentation/commands/npm-restart
  - /cli-documentation/commands/restart
  - /cli-documentation/npm-restart
  - /cli-documentation/restart
  - /cli-documentation/v9/cli-commands/npm-restart
  - /cli-documentation/v9/cli-commands/restart
  - /cli-documentation/v9/commands/npm-restart
  - /cli-documentation/v9/commands/restart
  - /cli-documentation/v9/npm-restart
  - /cli-documentation/v9/restart
  - /cli/cli-commands/npm-restart
  - /cli/cli-commands/restart
  - /cli/commands/npm-restart
  - /cli/commands/restart
  - /cli/npm-restart
  - /cli/restart
  - /cli/v9/cli-commands/npm-restart
  - /cli/v9/cli-commands/restart
  - /cli/v9/commands/restart
  - /cli/v9/npm-restart
  - /cli/v9/restart
  - /commands/npm-restart
  - /commands/restart
---

### Synopsis

```bash
npm restart [-- <args>]
```

### Description

This restarts a project.  It is equivalent to running `npm run-script
restart`.

If the current project has a `"restart"` script specified in
`package.json`, then the following scripts will be run:

1. prerestart
2. restart
3. postrestart

If it does _not_ have a `"restart"` script specified, but it does have
`stop` and/or `start` scripts, then the following scripts will be run:

1. prerestart
2. prestop
3. stop
4. poststop
6. prestart
7. start
8. poststart
9. postrestart

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
* [npm stop](/cli/v9/commands/npm-stop)
* [npm restart](/cli/v9/commands/npm-restart)
