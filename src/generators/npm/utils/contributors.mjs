export const TEST_CONTRIBUTORS = [
  {
    author: {login: 'mona'},
    commit: {author: {date: new Date('2023-03-21').toJSON()}},
    html_url: 'https://github.com/npm/documentation',
  },
]

// How many requests to GitHub are in flight at once.
const CONCURRENCY = 8

/**
 * Where a page's source lives on GitHub: the repository, branch and path the
 * frontmatter points at, or this repository's content file.
 *
 * @param {string} path - The content file, relative to the repository root
 * @param {{ github_repo?: string, github_branch?: string, github_path?: string }} frontmatter
 * @param {{ repository: string, branch: string }} defaults
 */
export const getRepo = (path, frontmatter, {repository, branch}) => {
  const nwo = frontmatter.github_repo || repository
  const [owner, repo] = nwo.split('/')

  return {
    nwo,
    owner,
    repo,
    branch: frontmatter.github_branch || branch,
    path: frontmatter.github_path || path,
  }
}

/**
 * The "edit this page" URL of a page.
 *
 * @param {ReturnType<typeof getRepo>} repo
 */
export const getEditUrl = ({nwo, branch, path}) => `https://github.com/${nwo}/edit/${branch}/${path}`

/**
 * Turns a list of commits into the contributors of a page.
 *
 * @param {Array<{ author?: { login?: string }, commit: { author: { date: string } }, html_url: string }>} commits
 */
export const parseContributors = commits => {
  const contributors = new Set()
  let latestCommit = null

  for (const item of commits) {
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

  return {contributors: [...contributors], latestCommit}
}

/**
 * Runs tasks with at most `limit` of them in flight at once.
 *
 * @param {number} limit
 */
const createLimiter = limit => {
  let active = 0
  const queue = []

  const next = () => {
    if (active < limit && queue.length) {
      active++
      queue.shift()()
    }
  }

  return task =>
    new Promise((resolve, reject) => {
      queue.push(() =>
        task()
          .then(resolve, reject)
          .finally(() => {
            active--
            next()
          }),
      )
      next()
    })
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Lists the commits that touched a file, retrying when GitHub asks to.
 *
 * @param {ReturnType<typeof getRepo>} repo
 * @param {string} token
 * @param {{ fetch?: typeof fetch, retries?: number }} [options]
 */
export const listCommits = async (repo, token, {fetch: request = fetch, retries = 2} = {}) => {
  const query = new URLSearchParams({path: repo.path, sha: repo.branch, per_page: '100'})
  const url = `https://api.github.com/repos/${repo.owner}/${repo.repo}/commits?${query}`

  for (let attempt = 0; ; attempt++) {
    const response = await request(url, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })

    if (response.ok) {
      return response.json()
    }

    const retryable = response.status === 403 || response.status === 429 || response.status >= 500
    if (!retryable || attempt >= retries) {
      throw new Error(`GitHub responded with ${response.status} for ${url}`)
    }

    await sleep((Number(response.headers.get('retry-after')) || 5) * 1000)
  }
}

/**
 * Creates a function that fetches the contributors of a page from GitHub.
 *
 * Without a token, GitHub cannot be queried: in CI that is an error, while a
 * local build warns once and uses placeholder data instead.
 *
 * @param {{ logger: { warn: Function, error: Function }, ci?: boolean, token?: string }} options
 */
export const createContributorsFetcher = ({logger, ci = !!process.env.CI, token = process.env.GITHUB_TOKEN}) => {
  if (!token) {
    const message = 'Cannot fetch contributors without GitHub authentication.'

    if (ci) {
      throw new Error(`${message} Set the GITHUB_TOKEN environment variable.`)
    }

    logger.warn(`${message} Pages will include test contributor data.`)

    return async () => parseContributors(TEST_CONTRIBUTORS)
  }

  const limit = createLimiter(CONCURRENCY)

  return repo =>
    limit(async () => {
      try {
        return parseContributors(await listCommits(repo, token))
      } catch (err) {
        if (ci) {
          throw new Error(`Error fetching contributors for ${repo.path}`, {cause: err})
        }

        logger.error(`Error fetching contributors for ${repo.path}: ${err.message}`)
        return {contributors: [], latestCommit: null}
      }
    })
}
