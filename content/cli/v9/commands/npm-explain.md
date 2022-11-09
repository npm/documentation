---
title: npm-explain
section: 1
description: Explain installed packages
github_repo: npm/cli
github_branch: latest
github_path: docs/lib/content/commands/npm-explain.md
redirect_from:
  - /cli-commands/explain
  - /cli-commands/npm-explain
  - /cli-documentation/cli-commands/explain
  - /cli-documentation/cli-commands/npm-explain
  - /cli-documentation/commands/explain
  - /cli-documentation/commands/npm-explain
  - /cli-documentation/explain
  - /cli-documentation/npm-explain
  - /cli-documentation/v9/cli-commands/explain
  - /cli-documentation/v9/cli-commands/npm-explain
  - /cli-documentation/v9/commands/explain
  - /cli-documentation/v9/commands/npm-explain
  - /cli-documentation/v9/explain
  - /cli-documentation/v9/npm-explain
  - /cli/cli-commands/explain
  - /cli/cli-commands/npm-explain
  - /cli/commands/explain
  - /cli/commands/npm-explain
  - /cli/explain
  - /cli/npm-explain
  - /cli/v9/cli-commands/explain
  - /cli/v9/cli-commands/npm-explain
  - /cli/v9/commands/explain
  - /cli/v9/explain
  - /cli/v9/npm-explain
  - /commands/explain
  - /commands/npm-explain
---

### Synopsis

```bash
npm explain <package-spec>

alias: why
```

### Description

This command will print the chain of dependencies causing a given package
to be installed in the current project.

If one or more package specs are provided, then only packages matching
one of the specifiers will have their relationships explained.

The package spec can also refer to a folder within `./node_modules`

For example, running `npm explain glob` within npm's source tree will show:

```bash
glob@7.1.6
node_modules/glob
  glob@"^7.1.4" from the root project

glob@7.1.1 dev
node_modules/tacks/node_modules/glob
  glob@"^7.0.5" from rimraf@2.6.2
  node_modules/tacks/node_modules/rimraf
    rimraf@"^2.6.2" from tacks@1.3.0
    node_modules/tacks
      dev tacks@"^1.3.0" from the root project
```

To explain just the package residing at a specific folder, pass that as the
argument to the command.  This can be useful when trying to figure out
exactly why a given dependency is being duplicated to satisfy conflicting
version requirements within the project.

```bash
$ npm explain node_modules/nyc/node_modules/find-up
find-up@3.0.0 dev
node_modules/nyc/node_modules/find-up
  find-up@"^3.0.0" from nyc@14.1.1
  node_modules/nyc
    nyc@"^14.1.1" from tap@14.10.8
    node_modules/tap
      dev tap@"^14.10.8" from the root project
```

### Configuration
#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.

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

### See Also

* [package spec](/cli/v9/using-npm/package-spec)
* [npm config](/cli/v9/commands/npm-config)
* [npmrc](/cli/v9/configuring-npm/npmrc)
* [npm folders](/cli/v9/configuring-npm/folders)
* [npm ls](/cli/v9/commands/npm-ls)
* [npm install](/cli/v9/commands/npm-install)
* [npm link](/cli/v9/commands/npm-link)
* [npm prune](/cli/v9/commands/npm-prune)
* [npm outdated](/cli/v9/commands/npm-outdated)
* [npm update](/cli/v9/commands/npm-update)
