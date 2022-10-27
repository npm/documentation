---
title: npm-start
section: 1
description: Start a package
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-start.md
redirect_from:
  - /cli-documentation/v6/cli-commands/npm-start
  - /cli-documentation/v6/cli-commands/start
  - /cli-documentation/v6/commands/npm-start
  - /cli-documentation/v6/commands/start
  - /cli-documentation/v6/npm-start
  - /cli-documentation/v6/start
  - /cli/v6/cli-commands/npm-start
  - /cli/v6/cli-commands/start
  - /cli/v6/commands/start
  - /cli/v6/npm-start
  - /cli/v6/start
---

### Synopsis

```bash
npm start [-- <args>]
```

### Description

This runs an arbitrary command specified in the package's `"start"` property of
its `"scripts"` object. If no `"start"` property is specified on the
`"scripts"` object, it will run `node server.js`.

As of [`npm@2.0.0`](https://blog.npmjs.org/post/98131109725/npm-2-0-0), you can
use custom arguments when executing scripts. Refer to [`npm run-script`](/cli/v6/commands/npm-run-script) for more details.

### See Also

* [npm run-script](/cli/v6/commands/npm-run-script)
* [npm scripts](/cli/v6/using-npm/scripts)
* [npm test](/cli/v6/commands/npm-test)
* [npm restart](/cli/v6/commands/npm-restart)
* [npm stop](/cli/v6/commands/npm-stop)
