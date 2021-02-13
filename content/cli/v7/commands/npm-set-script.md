---
title: npm-set-script
section: 1
description: Set tasks in the scripts section of package.json
redirect_from:
  - /cli/set-script
  - /cli/set-script.html
  - /cli/commands/set-script
  - /cli-commands/set-script
  - /cli-commands/set-script.html
  - /cli-commands/npm-set-script
github_repo: npm/cli
github_branch: latest
github_path: docs/content/commands/npm-set-script.md
---

### Synopsis
An npm command that lets you create a task in the scripts section of the package.json.

```bash
npm set-script [<script>] [<command>]
```


**Example:**

* `npm set-script start "http-server ."`

```json
{
  "name": "my-project",
  "scripts": {
    "start": "http-server .",
    "test": "some existing value"
  }
}
```

### See Also

* [npm run-script](/cli/v7/commands/npm-run-script)
* [npm install](/cli/v7/commands/npm-install)
* [npm test](/cli/v7/commands/npm-test)
* [npm start](/cli/v7/commands/npm-start)
