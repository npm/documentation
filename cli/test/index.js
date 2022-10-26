const t = require('tap')
const { resolve, join } = require('path')
const fs = require('fs/promises')
const pacote = require('pacote')

const navPath = resolve(
  __dirname,
  '..',
  '..',
  'src',
  'theme',
  'nav.yml'
)

const getReleases = () => {
  return JSON.parse(JSON.stringify(require('../releases.json')))
}

const mockBuild = async ({ releases, testdir: testdirOpts }) => {
  const testdir = t.testdir({
    'releases.json': JSON.stringify(releases),
    'nav.yml': await fs.readFile(navPath, 'utf-8'),
    content: {},
    ...testdirOpts,
  })

  const build = t.mock('../lib/build', {
    pacote: {
      ...pacote,
      manifest: async (spec) => {
        let version = spec.split('@')[1]
        const release = releases.find(r => r.spec === version)

        if (version.match(/^\^\d+$/)) {
          version = version.slice(1) + '.0.0'
        } else if (version === 'latest') {
          version = release.id.slice(1) + '.0.0'
        } else if (version.startsWith('next-')) {
          version = version.replace('next-', '') + '.0.0-pre.4'
        }

        return {
          version,
          _resolved: release.resolved,
          _from: spec,
        }
      },
    },
  })

  return (opts) => build({
    contentPath: join(testdir, 'content'),
    releasesPath: join(testdir, 'releases.json'),
    navPath: join(testdir, 'nav.yml'),
    ...opts,
  })
}

t.test('builds successfully', async (t) => {
  const releases = getReleases()
  const build = await mockBuild({ releases })

  await build({
    force: true,
    prerelease: true,
  })
})

t.test('no force', async (t) => {
  const releases = getReleases()
  const build = await mockBuild({
    releases,
    testdir: {
      'nav.yml': '- title: cli\n  url: /cli',
    },
  })

  await build()
})

t.test('no default release', async (t) => {
  const releases = getReleases().filter(r => r.spec !== 'latest')
  const build = await mockBuild({
    releases,
    testdir: {
      'nav.yml': '- title: cli\n  url: /cli',
    },
  })

  await t.rejects(() => build())
})

t.test('earlier release is latest', async (t) => {
  const releases = getReleases()
  releases[1].spec = 'latest'
  releases[2].spec = '^8'

  const build = await mockBuild({
    releases,
    testdir: {
      'nav.yml': '- title: cli\n  url: /cli',
    },
  })

  await build()
})

t.test('add variant to nav', async (t) => {
  const releases = getReleases()
  releases[1].spec = 'latest'
  releases[2].spec = '^8'

  const build = await mockBuild({
    releases,
    testdir: {
      'nav.yml': '- title: cli\n  url: /cli\n  variants:\n    - url: /cli/v0',
    },
  })

  await build({ force: true })
})
