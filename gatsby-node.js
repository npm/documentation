const path = require('path')

const DEV = process.env.NODE_ENV === 'development'
const SHOW_CONTRIBUTORS = false
const REPO = {
  url: 'https://github.com/npm/documentation',
  defaultBranch: 'main',
}

exports.onCreateNode = ({node, actions, getNode}) => {
  if (node.internal.type === 'Mdx') {
    const {name, relativeDirectory: dir} = getNode(node.parent)

    // These paths are unchanged:
    // - directory indexes
    // - all cli paths
    // - all policies paths
    if (name === 'index' || dir.startsWith('cli/') || dir.startsWith('policies')) {
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

exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src/'),
      },
      extensions: ['.js'],
    },
  })
}

exports.createSchemaCustomization = ({actions: {createTypes}}) => {
  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
      fields: MdxFields
    }
    type MdxFrontmatter {
      edit_on_github: Boolean,
      github_branch: String,
      github_path: String,
      github_repo: String,
      redirect_from: [String],
      slug: String,
      title: String
    }
    type MdxFields {
      slug: String
    }
  `)
}

exports.createPages = async ({graphql, actions}) => {
  const rootAbsolutePath = process.cwd()

  const {data} = await graphql(`
    {
      allMdx {
        nodes {
          id
          internal {
            contentFilePath
          }
          fields {
            slug
          }
          frontmatter {
            edit_on_github
            github_branch
            github_path
            github_repo
            redirect_from
            slug
            title
          }
          tableOfContents
          parent {
            ... on File {
              relativeDirectory
              name
            }
          }
        }
      }
    }
  `)

  // Turn every MDX file into a page.
  return Promise.all(
    data.allMdx.nodes.map(async node => {
      const {
        id,
        frontmatter,
        internal: {contentFilePath},
        tableOfContents = {},
      } = node

      const pagePath = getPath(node)
      const relativePath = path.relative(rootAbsolutePath, contentFilePath)
      const editUrl = getEditUrl(REPO, relativePath, frontmatter)

      const contributors = SHOW_CONTRIBUTORS ? await fetchContributors(REPO, relativePath, frontmatter) : {}

      // Fix some old CLI pages which have mismatched headings at the top level.
      // All top level headings should be the same level.
      const toc = tableOfContents.items?.reduce((acc, item) => {
        if (!item.url && Array.isArray(item.items)) {
          acc.push(...item.items)
        } else {
          acc.push(item)
        }
        return acc
      }, [])

      actions.createPage({
        path: pagePath,
        component: contentFilePath,
        context: {
          mdxId: id,
          editUrl,
          contributors,
          tableOfContents: toc,
          repositoryUrl: REPO.url,
        },
      })

      if (!DEV) {
        for (const from of frontmatter.redirect_from ?? []) {
          actions.createRedirect({
            fromPath: from,
            toPath: `/${pagePath}`,
            isPermanent: true,
            redirectInBrowser: true,
          })

          if (pagePath.startsWith('cli/') && !from.endsWith('index')) {
            actions.createRedirect({
              fromPath: `${from}.html`,
              toPath: `/${pagePath}`,
              isPermanent: true,
              redirectInBrowser: true,
            })
          }
        }
      }
    }),
  )
}

function getPath(node) {
  // sites can programmatically override slug, that takes priority
  if (node.fields && node.fields.slug) {
    return node.fields.slug
  }

  // then a slug specified in frontmatter
  if (node.frontmatter && node.frontmatter.slug) {
    return node.frontmatter.slug
  }

  // finally, we'll just use the path on disk
  return path
    .join(node.parent.relativeDirectory, node.parent.name === 'index' ? '/' : node.parent.name)
    .replace(/\\/g, '/') // Windows paths to forward slashes
}

function getGitHubData(repo, overrideData, filePath) {
  const gh = {
    nwo: new URL(repo.url).pathname.slice(1).split('/'),
    branch: 'master',
  }

  if (overrideData.github_repo) {
    gh.nwo = overrideData.github_repo
  }

  if (overrideData.github_branch) {
    gh.branch = overrideData.github_branch
  } else if (repo.defaultBranch) {
    gh.branch = repo.defaultBranch
  }

  if (overrideData.github_path) {
    gh.path = overrideData.github_path
  } else {
    gh.path = filePath
  }

  return gh
}

function getEditUrl(repo, filePath, overrideData = {}) {
  if (overrideData.edit_on_github === false) {
    return null
  }

  const gh = getGitHubData(repo, overrideData, filePath)
  return `https://github.com/${gh.nwo}/edit/${gh.branch}/${gh.path}`
}

const CONTRIBUTOR_CACHE = new Map()

async function fetchContributors(repo, filePath, overrideData = {}) {
  if (!process.env.GITHUB_TOKEN) {
    console.warn('Skipping fetching contributors because no github token was set')
    return
  }

  const gh = getGitHubData(repo, overrideData, filePath)
  const key = JSON.stringify(gh)

  const cached = CONTRIBUTOR_CACHE.get(key)
  if (cached) {
    return cached
  }

  try {
    const resp = await fetch(
      `https://api.github.com/repos/${gh.nwo}/commits?path=${gh.path}&sha=${gh.branch}&per_page=100`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      },
    )

    const logins = new Set()
    let latestCommit = null

    for (const item of await resp.json().then(r => r.data)) {
      if (item.author?.login) {
        logins.add(item.author.login)
        if (!latestCommit) {
          latestCommit = {
            login: item.author.login,
            date: item.commit.author.date,
            url: item.html_url,
          }
        }
      }
    }

    const result = {logins: [...logins], latestCommit}
    CONTRIBUTOR_CACHE.set(key, result)
    return result
  } catch (error) {
    console.error(`[ERROR] Unable to fetch contributors for ${filePath}. ${error.message}`)
    return []
  }
}
