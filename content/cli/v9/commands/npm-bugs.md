---
title: npm-bugs
section: 1
description: Report bugs for a package in a web browser
github_repo: npm/cli
github_branch: latest
github_path: docs/lib/content/commands/npm-bugs.md
redirect_from:
  - /cli-commands/bugs
  - /cli-commands/npm-bugs
  - /cli-documentation/bugs
  - /cli-documentation/cli-commands/bugs
  - /cli-documentation/cli-commands/npm-bugs
  - /cli-documentation/commands/bugs
  - /cli-documentation/commands/npm-bugs
  - /cli-documentation/npm-bugs
  - /cli-documentation/v9/bugs
  - /cli-documentation/v9/cli-commands/bugs
  - /cli-documentation/v9/cli-commands/npm-bugs
  - /cli-documentation/v9/commands/bugs
  - /cli-documentation/v9/commands/npm-bugs
  - /cli-documentation/v9/npm-bugs
  - /cli/bugs
  - /cli/cli-commands/bugs
  - /cli/cli-commands/npm-bugs
  - /cli/commands/bugs
  - /cli/commands/npm-bugs
  - /cli/npm-bugs
  - /cli/v9/bugs
  - /cli/v9/cli-commands/bugs
  - /cli/v9/cli-commands/npm-bugs
  - /cli/v9/commands/bugs
  - /cli/v9/npm-bugs
  - /commands/bugs
  - /commands/npm-bugs
---

### Synopsis

```bash
npm bugs [<pkgname> [<pkgname> ...]]

alias: issues
```

### Description

This command tries to guess at the likely location of a package's bug
tracker URL or the `mailto` URL of the support email, and then tries to
open it using the [`--browser` config](/cli/v9/using-npm/config#browser) param. If no
package name is provided, it will search for a `package.json` in the current
folder and use the `name` property.

### Configuration

#### `browser`

* Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
* Type: null, Boolean, or String

The browser that is called by npm commands to open websites.

Set to `false` to suppress browser behavior and instead print urls to
terminal.

Set to `true` to use default system URL opener.



#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

### See Also

* [npm docs](/cli/v9/commands/npm-docs)
* [npm view](/cli/v9/commands/npm-view)
* [npm publish](/cli/v9/commands/npm-publish)
* [npm registry](/cli/v9/using-npm/registry)
* [npm config](/cli/v9/commands/npm-config)
* [npmrc](/cli/v9/configuring-npm/npmrc)
* [package.json](/cli/v9/configuring-npm/package-json)
