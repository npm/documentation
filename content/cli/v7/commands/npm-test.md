---
title: npm-test
section: 1
description: Test a package
redirect_from:
  - /cli/test
  - /cli/test.html
  - /cli/commands/test
  - /cli-commands/test
  - /cli-commands/test.html
  - /cli-commands/npm-test
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-test.md
---

### Synopsis

```bash
npm test [-- <args>]

aliases: t, tst
```

### Description

This runs a predefined command specified in the `"test"` property of
a package's `"scripts"` object.

### Example

```json
{
  "scripts": {
    "test": "node test.js"
  }
}
```

```bash
npm test
> npm@x.x.x test
> node test.js

(test.js output would be here)
```



### See Also

* [npm run-script](/cli/v7/commands/npm-run-script)
* [npm scripts](/cli/v7/using-npm/scripts)
* [npm start](/cli/v7/commands/npm-start)
* [npm restart](/cli/v7/commands/npm-restart)
* [npm stop](/cli/v7/commands/npm-stop)
