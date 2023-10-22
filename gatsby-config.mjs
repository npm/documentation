import path from 'path'
import fs from 'fs'
import remarkGfm from 'remark-gfm'
import remarkFm from 'remark-frontmatter'

const {NODE_ENV, GATSBY_CONTENT_ALLOW, GATSBY_CONTENT_IGNORE, GATSBY_CONTENT_DIR = 'content'} = process.env
const DEV = NODE_ENV === 'development'
const CONTENT_DIR = path.resolve(GATSBY_CONTENT_DIR)

const walkDirs = dir => {
  const dirs = fs
    .readdirSync(dir)
    .filter(d => fs.statSync(path.join(dir, d)).isDirectory())
    .map(p => path.join(dir, p))
  const nested = dirs.flatMap(d => walkDirs(d))
  return [...dirs, ...nested]
}

const getContentOptions = () => {
  if (!DEV || (!GATSBY_CONTENT_ALLOW && !GATSBY_CONTENT_IGNORE)) {
    return
  }

  const allowContent = (GATSBY_CONTENT_ALLOW ?? '').split(',').filter(Boolean)
  const ignoreContent = (GATSBY_CONTENT_IGNORE ?? '').split(',').filter(Boolean)

  const paths = walkDirs(CONTENT_DIR)
    .map(p => path.relative(CONTENT_DIR, p))
    .sort()
    .reduce(
      (acc, p) => {
        const allow = allowContent.length ? allowContent.includes(p) : null
        const ignore = ignoreContent.length ? ignoreContent.includes(p) : null
        if (ignore === true || allow === false) {
          acc.ignore.push(p)
        } else {
          acc.include.push(p)
        }
        return acc
      },
      {include: [], ignore: []},
    )

  const ignoreGlobs = paths.ignore.map(p => path.join('**', p, '**'))

  console.log(`Only including the following partial content in dev mode`)
  console.log(`Allow:\n  - ${paths.include.join('\n  - ')}`)
  console.log(`Ignore:\n  - ${ignoreGlobs.join('\n  - ')}`)

  return {
    ignore: ignoreGlobs,
  }
}

const config = {
  trailingSlash: 'never',
  siteMetadata: {
    title: 'npm Docs',
    shortName: 'npm',
    description: 'Documentation for the npm registry, website, and command-line interface',
    lang: 'en',
    imageUrl: 'https://user-images.githubusercontent.com/29712634/81721690-e2fb5d80-9445-11ea-8602-4b2294c964f3.png',
    repositoryUrl: 'https://github.com/npm/documentation',
  },
  flags: {
    DEV_SSR: !!process.env.GATSBY_DEV_SSR,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkFm],
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
        icon: path.resolve('./src/favicon.png'),
      },
    },
    'gatsby-plugin-meta-redirect',
  ],
}

export default config
