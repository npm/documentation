exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const file = getNode(node.parent)

    // cli paths are unchanged
    if (file.relativeDirectory.startsWith('cli/')) {
      return
    }

    // directory index paths and policy are unchanged
    if (file.name === 'index' ||
        file.relativeDirectory.match(/^policies(\/.*)?$/)) {
      return
    }

    // otherwise, omit the directory path and use the filename as the slug
    createNodeField({
      name: 'slug',
      node,
      value: file.name,
    })
  }
}
