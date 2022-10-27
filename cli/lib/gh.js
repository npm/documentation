const { Octokit } = require('@octokit/rest')
const { posix, sep } = require('path')

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

const getLatestSha = async (ref) => {
  const {
    data: [commit],
  } = await octokit.repos.listCommits({
    ...opts,
    sha: ref,
    per_page: 1,
  })
  return commit.sha
}

const getAllFiles = async (sha) => {
  const {
    data: { tree },
  } = await octokit.git.getTree({
    ...opts,
    tree_sha: sha,
    recursive: true,
  })

  return tree
    .filter((f) => f.type === 'blob')
    .map((f) => ({
      ...f,
      // return file paths that can be used on the
      // system to write files
      path: f.path.split(posix.sep).join(sep),
    }))
}

const getDirectory = async (ref, dir) => {
  const { data } = await octokit.repos.getContent({
    ...opts,
    ref,
    path: dir.split(sep).join(posix.sep),
  })
  return data
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
  octokit,
  getFile,
  getLatestSha,
  getAllFiles,
  getDirectory,
  pathExists,
  owner,
  repo,
  nwo: `${owner}/${repo}`,
}
