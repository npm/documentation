import {join, relative} from 'path'
import {Octokit as CoreOctokit} from '@octokit/rest'
import {throttling} from '@octokit/plugin-throttling'
import {retry} from '@octokit/plugin-retry'
import webpackConfig from './webpack.config.js'

const CI = !!process.env.CI
const CWD = process.cwd()
const SRC = join(CWD, 'src')
const REPO_URL = 'https://github.com/npm/documentation'
const NWO = new URL(REPO_URL).pathname.slice(1)
const REPO_BRANCH = 'main'
const TEST_CONTRIBUTORS = [
  {
    author: {login: 'mona'},
    commit: {author: {date: new Date('2023-03-21').toJSON()}},
    html_url: REPO_URL,
  },
]

const createOctokit = ({reporter}) => {
  const Octokit = CoreOctokit.plugin(throttling).plugin(retry)
  return new Octokit({
    log: {
      debug: () => {},
      info: reporter.info,
      warn: reporter.warn,
      error: reporter.error,
    },
    auth: process.env.GITHUB_TOKEN,
    throttle: {
      onRateLimit: (retryAfter, options, {log}, retryCount) => {
        log.warn(`Request quota exhausted for request ${options.method} ${options.url}`)
        if (retryCount < 2) {
          log.info(`Retrying after ${retryAfter} seconds`)
          return true
        }
      },
      onSecondaryRateLimit: (_, options, {log}) => {
        log.warn(`SecondaryRateLimit detected for request ${options.method} ${options.url}`)
      },
    },
  })
}

export const onCreateNode = ({node, actions, getNode}) => {
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

export const onCreateWebpackConfig = ({stage, actions}) => {
  actions.setWebpackConfig({
    ...webpackConfig,
  })

  if (stage === `build-javascript`) {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}

export const createSchemaCustomization = ({actions: {createTypes}}) => {
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

export const createPages = async ({graphql, actions, reporter}) => {
  const response = await graphql(`
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

  if (response.errors) {
    reporter.panic('Error getting allMdx', response.errors)
    return
  }

  const octokit = createOctokit({reporter})

  // Turn every MDX file into a page.
  return Promise.all(
    response.data.allMdx.nodes.map(async node => {
      try {
        node.fields ||= {}
        node.frontmatter ||= {}
        node.frontmatter.redirect_from ||= []
        node.tableOfContents ||= {}
        node.tableOfContents.items ||= []
        return await createPage(node, {actions, reporter, octokit})
      } catch (err) {
        reporter.panic(`Error creating page: ${JSON.stringify(node, null, 2)}`, err)
      }
    }),
  )
}

const createPage = async (
  {
    id,
    internal: {contentFilePath},
    fields: {slug},
    frontmatter = {},
    tableOfContents = {},
    parent: {relativeDirectory, name: parentName},
  },
  {actions, reporter, octokit},
) => {
  const path = relative(CWD, contentFilePath)
  // sites can programmatically override slug, that takes priority
  // then a slug specified in frontmatter
  // finally, we'll just use the path on disk
  const pageSlug =
    slug ?? frontmatter.slug ?? join(relativeDirectory, parentName === 'index' ? '/' : parentName).replace(/\\/g, '/')

  const context = {
    mdxId: id,
    tableOfContents: getTableOfConents(tableOfContents),
  }
  // edit_on_github: false in frontmatter will not include editUrl and contributors
  // on the page. this is used for policy pages as well as some index pages that don't
  // have any editable content
  if (frontmatter.edit_on_github !== false) {
    context.editUrl = getRepo(path, frontmatter).replace(`https://github.com/{nwo}/edit/{branch}/{path}`)
    Object.assign(context, await fetchContributors(path, frontmatter, {reporter, octokit}))
  }

  actions.createPage({
    path: pageSlug,
    component: `${join(SRC, 'head.js')}?__contentFilePath=${contentFilePath}`,
    context,
  })

  for (const from of frontmatter.redirect_from) {
    actions.createRedirect({
      fromPath: from,
      toPath: `/${pageSlug}`,
      isPermanent: true,
      redirectInBrowser: true,
    })

    if (pageSlug.startsWith('cli/') && !from.endsWith('index')) {
      actions.createRedirect({
        fromPath: `${from}.html`,
        toPath: `/${pageSlug}`,
        isPermanent: true,
        redirectInBrowser: true,
      })
    }
  }
}

const getTableOfConents = ({items}) => {
  // Fix some old CLI pages which have mismatched headings at the top level.
  // All top level headings should be the same level.
  const tableOfContents = items.reduce((acc, item) => {
    if (!item.url && Array.isArray(item.items)) {
      acc.push(...item.items)
    } else {
      acc.push(item)
    }
    return acc
  }, [])

  if (tableOfContents.length) {
    return tableOfContents
  }
}

const getRepo = (path, fm) => {
  const result = {
    nwo: NWO,
    branch: REPO_BRANCH,
    ...(fm.github_repo ? {nwo: fm.github_repo} : {}),
    ...(fm.github_branch ? {branch: fm.github_branch} : {}),
    path: fm.github_path || path,
  }
  const [owner, repo] = result.nwo.split('/')
  result.owner = owner
  result.repo = repo
  result.replace = str => str.replace(/\{([a-z]+)\}/g, (_, name) => result[name])
  return result
}

let warnOnNoContributors = true
const fetchContributors = async (path, fm, {reporter, octokit}) => {
  const noAuth = (await octokit.auth()).type === 'unauthenticated'
  if (noAuth) {
    const msg = `Cannot fetch contributors without GitHub authentication.`
    if (CI) {
      reporter.panic(msg)
      return
    }

    if (warnOnNoContributors) {
      warnOnNoContributors = false
      reporter.warn(`${msg} Pages will be include test contributor data.`)
    }
  }

  try {
    const repo = getRepo(path, fm)
    const resp = noAuth
      ? {data: TEST_CONTRIBUTORS}
      : await octokit.rest.repos.listCommits({
          repo: repo.repo,
          owner: repo.owner,
          path: repo.path,
          sha: repo.branch,
          per_page: 100,
        })

    const contributors = new Set()
    let latestCommit = null

    for (const item of resp.data) {
      if (item.author?.login) {
        contributors.add(item.author.login)
        if (!latestCommit) {
          latestCommit = {
            login: item.author.login,
            date: item.commit.author.date,
            url: item.html_url,
          }
        }
      }
    }

    return {
      contributors: [...contributors],
      latestCommit,
    }
  } catch (err) {
    reporter[CI ? 'panic' : 'error'](`Error fetching contributors for ${path}`, err)
  }
}
