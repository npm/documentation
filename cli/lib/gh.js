const {posix, sep} = require('node:path')

if (!process.env.GITHUB_TOKEN) {
  throw new Error('GITHUB_TOKEN env var is required to build CLI docs')
}

let octokit
const owner = 'npm'
const repo = 'cli'
const opts = {owner, repo}

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
  nwo: `${owner}/${repo}`,
}
