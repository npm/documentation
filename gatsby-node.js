exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;

  if (node.internal.type === "Mdx") {
    const file = getNode(node.parent);

    // cli paths are unchanged
    if (file.relativeDirectory.startsWith('cli/')) {
      return;
    }

    // directory index paths are unchanged
    if (file.name === 'index') {
      return;
    }

    // otherwise, omit the directory path and use the filename as the slug
    createNodeField({
      name: 'slug',
      node,
      value: file.name
    })
  }
}
