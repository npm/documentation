const { posix } = require('path')
const fs = require('fs').promises
const yaml = require('yaml')
const semver = require('semver')
const pacote = require('pacote')
const gh = require('./gh')
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

  const rawReleases = require(releasesPath)

  const releaseManifests = await Promise.all(rawReleases.map(async release => {
    const manifest = await pacote.manifest(`${gh.owner}@${release.spec}`, {
      preferOnline: true,
    })
    // the default release is always controlled by the latest dist-tag
    release.default = release.spec === 'latest'
    release.manifest = manifest
    release.version = manifest.version
    const sVersion = semver.parse(release.version)
    release.semver = sVersion
    release.prerelease = sVersion.prerelease.length > 0
    return release
  }))

  const latestRelease = releaseManifests.find(r => r.spec === 'latest')

  if (!latestRelease) {
    throw new Error(`One of the CLI releases must have \`spec: 'latest'\``)
  }

  const releases = releaseManifests.map((release) => {
    const type = release.default ? 'Latest Release'
      : release.prerelease ? 'Prerelease'
      : semver.gt(release.version, latestRelease.version) ? 'Current Release'
      : 'Legacy Release'

    return {
      ...release,
      title: `Version ${release.version} (${type})`,
      url: `/${DOCS_PATH}/${release.id}`,
      urlPrefix: DOCS_PATH,
      urlPrefixes: [DOCS_PATH, `${DOCS_PATH}-documentation`],
    }
  })

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
