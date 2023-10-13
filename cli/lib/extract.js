const pacote = require('pacote')
const tar = require('tar')
const { join, sep, dirname, posix } = require('path')
const fs = require('fs/promises')
const yaml = require('yaml')
const Transform = require('./transform')
const gh = require('./gh')
const log = require('./log')

const unpackTarball = async ({ release, cwd, dir }) => {
  const strip = 1
  const result = []
  const dirParts = dir.split(sep)

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

  await pacote.tarball.stream(`npm@${release.version}`, (stream) =>
    new Promise((res, rej) => {
      stream.on('end', res)
      stream.on('error', rej)
      stream.pipe(extract())
    }))

  return result
}

const getNav = async ({ path, release }) => {
  const nav = await gh.getFile({ ref: release.branch, path })

  const rewriteUrls = (nodes) =>
    nodes?.map((n) => {
      n.url = release.url + n.url
      n.children = rewriteUrls(n.children)
      return n
    })

  return {
    path,
    children: rewriteUrls(yaml.parse(nav.toString())),
  }
}

const writeChangelog = async ({ release, nav, cwd, srcPath, contentPath }) => {
  const title = 'Changelog'
  const changelog = await gh.getFile({ ref: release.branch, path: srcPath })

  await fs.writeFile(
    join(cwd, contentPath + '.md'),
    // mdx needs `>` escaped
    Transform.sync(changelog.toString().replace(/([^\\])>/g, '$1\\>'), {
      release,
      path: contentPath,
      frontmatter: {
        github_path: srcPath,
        title,
      },
    }),
    'utf-8'
  )

  nav.children[nav.children.length - 1].children.push({
    title,
    url: `${release.url}/${contentPath}`,
    description: 'Changelog notes for each version',
  })
}

const unpackRelease = async (
  release,
  { contentPath, baseNav, prerelease = false }
) => {
  if (release.prerelease && !prerelease) {
    log.info(`Skipping ${release.id} due to prerelease ${release.version}`)
    return
  }

  log.info(release.id, release)

  const cwd = join(contentPath, release.id)

  const builtPath = join('docs', 'content')
  const srcPath = join('docs', 'lib', 'content')

  // this is the src dir for the docs that we link to for the edit links
  release.src = await gh.pathExists(release.branch, srcPath)
    ?? await gh.pathExists(release.branch, builtPath)

  /* istanbul ignore next */
  if (!release.src) {
    throw new Error(`Could not find source dir for ${release.id}`)
  }

  const nav = await getNav({
    release,
    // the nav file can also be in a few different places
    path: await gh.pathExists(release.branch, join(srcPath, 'nav.yml'))
      ?? await gh.pathExists(release.branch, join('docs', 'nav.yml')),
  })

  await fs
    .rm(cwd, { force: true, recursive: true })
    .then(() => fs.mkdir(cwd, { recursive: true }))

  const files = await unpackTarball({
    release,
    cwd,
    dir: builtPath,
  })

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
            shortName: navSection.shortName,
          },
        }),
        'utf-8'
      )

      return path
    })
  )

  await writeChangelog({
    release,
    nav,
    cwd,
    srcPath: 'CHANGELOG.md',
    contentPath: posix.join('using-npm', 'changelog'),
  })

  log.info(release.id, `${[...files, ...indexes].length} files`)

  return {
    ...release,
    nav: nav.children,
  }
}

module.exports = unpackRelease
