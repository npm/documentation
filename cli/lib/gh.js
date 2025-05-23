const {posix, sep} = require('node:path')
const {execSync} = require('node:child_process')

if (!process.env.GITHUB_TOKEN) {
  try {
    // this allows people to run this locally
    process.env.GITHUB_TOKEN = execSync('gh auth token', {encoding: 'utf8'}).trim()
  } catch (err) {
    throw new Error('GITHUB_TOKEN env var is required to build CLI docs')
  }
}

let octokit
const owner = 'npm'
const repo = 'cli'
const opts = {owner, repo}

const getCurrentSha = async branch => {
  if (!octokit) {
    const {Octokit} = await import('@octokit/rest')
    octokit = new Octokit({auth: process.env.GITHUB_TOKEN})
  }
  const {data} = await octokit.repos.getBranch({
    ...opts,
    branch,
  })
  return data.commit.sha
}

const getFile = async ({sha, ref, path}) => {
  if (!octokit) {
    const {Octokit} = await import('@octokit/rest')
    octokit = new Octokit({auth: process.env.GITHUB_TOKEN})
  }
  const {data} = await (sha
    ? octokit.git.getBlob({
        ...opts,
        file_sha: sha,
      })
    : octokit.repos.getContent({
        ...opts,
        ref,
        path: path.split(sep).join(posix.sep),
      }))
  return Buffer.from(data.content, data.encoding)
}

const pathExists = async (ref, path) => {
  if (!octokit) {
    const {Octokit} = await import('@octokit/rest')
    octokit = new Octokit({auth: process.env.GITHUB_TOKEN})
  }
  try {
    await octokit.repos.getContent({
      ...opts,
      ref,
      path: path.split(sep).join(posix.sep),
    })
    return path
  } catch (err) {
    /* istanbul ignore next */
    if (!err.status === 404) {
      throw err
    }
  }
  return null
}

module.exports = {
  getFile,
  pathExists,
  getCurrentSha,
  nwo: `${owner}/${repo}`,
}
