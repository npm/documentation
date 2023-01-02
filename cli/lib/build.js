const { posix } = require('path')
const fs = require('fs').promises
const yaml = require('yaml')
const semver = require('semver')
const pacote = require('pacote')
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

const getCurrentVersions = (nav) => {
  // the only place the current versions are stored is in the nav
  const currentSections = nav.find(s => s.url === `/${DOCS_PATH}`).variants

  const currentVersions = currentSections.map((v) => {
    const version = v.title?.match(/^Version\s(.*?)\s/)[1]
    return version
  }).sort(semver.compare)

  return {
    versions: currentVersions,
    latest: currentVersions[currentVersions.length - 1],
  }
}

const main = async ({
  loglevel,
  releases: rawReleases,
  useCurrent,
  navPath,
  contentPath,
  prerelease,
}) => {
  /* istanbul ignore next */
  if (loglevel) {
    log.on(loglevel)
  }

  const baseNav = await fs.readFile(navPath, 'utf-8')
  const navData = yaml.parse(baseNav)
  const navDoc = yaml.parseDocument(baseNav)

  const pack = useCurrent
    ? getCurrentVersions(navData)
    : await pacote.packument('npm', { preferOnline: true }).then(p => ({
      versions: Object.keys(p.versions),
      latest: p['dist-tags'].latest,
    }))

  const releaseVersions = rawReleases.map(release => {
    const major = Number(release.id.replace(/^v/, ''))
    const range = `>=${major}.0.0-a <${major + 1}.0.0` // include all prereleases
    const version = semver.parse(semver.maxSatisfying(pack.versions, range))

    return {
      ...release,
      version: version.toString(),
      // the default release is always controlled by the latest dist-tag
      default: semver.eq(version, pack.latest),
      prerelease: version.prerelease.length > 0,
    }
  })

  const latestRelease = releaseVersions.find(r => r.default)

  const releases = releaseVersions.map((release) => {
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

  const updates = await Promise.all(
    releases.map((r) =>
      extractRelease(r, { contentPath, baseNav: navData, prerelease })
    )
  ).then((r) => r.filter(Boolean))

  await updateNav(updates, { nav: navDoc, path: navPath })
}

module.exports = main
