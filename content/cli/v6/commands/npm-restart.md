---
title: npm-restart
section: 1
description: Restart a package
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-restart.md
redirect_from:
  - /cli-documentation/v6/cli-commands/npm-restart
  - /cli-documentation/v6/cli-commands/restart
  - /cli-documentation/v6/commands/npm-restart
  - /cli-documentation/v6/commands/restart
  - /cli-documentation/v6/npm-restart
  - /cli-documentation/v6/restart
  - /cli/v6/cli-commands/npm-restart
  - /cli/v6/cli-commands/restart
  - /cli/v6/commands/restart
  - /cli/v6/npm-restart
  - /cli/v6/restart
---

### Synopsis

```bash
npm restart [-- <args>]
```

### Description

This restarts a package.

This runs a package's "stop", "restart", and "start" scripts, and associated
pre- and post- scripts, in the order given below:

1. prerestart
2. prestop
3. stop
4. poststop
5. restart
6. prestart
7. start
8. poststart
9. postrestart

### Note

Note that the "restart" script is run **in addition to** the "stop"
and "start" scripts, not instead of them.

This is the behavior as of `npm` major version 2.  A change in this
behavior will be accompanied by an increase in major version number

### See Also

* [npm run-script](/cli/v6/commands/npm-run-script)
* [npm scripts](/cli/v6/using-npm/scripts)
* [npm test](/cli/v6/commands/npm-test)
* [npm start](/cli/v6/commands/npm-start)
* [npm stop](/cli/v6/commands/npm-stop)
* [npm restart](/cli/v6/commands/npm-restart)
