---
title: npm-restart
section: 1
description: Restart a package
redirect_from:
  - /cli/restart
  - /cli/restart.html
  - /cli/commands/restart
  - /cli-commands/restart
  - /cli-commands/restart.html
  - /cli-commands/npm-restart
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-restart.md
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

### See Also

* [npm run-script](/cli/v7/commands/npm-run-script)
* [npm scripts](/cli/v7/using-npm/scripts)
* [npm test](/cli/v7/commands/npm-test)
* [npm start](/cli/v7/commands/npm-start)
* [npm stop](/cli/v7/commands/npm-stop)
* [npm restart](/cli/v7/commands/npm-restart)
