const pacote = require('pacote')
const tar = require('tar')
const {join, sep, dirname, posix} = require('path')
const fs = require('fs/promises')
const yaml = require('yaml')
const Transform = require('./transform')
const gh = require('./gh')
const log = require('./log')

const whackAMoleReplace = (s, replacements) => {
  // some known content in changelogs that is problematic for mdx this is
  // a bit of whack-a-mole but is necessary since markdown in the CLI is
  // different from the mdx v2 we parse for the docs site
  for (const rep of replacements) {
    s = s.replace(rep, rep.replace(/([<>{}])/g, '\\$1'))
  }
  return s
}

const unpackTarball = async ({release, cwd, dir}) => {
  const strip = 1
  const result = []
  const dirParts = dir.split(sep)

  log.verbose('tarball', release.resolved, {cwd, dir})

  const format = s => {
    // a few specific replacements that cause problems for mdx
    return (
      whackAMoleReplace(s, [
        '{npm-version} node/{node-version} {platform} {arch} workspaces/{workspaces} {ci}',
        'node/{process.version} {process.platform} {process.arch}',
        'Default: {prefix}/etc/npmrc',
      ])
        // we cant remove all emails since all except this one are in code blocks
        .replace(/(:: )<(i@izs\.me)>/g, '$1[$2](mailto:$2)')
        // the v6 version of the funding page has json not inside a code
        .replace(/(:\n\n)(\s{4}"funding": {)/g, '$1```json\n$2')
        .replace(/^(\s{4}]$)(\n\n)/gm, '$1\n```$2')
        // anchor links to markdown. this regex does need to match spaces and newlines since the source markdown
        // already has some links where attributes are separated by newlines
        .replace(
          /<a[\s\n]href="(.*?)"(?:[\s\n]target="_blank")?(?:[\s\n]rel="[a-z\s]+")?>(.*?)<\/a>/g,
          (_, href, text) => `[${href}](${text.trim()})`,
        )
    )
  }

  const extract = () =>
    tar.x({
      cwd,
      strip: dirParts.length + strip,
      transform: ({path}) => {
        result.push(path)
        log.verbose(release.id, path)
        return new Transform({
          path,
          release,
          format,
        })
      },
      filter: path => {
        const pathParts = path.split(posix.sep)
        const prefixParts = pathParts.slice(strip, dirParts.length + strip)
        return join(...prefixParts) === join(...dirParts)
      },
    })

  await pacote.tarball.stream(
    `npm@${release.version}`,
    stream =>
      new Promise((res, rej) => {
        stream.on('end', res)
        stream.on('error', rej)
        stream.pipe(extract())
      }),
  )

  await Promise.all(result.map(f => fs.rename(join(cwd, f), join(cwd, f.replace('.md', '.mdx')))))

  return result
}

const getNav = async ({path, release}) => {
  const nav = await gh.getFile({ref: release.branch, path})

  const rewriteUrls = nodes =>
    nodes?.map(n => {
      n.url = release.url + n.url
      n.children = rewriteUrls(n.children)
      return n
    })

  return {
    path,
    children: rewriteUrls(yaml.parse(nav.toString())),
  }
}

const writeChangelog = async ({release, nav, cwd, srcPath, contentPath}) => {
  const title = 'Changelog'
  const changelog = await gh.getFile({ref: release.branch, path: srcPath})

  await fs.writeFile(
    join(cwd, contentPath + '.mdx'),
    Transform.sync(changelog, {
      release,
      path: contentPath,
      frontmatter: {
        github_path: srcPath,
        title,
      },
      format: s => {
        // some known content in changelogs that is problematic for mdx this is
        // a bit of whack-a-mole but is necessary since markdown in the CLI is
        // different from the mdx v2 we parse for the docs site
        return (
          whackAMoleReplace(s, [
            ' support for node <=16.13 ',
            '<->',
            ' npm install <folder> ',
            ' --replace-registry-host=<npmjs|always|never> ',
            'bundledDependencies -> bundleDependencies ',
            ' bump knownBroken to <12.5.0 ',
          ])
            // remove changelog h1 so it doesnt double render the title
            .replace(/^#\s+Changelog\s+$\n/gm, '')
        )
      },
    }),
    'utf-8',
  )

  nav.children[nav.children.length - 1].children.push({
    title,
    url: `${release.url}/${contentPath}`,
    description: 'Changelog notes for each version',
  })
}

const unpackRelease = async (release, {contentPath, baseNav, prerelease = false}) => {
  if (release.prerelease && !prerelease) {
    log.info(`Skipping ${release.id} due to prerelease ${release.version}`)
    return
  }

  log.info(release.id, release)

  const cwd = join(contentPath, release.id)

  const builtPath = join('docs', 'content')
  const srcPath = join('docs', 'lib', 'content')

  // this is the src dir for the docs that we link to for the edit links
  release.src = (await gh.pathExists(release.branch, srcPath)) ?? (await gh.pathExists(release.branch, builtPath))

  /* istanbul ignore next */
  if (!release.src) {
    throw new Error(`Could not find source dir for ${release.id}`)
  }

  const nav = await getNav({
    release,
    // the nav file can also be in a few different places
    path:
      (await gh.pathExists(release.branch, join(srcPath, 'nav.yml'))) ??
      (await gh.pathExists(release.branch, join('docs', 'nav.yml'))),
  })

  await fs.rm(cwd, {force: true, recursive: true}).then(() => fs.mkdir(cwd, {recursive: true}))

  const files = await unpackTarball({
    release,
    cwd,
    dir: builtPath,
  })

  const dirs = ['', ...new Set(files.map(f => dirname(f)))]

  // The docs in the cli contains all the content pagess and the nav
  // but no index pages. So this builts empty index pages for each
  // directory with the correct frontmatter. The context is an mdx
  // component which will end up showing the nav for this directory.
  const indexes = await Promise.all(
    dirs.map(async dir => {
      const path = join(dir, 'index.mdx')
      const navSection = dir
        ? nav.children.find(c => posix.basename(c.url) === dir)
        : baseNav.find(c => posix.basename(c.url) === release.urlPrefix)

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
        'utf-8',
      )

      return path
    }),
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
