# npm Documentation

[![Publish](https://github.com/npm/documentation/actions/workflows/publish.yml/badge.svg)](https://github.com/npm/documentation/actions/workflows/publish.yml)

This is the documentation for
[https://docs.npmjs.com/](https://docs.npmjs.com/).

### Table of Contents

* [Running locally](#running-locally)
* [Updating content](#updating-content)
* [Navigation](#navigation)
* [CLI](#cli)
* [Deploying changes](#deploying-changes)
* [Theme](#theme)

## Running locally

First, `npm install` the dependencies.  This will install gatsby, et al.

Next, `npm run develop` to start the test server to view your changes.
The gatsby server will be started on port 8000.  You can navigate to
`http://localhost:8000` to view the site live.

**Gatsby will watch your filesystem looking for updates.**  Any content
changes you make should be reflected in the site immediately.

## Updating content

### Documentation content

The documentation content lives in the `content` directory, and is
markdown.  (Actually, [Mdx](https://mdxjs.com/), a sort of reactive
markdown.)

### Static content (images)

Static content lives in the `static` directory.  Since most of the
static content is screenshots, you can use the `Screenshot` component
to reference them, which is an extension of the `Img` component that
is configured for the docs site.  For example, an image living as
`static/organizations/managing-temas/team-members.png` would be
referenced as:

```
<Screenshot src="/organizations/managing-teams/team-members.png" alt="Screenshot of the team members button" />
```

(Note the `alt` tag, it is mandatory.)

### "Shared" content

There are various places where we want to share content between
pages, to prevent copy-pasta.  For example, we display a screenshot
of the user login dialog repeatedly.  Therefore this shared content
is defined in `src/shared.js`, and includes a literal Mdx snippet.

For example, `user-login` is defined with `text` and `image`
properties:

```js
'user-login': {
    'text': (<><Link href="https://www.npmjs.com/login">Log in</Link> to npm
 with your user account.</>),
    'image': (<Screenshot src="/shared/user-login.png" alt="Screenshot of np
m login dialog" />)
},
```

Since Mdx is reactive, you can import the shared data at the top of the
file, just beneath your frontmatter:

```
---
title: Using shared content
---
import shared form '../../../src/shared.js'
```

And then reference the shared content within `<>`:

```
To login, <>{shared['user-login'].text}</>
```

### URLs

Note that for backward compatibility reasons, the on-disk paths
are not precisely identical to the URLs for the documentation.
To keep URLs expressive but still short, intermediate directories
are removed from a page's URL.

You can see this navigating through the documentation hierarchy:
if you visit the "Packages and modules" page, you'll navigate to
`https://docs.npmjs.com/packages-and-modules`.

There's then a folder beneath that, "Contributing packages to the
registry", which is (sensibly) at
`https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry`.

You might (understandably) expect the page "Creating Node.js modules"
to be URL-wise beneath `contributing-packages-to-the-registry`, but
unfortunately, you would be wrong.  To keep URLs short, the intermediate
folder paths are removed from pages, so "Creating Node.js modules" becomes
`https://docs.npmjs.com/creating-node-js-modules`.

If you have only a URL and want to find where it lives on disk, you can
consult the left-hand navigation on the site.

<img width="353" alt="Screen Shot 2021-03-02 at 10 06 19" src="https://user-images.githubusercontent.com/1130014/109632522-04494980-7b3f-11eb-8b07-9e7bb992872f.png">

You can also use `find` from within the `content` directory.  For example:

```
find . -iname creating-node-js-modules\* -print
```

### Frontmatter

The content pages should include
[frontmatter](https://jekyllrb.com/docs/front-matter/).

* `title`: the page's title (string); required
* `redirect_from`: any URLs on the site that will be redirected to this page (array of strings)

## Navigation

The site's navigation (on the left-hand sidebar of the site) is controlled
by `src/nav-base.yml`.  If you add or remove a page from the site, you'll
also want to add or remove it from the navigation configuration.

Since the main documentation's navigation is combined with the CLI
documentation's navigation to produce the overall navigation, you'll
need to run the CLI update script (`cli/cli_import.js`) to combine
the navigation.  (More on that below.)

**Todo:** we should isolate the navigational elements into their own
script that runs as part of gatsby's `onPreBuild` phase.

## CLI

The documentation for the [npm cli](https://github.com/npm/cli) is not
modified in this repository.  Instead, the canonical location for it
is in the [npm/cli](https://github.com/npm/cli) repository.  Modifications
to those files are automatically included here for completeness.

**Pull requests to CLI documentation in this repository will be closed.**

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

## Deploying changes

The docs site (https://docs.npmjs.com/) is published from a
[GitHub Actions workflow](https://github.com/npm/documentation/actions/workflows/publish.yml)
on any push into the main branch.  That means that the workflow for
updating the site is:

1. Make your changes locally, review them, commit them.
2. Open a pull request for review
3. Merge that pull request

On step three, your changes will be published live!  🎉

## Theme

The gatsby theme used here is "doctornpm" - a variation of
[doctocat](https://github.com/primer/doctocat) with some theme changes
for npm's design language and additional components to support multiple
versions of the CLI documentation.

