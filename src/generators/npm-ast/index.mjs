import {generate} from './generate.mjs'

/**
 * Masks every heading of the content trees, so that doc-kit's `metadata`
 * stage treats each file as a single page. It would otherwise split pages
 * into API entries, which does not fit prose documentation and mishandles
 * headings nested inside JSX components. The `npm` generator, which runs
 * after `metadata`, restores them.
 *
 * It also rejects `import` statements, which the site does not support.
 *
 * @type {import('@doc-kit/core/utils/configuration/types').GeneratorMetadata}
 */
const generator = {
  name: 'npm-ast',

  description: 'Prepares the npm docs content trees for doc-kit',

  dependsOn: '@doc-kit/core/ast',

  dependent: '@doc-kit/generator-react/html',

  generate,
}

export default generator
