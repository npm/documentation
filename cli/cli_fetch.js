#!/usr/bin/env node
// cli_fetch: download cli documentation updates from the cli repo
//
// This script will read the `releases.json` file to understand which
// versions of the CLI should be updated, then fetch the submodule updates
// for the specified branches.
//
// The `releases.json` file includes an array of versions:
//
//    `id`: A short identifier for the version, eg `v6` or `v7`.  This
//          is the directory that contains a submodule to update.
//    `branch`: The branch name for the version.  This is the branch that
//          will be fetched.

const path = require('path');
const child_process = require('child_process');

const config = require('./releases.json');

const docsPath = __dirname;

console.log(`# Updating CLI documentation...`);
console.log(``);

console.log(`# Configuring submodules...`);
git([ "submodule", "update", "--init" ]);

for (version of config) {
    console.log(``);

    console.log(`# Fetching updates for ${version.id}...`);
    console.log(`#`);
    git([ "fetch", "--all" ], version.id);

    console.log(``);

    console.log(`# Updating the ${version.branch} branch for ${version.id}...`);
    console.log(`#`);
    git([ "reset", "--hard", `origin/${version.branch}` ], version.id);
}

function git(args, version_id) {
    const cwd = version_id ? path.join(docsPath, version_id) : docsPath;

    const result = child_process.spawnSync("git", args, { cwd: cwd, stdio: 'inherit' });

    if (result.error) {
        throw result.error;
    }

    if (result.status != 0) {
        console.error(`git: process exited with status ${result.status}`);
        process.exit(result.status);
    }
}
