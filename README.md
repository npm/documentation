# npm Documentation

This is the documentation for
[https://docs.npmjs.com/](https://docs.npmjs.com/).

## Running locally

First, `npm install` the dependencies.  This will install gatsby, et al.

Next, `npm run develop` to test changes.  This will start gatsby on port
8000.  You can navigate to `http://localhost:8000` to view the site
live.

Gatsby will watch your filesystem looking for updates.  Any content
changes you make should be reflected in the site immediately.

## CLI

The documentation for the [npm cli](https://github.com/npm/cli) is not
modified in this repository.  Instead, the canonical location for it
is in the [npm/cli](https://github.com/npm/cli) repository.  Modifications
to those files are automatically included here for completeness.

Pull requests to CLI documentation in this repository will be closed.

### Updating CLI Content

Since the CLI documentation content lives in the [npm/cli
repo](https://github.com/npm/cli), there is a [GitHub Actions
workflow](https://github.com/npm/documentation/actions/workflows/update-cli.yml)
that pulls documentation updates from the CLI into this repository.
This is done nightly.

This process can, of course, be done manually.  This may be useful for
editing its behavior or debugging.

1. Review the configuration  
   The `cli/releases.json` configures how the CLI documentation is
   included.  It is an array of documentation versions, each having
   the following configuration:

   * `id`: A short identifier for the documentation version, eg
     `v6` or `v7`.  This corresponds to a directory containing a
     version of the CLI repository (using a submodule).  This will also
     be used as the output folder in the content.
   * `version`: The full semantic version number (eg `6.0.0`).
   * `title`: A long description of the version information.  This will
     be used in the version picker,.
   * `branch`: The branch name for the version.  This will be used to
     fetch the latest version of the documentation from GitHub.

2. Fetch the latest content from the CLI repository  
   Run `cli/cli_fetch.js` to download the submodules.  This will
   initialize the submodules, fetch each one, and update them to
   the latest branch commit on the remote.

3. Import the CLI's content into the main repository
   Run `cli/cli_import.js` to import the CLI's documentation from each
   directory.  This will take the content in each submodule's
   `docs/content` directory, perform any necessary translations (like
   adding historical redirects) and putting it in this repository's
   `content` directory.  In addition, it will take the `docs/nav.yml`
   and include it in this repository's navigation.

## Theme

The gatsby theme used here is "doctornpm" - a variation of
[doctocat](https://github.com/primer/doctocat) with some theme changes
for npm's design language and additional components to support multiple
versions of the CLI documentation.

