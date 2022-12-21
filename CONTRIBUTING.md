# Contributing to the npm Documentation

This is the documentation for
[https://docs.npmjs.com/](https://docs.npmjs.com/).  Do you want to
contribute a change?  Great!

### Table of Contents

* [Quick start](#quick-start)
* [Running locally](#running-locally)
* [Updating content](#updating-content)
* [Navigation](#navigation)
* [CLI](#cli)
* [Deploying changes](#deploying-changes)
* [Theme](#theme)

## Quick start

1. `npm install` to download Gatsby, our theme, and the dependencies
2. `npm run develop`: starts the test server at `http://localhost:8000`.
3. Update the content - it's MDX, which is like Markdown - in the `content`
   directory.
4. Review your content at `http://localhost:8000`.  (Gatsby watches the
   filesystem and will reload your content changes immediately.)
5. Once you're happy, commit it and open a pull request at
   https://github.com/npm/documentation.
6. A CI workflow run will publish your PR to a GitHub Preview Page.
7. Once the content is reviewed, merge the pull request.  That will
   [deploy the site](https://github.com/npm/documentation/actions/workflows/publish.yml).

## Running locally

First, `npm install` the dependencies.  This will install Gatsby, et al.

Next, `npm run develop` to start the test server to view your changes.
The Gatsby server will be started on port 8000.  You can navigate to
`http://localhost:8000` to view the site live.

**For best results use npm 8**

**Gatsby will watch your filesystem looking for updates.**  Any content
changes you make should be reflected in the site immediately.

## Updating content

### Documentation content

The documentation content lives in the `content` directory, and is
Markdown.  (Actually, [MDX](https://mdxjs.com/), a sort of reactive
Markdown.)

### Static content (images)

Static content lives in the `static` directory.  Since most of the
static content is screenshots, you can use the `Screenshot` component
to reference them, which is an extension of the `Img` component that
is configured for the docs site.  For example, an image living as
`static/organizations/managing-teams/team-members.png` would be
referenced as:

```
<Screenshot src="/organizations/managing-teams/team-members.png" alt="Screenshot of the team members button" />
```

(Note the `alt` tag, it is mandatory.)

### "Shared" content

There are various places where we want to share content between
pages, to prevent copy-pasta.  For example, we display a screenshot
of the user login dialog repeatedly.  Therefore this shared content
is defined in `src/shared.js`, and includes a literal MDX snippet.

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

Since MDX is reactive, you can import the shared data at the top of the
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
by `src/theme/nav.yml`.  If you add or remove a page from the site, you'll
also want to add or remove it from the navigation configuration.

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
editing its behavior or debugging, and it *should* be done when you're
adding a new major version to the site.

1. Review the configuration  
   The `cli/releases.json` configures how the CLI documentation is
   included.  It is an array of documentation versions, each having
   the following configuration:

   * `id`: A short identifier for the documentation version, eg
     `v6` or `v7`.  This corresponds to a directory containing a
     version of the CLI repository (using a submodule).  This will also
     be used as the output folder in the content.
   * `branch`: The branch name for the version.  This will be used to
     fetch the latest version of the documentation from GitHub.
   * `spec`: The registry spec for the version. This will be used
     to fetch the latest version in that range from the registry.
   * `resolved`: This should not be edited manually. This is a reference
     to the last fetched version of the content for this release. If
     a future fetch is done and this field matches what is returned
     from the registry, then no updates will be made. To force an update
     (which can be useful when making changes to the `bin/build.js` script)
     it can be run with the argument `--force`.

2. Fetch and import the latest content for each CLI release  
   Run `npm run build -w cli` to download the latest version for each release
   and import its content into the `content` directory. This will take the
   content in each submodule's `docs/content` directory, perform any necessary
   translations (like adding historical redirects) and putting it in this repository's
   `content` directory.  In addition, it will take the `docs/nav.yml` and include it
   in this repository's navigation.

## Reviewing changes

When a pull request is opened or updated the
[GitHub Actions workflow](https://github.com/npm/documentation/actions/workflows/publish.yml)
will deploy a preview to the [`github-pages` environment](https://github.com/npm/documentation/deployments/activity_log?environment=github-pages).
The URL will be reported to the pull request and the status can be checked by looking at the
workflows for the [`pull_request_target` event](https://github.com/npm/documentation/actions/workflows/publish.yml?query=event%3Apull_request_target).

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

The Gatsby theme used here is located in the [`theme/`](./theme) directory. It is a variation of
[doctocat](https://github.com/primer/doctocat) with some theme changes
for npm's design language and additional components to support multiple
versions of the CLI documentation.
