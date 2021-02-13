---
title: npm-stop
section: 1
description: Stop a package
redirect_from:
  - /cli/stop
  - /cli/stop.html
  - /cli/commands/stop
  - /cli-commands/stop
  - /cli-commands/stop.html
  - /cli-commands/npm-stop
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-stop.md
---

### Synopsis

```bash
npm stop [-- <args>]
```

### Description

This runs a predefined command specified in the "stop" property of a
package's "scripts" object.

Unlike with [npm start](/cli/v7/commands/npm-start), there is no default script
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

### See Also

* [npm run-script](/cli/v7/commands/npm-run-script)
* [npm scripts](/cli/v7/using-npm/scripts)
* [npm test](/cli/v7/commands/npm-test)
* [npm start](/cli/v7/commands/npm-start)
* [npm restart](/cli/v7/commands/npm-restart)
