import GitHubSlugger from 'github-slugger'
import {visit} from 'unist-util-visit'
import {toText} from './text.mjs'

/**
 * Assigns an anchor to every heading of a page and builds its table of
 * contents.
 *
 * Anchors come from `github-slugger`, one instance per page, after the page
 * title has been slugged first: that is the order the headings were slugged
 * in before, so existing links to anchors keep working.
 *
 * @param {import('mdast').Root} tree
 * @param {object} options
 * @param {string} options.headingType - The node type of the page's headings
 * @param {string} [options.title] - The page title
 * @returns {Array<{ url: string, title: string, items?: Array }>|undefined} The nested table of contents
 */
export const buildTableOfContents = (tree, {headingType, title}) => {
  const slugger = new GitHubSlugger()

  if (title) {
    slugger.slug(title)
  }

  const headings = []

  visit(tree, headingType, node => {
    const text = toText(node.children)
    const slug = text ? slugger.slug(text) : ''

    node.data = {...node.data, slug, text}

    if (text) {
      headings.push({depth: node.depth, url: `#${slug}`, title: text})
    }
  })

  const root = {items: []}
  const stack = [{depth: 0, node: root}]

  for (const {depth, ...heading} of headings) {
    while (stack.at(-1).depth >= depth) {
      stack.pop()
    }
    ;(stack.at(-1).node.items ??= []).push(heading)
    stack.push({depth, node: heading})
  }

  return root.items.length ? root.items : undefined
}
