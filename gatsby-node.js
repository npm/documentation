const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === 'Mdx') {
    const { name, relativeDirectory: dir } = getNode(node.parent)

    // These paths are unchanged:
    // - directory indexes
    // - all cli paths
    // - all policies paths
    if (name === 'index' || dir.startsWith('cli/') || dir.startsWith('policies/')) {
      return
    }

    // otherwise, omit the directory path and use the filename as the slug
    actions.createNodeField({
      name: 'slug',
      node,
      value: name,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src/'),
      },
      extensions: ['.js'],
    },
  })
}
