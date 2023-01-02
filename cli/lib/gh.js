const { Octokit } = require('@octokit/rest')
const { posix, sep } = require('path')

if (!process.env.GITHUB_TOKEN) {
  throw new Error('GITHUB_TOKEN env var is required to build CLI docs')
}

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
const owner = 'npm'
const repo = 'cli'
const opts = { owner, repo }

const getFile = async ({ sha, ref, path }) => {
  const { data } = await (sha
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
  nwo: `${owner}/${repo}`,
}
