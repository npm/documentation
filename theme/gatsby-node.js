const path = require('path')
const uniqBy = require('lodash.uniqby')

const CONTRIBUTOR_CACHE = new Map()

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

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions

  if (node.internal.type === 'Mdx') {
    const file = getNode(node.parent)

    // cli paths are unchanged
    if (file.relativeDirectory.startsWith('cli/')) {
      return
    }

    // directory index paths and policy are unchanged
    if (file.name === 'index' || file.relativeDirectory.match(/^policies(\/.*)?$/)) {
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

exports.createPages = async ({graphql, actions}, themeOptions) => {
  const repo = themeOptions.repo

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
      const pagePath = getPath(node)

      const rootAbsolutePath = path.resolve(process.cwd(), themeOptions.repoRootPath || '.')

      const fileRelativePath = path.relative(rootAbsolutePath, node.fileAbsolutePath)

      const editUrl = getEditUrl(repo, fileRelativePath, node.frontmatter)

      const contributors =
        themeOptions.showContributors !== false ? await fetchContributors(repo, fileRelativePath, node.frontmatte) : []

      // Fix some old CLI pages which have mismatched headings at the top level.
      // All top level headings should be the same level.
      const tableOfContents = node.tableOfContents?.items?.reduce((acc, item) => {
        if (!item.url && Array.isArray(item.items)) {
          acc.push(...item.items)
        } else {
          acc.push(item)
        }
        return acc
      }, [])

      actions.createPage({
        path: pagePath,
        component: node.fileAbsolutePath,
        context: {
          mdxId: node.id,
          themeOptions,
          editUrl,
          contributors,
          tableOfContents,
          repositoryUrl: repo.url,
        },
      })

      if (node.frontmatter.redirect_from) {
        for (const from of node.frontmatter.redirect_from) {
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

function getNameWithOwner(url) {
  const nwo = url.match(/^http(?:s)?:\/\/(?:www\.)?github\.com\/([^/]+\/[^/]+)(?:\/)?$/i)

  if (nwo) {
    return nwo[1]
  }

  return null
}

function getGitHubData(repo, overrideData, filePath) {
  const gh = {
    nwo: getNameWithOwner(repo.url),
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
  } else if (repo.path) {
    gh.path = `${repo.path}/${filePath}`
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

async function fetchContributors(repo, filePath, overrideData = {}) {
  if (!process.env.GITHUB_TOKEN) {
    console.warn('Skipping fetching contributors because no github token was set')
    return
  }

  const gh = getGitHubData(repo, overrideData, filePath)

  const cached = CONTRIBUTOR_CACHE.get(gh)
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

    const {data} = await resp.json()

    const commits = data
      .map(commit => ({
        login: commit.author && commit.author.login,
        latestCommit: {
          date: commit.commit.author.date,
          url: commit.html_url,
        },
      }))
      .filter(contributor => Boolean(contributor.login))

    const result = uniqBy(commits, 'login')
    CONTRIBUTOR_CACHE.set(gh, result)
    return result
  } catch (error) {
    console.error(`[ERROR] Unable to fetch contributors for ${filePath}. ${error.message}`)
    return []
  }
}
