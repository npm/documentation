const path = require('path')
const fs = require('fs')

const {NODE_ENV, GATSBY_PARTIAL_CONTENT} = process.env
const CONTENT_DIR = path.resolve(__dirname, '..', 'content')

const walkDirs = dir => {
  const dirs = fs
    .readdirSync(dir)
    .filter(d => fs.statSync(path.join(dir, d)).isDirectory())
    .map(p => path.join(dir, p))
  const nested = dirs.flatMap(d => walkDirs(d))
  return [...dirs, ...nested]
}

const getContentOptions = () => {
  if (NODE_ENV !== 'development' || !GATSBY_PARTIAL_CONTENT) {
    return
  }

  const partialContent = (GATSBY_PARTIAL_CONTENT ?? '').split(',')

  const paths = walkDirs(CONTENT_DIR)
    .map(p => path.relative(CONTENT_DIR, p))
    .sort()
    .reduce(
      (acc, p) => {
        const include = partialContent.some(partial => partial.startsWith(p))
        acc[include ? 'include' : 'ignore'].push(p)
        return acc
      },
      {include: [], ignore: []},
    )

  console.log(`Only including the following partial content in dev mode:\n  - ${paths.include.join('\n  - ')}`)

  return {
    ignore: paths.ignore,
  }
}

module.exports = ({icon}) => ({
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
          default: require.resolve('./src/layout/index.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: CONTENT_DIR,
        ...getContentOptions(),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: path.resolve(icon),
      },
    },
    'gatsby-plugin-meta-redirect',
  ],
})
