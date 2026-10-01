import {generate} from './generate.mjs'

/**
 * Turns doc-kit's metadata entries into the pages of the npm docs site.
 *
 * It runs between doc-kit's `metadata` and `jsx-ast` stages (see the
 * `npm-ast` generator for the first half) and gives every page what the
 * site's layout needs: its URL, anchors and table of contents, "edit this
 * page" link and contributors. It also writes the redirect pages and the
 * search index into the output directory.
 *
 * @type {import('@doc-kit/core/utils/configuration/types').GeneratorMetadata}
 */
const generator = {
  name: 'npm',

  description: 'Builds the npm docs pages, redirects, and search index',

  dependsOn: '@doc-kit/core/metadata',

  dependent: '@doc-kit/generator-react/html',

  defaultConfiguration: {
    // The directory the content is read from, relative to the working
    // directory; edit links point at the files inside it.
    contentDir: 'content',
    // The repository and branch the content lives in.
    repository: 'npm/documentation',
    branch: 'main',
    // Whether to fetch each page's contributors from GitHub.
    contributors: true,
  },

  generate,
}

export default generator
