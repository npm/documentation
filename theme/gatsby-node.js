const path = require('path')
const readPkgUp = require('read-pkg-up')
const getPkgRepo = require('get-pkg-repo')
const axios = require('axios')
const uniqBy = require('lodash.uniqby')

const CONTRIBUTOR_CACHE = new Map()

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
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

exports.createPages = async ({ graphql, actions }, themeOptions) => {
  const repo = themeOptions.repo ? themeOptions.repo : { url: getPkgRepo(readPkgUp.sync().package).browse() }

  const { data } = await graphql(`
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

  if (!process.env.GITHUB_TOKEN && !process.env.NOW_GITHUB_DEPLOYMENT) {
    console.error(`Non-deploy build and no GITHUB_TOKEN environment variable set; skipping GitHub API calls`)
  }

  // Turn every MDX file into a page.
  return Promise.all(
    data.allMdx.nodes.map(async node => {
      const pagePath = getPath(node)

      const rootAbsolutePath = path.resolve(
        process.cwd(),
        themeOptions.repoRootPath || '.'
      )

      const fileRelativePath = path.relative(
        rootAbsolutePath,
        node.fileAbsolutePath
      )

      const editUrl = getEditUrl(themeOptions, repo, fileRelativePath, node.frontmatter)

      let contributors = []
      if (themeOptions.showContributors !== false && (process.env.GITHUB_TOKEN || process.env.NOW_GITHUB_DEPLOYMENT)) {
        contributors = await fetchContributors(repo, fileRelativePath, node.frontmatter, process.env.GITHUB_TOKEN)
      }

      actions.createPage({
        path: pagePath,
        component: node.fileAbsolutePath,
        context: {
          mdxId: node.id,
          themeOptions,
          editUrl,
          contributors,
          tableOfContents: node.tableOfContents,
        },
      })

      if (node.frontmatter.redirect_from) {
        node.frontmatter.redirect_from.forEach((from) => {
          actions.createRedirect({
            fromPath: from,
            toPath: '/' + pagePath,
            isPermanent: true,
            redirectInBrowser: true,
          })

          if (pagePath.startsWith('cli/') && !from.endsWith('index')) {
            actions.createRedirect({
              fromPath: `${from}.html`,
              toPath: '/' + pagePath,
              isPermanent: true,
              redirectInBrowser: true,
            })
          }
        })
      }
    })
  )
}

function getPath (node) {
  // sites can programmatically override slug, that takes priority
  if (node.fields && node.fields.slug) {
    return node.fields.slug
  }

  // then a slug specified in frontmatter
  if (node.frontmatter && node.frontmatter.slug) {
    return node.frontmatter.slug
  }

  // finally, we'll just use the path on disk
  return path.join(
    node.parent.relativeDirectory,
    node.parent.name === 'index' ? '/' : node.parent.name
  )
    .replace(/\\/g, '/') // Windows paths to forward slashes
}

function getNameWithOwner (url) {
  const nwo = url.match(/^http(?:s)?:\/\/(?:www\.)?github\.com\/([^/]+\/[^/]+)(?:\/)?$/i)

  if (nwo) {
    return nwo[1]
  }

  return null
}

function getGitHubData (repo, overrideData, filePath) {
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
    gh.path = repo.path + '/' + filePath
  } else {
    gh.path = filePath
  }

  return gh
}

function getEditUrl (themeOptions, repo, filePath, overrideData = { }) {
  if (themeOptions.editOnGitHub === false || overrideData.edit_on_github === false) {
    return null
  }

  const gh = getGitHubData(repo, overrideData, filePath)
  return `https://github.com/${gh.nwo}/edit/${gh.branch}/${gh.path}`
}

async function fetchContributors (repo, filePath, overrideData = { }, accessToken = '') {
  const gh = getGitHubData(repo, overrideData, filePath)

  const cached = CONTRIBUTOR_CACHE.get(gh)
  if (cached) {
    return cached
  }

  try {
    const req = {
      method: 'get',
      baseURL: 'https://api.github.com/',
      url: `/repos/${gh.nwo}/commits?path=${gh.path}&sha=${gh.branch}&per_page=100`,
    }

    if (accessToken && accessToken.length) {
      req.headers = {
        Authorization: `token ${accessToken}`,
      }
    }

    const { data } = await axios.request(req)

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
    console.error(
      `[ERROR] Unable to fetch contributors for ${filePath}. ${error.message}`
    )
    return []
  }
}
