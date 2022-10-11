const { posix, join, sep } = require('path')
const fs = require('fs').promises
const yaml = require('yaml')
const extractRelease = require('./extract')
const log = require('./log')

const DOCS_PATH = 'cli'

const updateNav = async (updates, { nav, path }) => {
  const variants = updates.map((release) => ({
    title: release.title,
    shortName: release.id,
    url: release.url,
    default: release.default,
    children: release.nav,
  }))

  const index = nav.contents.items
    .findIndex(n => posix.basename(n.get('url')) === DOCS_PATH)
  const key = [index, 'variants']
  const current = nav.getIn(key)

  if (!current) {
    nav.setIn(key, nav.createNode(variants))
  } else {
    for (const variant of variants) {
      const vIndex = current.items.findIndex((n) => n.get('url') === variant.url)
      if (vIndex === -1) {
        nav.addIn(key, nav.createNode(variant))
      } else {
        nav.setIn([...key, vIndex], nav.createNode(variant))
      }
    }
  }

  return fs.writeFile(path, nav.toString(), 'utf-8')
}

const updateReleases = async (updates, path) => {
  const data = JSON.parse(await fs.readFile(path, 'utf-8'))

  for (const release of updates) {
    const index = data.findIndex((item) => item.id === release.id)
    data[index].resolved = release.resolved
  }

  return fs.writeFile(path, JSON.stringify(data, null, 2) + '\n', 'utf-8')
}

const main = async ({
  loglevel,
  force,
  releasesPath,
  navPath,
  contentPath,
  prerelease,
}) => {
  /* istanbul ignore next */
  if (loglevel) {
    log.on(loglevel)
  }

  // convert paths to whatever platform we are on so they
  // can be used to write files later
  const defaultBuiltDir = join('docs', 'content')

  const releases = require(releasesPath).map((release) => ({
    ...release,
    // dir of the built docs that should be copied
    built: defaultBuiltDir,
    // dir of the source for the docs that should
    // be linked to for editing on github
    src: release.src?.split(posix.sep).join(sep) || defaultBuiltDir,
    url: `/${DOCS_PATH}/${release.id}`,
    urlPrefix: DOCS_PATH,
    urlPrefixes: [DOCS_PATH, `${DOCS_PATH}-documentation`],
  }))

  const baseNav = await fs.readFile(navPath, 'utf-8')

  const updates = await Promise.all(
    releases.map((r) =>
      extractRelease(r, { contentPath, baseNav: yaml.parse(baseNav), force, prerelease })
    )
  ).then((r) => r.filter(Boolean))

  await Promise.all([
    updateNav(updates, { nav: yaml.parseDocument(baseNav), path: navPath }),
    updateReleases(updates, releasesPath),
  ])
}

module.exports = main
