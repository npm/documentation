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

const getReleases = () => [
  {
    id: 'v6',
    branch: 'release/v6',
    useBranch: true,
  },
  {
    id: 'v7',
    branch: 'release/v7',
  },
  {
    id: 'v8',
    branch: 'release/v8',
  },
  {
    id: 'v9',
    branch: 'latest',
  },
]

const mockBuild = async ({ releases, packument = {}, testdir: testdirOpts }) => {
  const testdir = t.testdir({
    'releases.json': JSON.stringify(releases),
    'nav.yml': await fs.readFile(navPath, 'utf-8'),
    content: {},
    ...testdirOpts,
  })

  if (!packument.versions) {
    packument.versions = releases.map(r => {
      // real tarball requests are made for these verions
      // so by default they all need to exist
      switch (r.id.slice(1)) {
        case '6':
          return '6.14.17'
        case '7':
          return '7.24.2'
        case '8':
          return '8.19.3'
        case '9':
          return '9.0.0'
      }
    })
  }

  if (!packument.latest) {
    packument.latest = packument.versions[packument.versions.length - 1]
  }

  const build = t.mock('../lib/build', {
    pacote: {
      ...pacote,
      packument: async () => {
        return {
          'dist-tags': {
            latest: packument.latest,
          },
          versions: packument.versions.reduce((acc, v) => {
            acc[v] = null
            return acc
          }, {}),
        }
      },
    },
  })

  return {
    testdir,
    build: (opts) => build({
      contentPath: join(testdir, 'content'),
      releasesPath: join(testdir, 'releases.json'),
      navPath: join(testdir, 'nav.yml'),
      ...opts,
    }),
  }
}

t.test('basic', async (t) => {
  const releases = getReleases()
  const { build, testdir } = await mockBuild({
    releases,
    testdir: {
      'nav.yml': '- title: cli\n  url: /cli',
    },
  })

  await build()
  t.strictSame(await fs.readdir(join(testdir, 'content')), releases.map(r => r.id))
})

t.test('no default release', async (t) => {
  const releases = getReleases()
  const { build } = await mockBuild({
    releases,
    packument: { latest: '9999.99999.99999' },
  })

  await t.rejects(() => build())
})

t.test('prereleases', async (t) => {
  const releases = getReleases()
  const { build, testdir } = await mockBuild({
    releases,
    packument: { versions: ['6.14.17', '7.24.2', '8.19.3', '9.0.0-pre.2'], latest: '8.19.3' },
  })

  await build({ prerelease: false })
  const expectedReleases = releases.map(r => r.id).filter(r => r !== 'v9')
  t.strictSame(await fs.readdir(join(testdir, 'content')), expectedReleases)

  await build({ prerelease: true })
  t.strictSame(await fs.readdir(join(testdir, 'content')), releases.map(r => r.id))
})

t.test('earlier release is latest', async (t) => {
  const releases = getReleases()
  const { build } = await mockBuild({
    releases,
    packument: { latest: '8.19.3' },
  })

  await build()
})

t.test('add variant to nav', async (t) => {
  const releases = getReleases()
  const { build } = await mockBuild({
    releases,
    testdir: {
      'nav.yml': '- title: cli\n  url: /cli\n  variants:\n    - url: /cli/v0',
    },
  })

  await build()
})
