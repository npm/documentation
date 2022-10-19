const pacote = require('pacote')
const tar = require('tar')
const { join, sep, dirname, posix } = require('path')
const fs = require('fs/promises')
const yaml = require('yaml')
const Transform = require('./transform')
const gh = require('./gh')
const log = require('./log')

const unpackTarball = async ({ release, cwd, dir: dirParts }) => {
  const strip = 1
  const result = []
  const dir = join(...dirParts)

  log.verbose('tarball', release.resolved, { cwd, dir })

  const extract = () =>
    tar.x({
      cwd,
      strip: dirParts.length + strip,
      transform: ({ path }) => {
        result.push(path)
        log.verbose(release.id, path)
        return new Transform({
          path,
          release,
        })
      },
      filter: (path) => {
        const pathParts = path.split(posix.sep)
        const prefixParts = pathParts.slice(strip, dirParts.length + strip)
        return join(...prefixParts) === join(...dirParts)
      },
    })

  await pacote.tarball.stream(
    release.spec,
    (stream) =>
      new Promise((res, rej) => {
        stream.on('end', res)
        stream.on('error', rej)
        stream.pipe(extract())
      }),
    { resolved: release.resolved }
  )

  return result
}

const unpackTree = async ({ sha, cwd, release }) => {
  const files = await gh.getAllFiles(sha)

  // tar makes the directories for us when unpacking but we
  // need to to that manually here
  const dirs = [...new Set(files.map((f) => join(cwd, dirname(f.path))))]
  await Promise.all(dirs.map((d) => fs.mkdir(d, { recursive: true })))

  await Promise.all(
    files.map(async (file) => {
      const buffer = await gh.getFile({ sha: file.sha })
      return fs.writeFile(
        join(cwd, file.path),
        Transform.sync(buffer, {
          path: file.path,
          release,
        }),
        'utf-8'
      )
    })
  )

  return files.map((f) => f.path)
}

const getNav = async ({ contents, release }) => {
  // The nav file can be in two different places. We already grabbed the
  // the docs tree so first we check if there is a nav in there. If
  // there is not then we know it has to be in the content dir
  const navFile = contents.find((f) => f.name === 'nav.yml')
  /* istanbul ignore next */
  const navPath = navFile?.path || join(release.src, 'nav.yml')
  const nav = await gh.getFile({ ref: release.branch, path: navPath })

  const rewriteUrls = (nodes) =>
    nodes?.map((n) => {
      n.url = release.url + n.url
      n.children = rewriteUrls(n.children)
      return n
    })

  return {
    path: navPath,
    children: rewriteUrls(yaml.parse(nav.toString())),
  }
}

const resolveRelease = async (
  { resolved: current, ...release },
  { force, prerelease }
) => {
  if (release.prerelease && !prerelease) {
    log.info(`Skipping ${release.id} due to prerelease ${release.version}`)
    return null
  }

  // The legacy v6 release has updated docs in GitHub that were never
  // published. So in this case we skip cloning the repo with pacote
  // and get the latest commit on the branch. Later we will use the
  // GitHub api to fetch just the docs files we need since that is
  // much faster than cloning and preparing with pacote
  if (release.useBranch) {
    release.resolved = await gh.getLatestSha(release.branch)
  } else {
    release.resolved = release.manifest._resolved
    release.spec = release.manifest._from
  }

  log.info(release.id, release.version, release.resolved)

  if (release.resolved === current && !force) {
    log.info(`Skipping ${release.id} due to resolved fields matching`)
    return null
  }

  return release
}

const unpackRelease = async (
  _release,
  { contentPath, baseNav, force = false, prerelease = false }
) => {
  const release = await resolveRelease(_release, { force, prerelease })
  if (!release) {
    return
  }

  log.verbose(release)

  const cwd = join(contentPath, release.id)
  const builtDir = release.built.split(sep)

  const [docsRepo] = await Promise.all([
    gh.getDirectory(release.branch, builtDir[0]),
    fs
      .rm(cwd, { force: true, recursive: true })
      .then(() => fs.mkdir(cwd, { recursive: true })),
  ])

  // If we are using the release's GitHub ref, then we fetch
  // the tree of the doc directory's sha which has all the docs
  // we need in it. Note that this requires the docs to all be
  // built in source, which is true for v6 but not for v9 and later.
  const files = await (release.useBranch
    ? unpackTree({
      release,
      sha: docsRepo.find((f) => f.name === builtDir[1]).sha,
      cwd,
    })
    : unpackTarball({
      release,
      cwd,
      dir: builtDir,
    }))

  const nav = await getNav({ contents: docsRepo, release })
  const dirs = ['', ...new Set(files.map((f) => dirname(f)))]

  // The docs in the cli contains all the content pagess and the nav
  // but no index pages. So this builts empty index pages for each
  // directory with the correct frontmatter. The context is an mdx
  // component which will end up showing the nav for this directory.
  const indexes = await Promise.all(
    dirs.map(async (dir) => {
      const path = join(dir, 'index.mdx')
      const navSection = dir
        ? nav.children.find((c) => posix.basename(c.url) === dir)
        : baseNav.find((c) => posix.basename(c.url) === release.urlPrefix)

      await fs.writeFile(
        join(cwd, path),
        Transform.sync('<Index depth="1" />\n', {
          release,
          path,
          frontmatter: {
            github_path: nav.path,
            title: navSection.title,
            // TODO: leave off for now while reviewing diffs
            // shortName: navSection.shortName,
          },
        }),
        'utf-8'
      )

      return path
    })
  )

  log.info(release.id, `${[...files, ...indexes].length} files`)

  return {
    ...release,
    nav: nav.children,
  }
}

module.exports = unpackRelease
