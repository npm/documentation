import {visit} from 'unist-util-visit'

export const MASKED_HEADING = 'npmHeading'

/**
 * Prepares one parsed file. Exported for tests.
 *
 * @param {{ tree: import('mdast').Root, path: string, mdx: boolean }} file
 */
export const prepareFile = file => {
  visit(file.tree, 'mdxjsEsm', node => {
    throw new Error(
      `${file.path}: \`${node.value.trim().split('\n')[0]}\` is not supported. ` +
        'Content cannot import modules; use the <Shared /> component for shared snippets.',
    )
  })

  visit(file.tree, 'heading', node => {
    node.type = MASKED_HEADING
  })

  return file
}

/**
 * @param {Array<{ tree: import('mdast').Root, path: string, mdx: boolean }>} input
 */
export async function generate(input) {
  return input.map(prepareFile)
}
