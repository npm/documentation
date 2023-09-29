const path = require('path')

module.exports = themeOptions => {
  return {
    plugins: [
      'gatsby-plugin-styled-components',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-catch-links',
      'gatsby-transformer-yaml',
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
          defaultLayouts: {
            default: require.resolve('./src/components/layout.js'),
          },
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'content',
          path: process.env.GATSBY_PARTIAL_CONTENT
            ? path.resolve(`./content/${process.env.GATSBY_PARTIAL_CONTENT}`)
            : path.resolve('./content'),
        },
      },
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          icon: themeOptions.icon ? path.resolve(themeOptions.icon) : require.resolve('./src/images/favicon.png'),
        },
      },
    ],
  }
}
