import {visit} from 'unist-util-visit'

const TEXT_TYPES = new Set(['text', 'inlineCode'])
const BLOCK_TYPES = new Set(['code'])

/**
 * The plain text of a node, the way the DOM's `textContent` would see it.
 *
 * @param {import('unist').Node | Array<import('unist').Node>} node
 */
export const toText = node => {
  const parts = []
  for (const child of Array.isArray(node) ? node : [node]) {
    visit(child, n => {
      if (TEXT_TYPES.has(n.type) || BLOCK_TYPES.has(n.type)) {
        parts.push(n.value)
      }
    })
  }
  return parts.join('')
}

/**
 * The searchable text of a tree: every text node, separated by whitespace.
 *
 * @param {import('unist').Node} tree
 */
export const toSearchText = tree => {
  const parts = []
  visit(tree, n => {
    if (TEXT_TYPES.has(n.type) || BLOCK_TYPES.has(n.type)) {
      parts.push(n.value)
    }
  })
  return parts.join(' ').replace(/\s+/g, ' ').trim()
}
