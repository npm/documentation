---
title: npm-config
section: 1
description: Manage the npm configuration files
github_repo: npm/cli
github_branch: release/v6
github_path: docs/content/commands/npm-config.md
redirect_from:
  - /cli-documentation/v6/cli-commands/config
  - /cli-documentation/v6/cli-commands/npm-config
  - /cli-documentation/v6/commands/config
  - /cli-documentation/v6/commands/npm-config
  - /cli-documentation/v6/config
  - /cli-documentation/v6/npm-config
  - /cli/v6/cli-commands/config
  - /cli/v6/cli-commands/npm-config
  - /cli/v6/commands/config
  - /cli/v6/config
  - /cli/v6/npm-config
---

### Synopsis
```bash
npm config set <key> <value> [-g|--global]
npm config get <key>
npm config delete <key>
npm config list [-l] [--json]
npm config edit
npm get <key>
npm set <key> <value> [-g|--global]

aliases: c
```

### Description

npm gets its config settings from the command line, environment
variables, `npmrc` files, and in some cases, the `package.json` file.

See [npmrc](/cli/v6/configuring-npm/npmrc) for more information about the npmrc files.

See [config](/cli/v6/using-npm/config) for a more thorough discussion of the mechanisms
involved.

The `npm config` command can be used to update and edit the contents
of the user and global npmrc files.

### Sub-commands

Config supports the following sub-commands:

#### set
```bash
npm config set key value
```
Sets the config key to the value.

If value is omitted, then it sets it to "true".

#### get
```bash
npm config get key
```

Echo the config value to stdout.

#### list
```bash
npm config list
```

Show all the config settings. Use `-l` to also show defaults. Use `--json`
to show the settings in json format.

#### delete
```bash
npm config delete key
```

Deletes the key from all configuration files.

#### edit
```bash
npm config edit
```

Opens the config file in an editor.  Use the `--global` flag to edit the
global config.

### See Also

* [npm folders](/cli/v6/configuring-npm/folders)
* [npm config](/cli/v6/commands/npm-config)
* [package.json](/cli/v6/configuring-npm/package-json)
* [npmrc](/cli/v6/configuring-npm/npmrc)
* [npm](/cli/v6/commands/npm)
