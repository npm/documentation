const path = require('path')

exports.createSchemaCustomization = ({actions: {createTypes}}) => {
  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
      fields: MdxFields
    }
    type MdxFrontmatter {
      github_repo: String,
      github_branch: String,
      github_path: String,
      edit_on_github: Boolean,
      slug: String,
      redirect_from: [String]
    }
    type MdxFields {
      slug: String
    }
  `)
}

exports.createPages = async ({graphql, actions}, {repo, showContributors}) => {
  const rootAbsolutePath = process.cwd()

  const {data} = await graphql(`
    {
      allMdx {
        nodes {
          id
          fileAbsolutePath
          fields {
            slug
          }
          frontmatter {
            title
            github_repo
            github_branch
            github_path
            edit_on_github
            slug
            redirect_from
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
      const {id, frontmatter, fileAbsolutePath, tableOfContents = {}} = node

      const pagePath = getPath(node)
      const relativePath = path.relative(rootAbsolutePath, fileAbsolutePath)
      const editUrl = getEditUrl(repo, relativePath, frontmatter)

      const contributors = showContributors ? await fetchContributors(repo, relativePath, frontmatter) : []

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
        component: fileAbsolutePath,
        context: {
          mdxId: id,
          editUrl,
          contributors,
          tableOfContents: toc,
          repositoryUrl: repo.url,
        },
      })

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
