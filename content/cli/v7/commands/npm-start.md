---
title: npm-start
section: 1
description: Start a package
redirect_from:
  - /cli/start
  - /cli/start.html
  - /cli/commands/start
  - /cli-commands/start
  - /cli-commands/start.html
  - /cli-commands/npm-start
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-start.md
---

### Synopsis

```bash
npm start [-- <args>]
```

### Description

This runs a predefined command specified in the `"start"` property of
a package's `"scripts"` object.

If the `"scripts"` object does not define a  `"start"` property, npm
will run `node server.js`.

Note that this is different from the default node behavior of running
the file specified in a package's `"main"` attribute when evoking with
`node .`

As of [`npm@2.0.0`](https://blog.npmjs.org/post/98131109725/npm-2-0-0), you can
use custom arguments when executing scripts. Refer to [`npm run-script`](/cli/v7/commands/npm-run-script) for more details.

### Example

```json
{
  "scripts": {
    "start": "node foo.js"
  }
}
```

```bash
npm start

> npm@x.x.x start
> node foo.js

(foo.js output would be here)

```

### See Also

* [npm run-script](/cli/v7/commands/npm-run-script)
* [npm scripts](/cli/v7/using-npm/scripts)
* [npm test](/cli/v7/commands/npm-test)
* [npm restart](/cli/v7/commands/npm-restart)
* [npm stop](/cli/v7/commands/npm-stop)
