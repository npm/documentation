const t = require('tap')
const { resolve, join, posix } = require('path')
const fs = require('fs/promises')
const pacote = require('pacote')
const yaml = require('yaml')
const semver = require('semver')

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
  const rawNav = await fs.readFile(navPath, 'utf-8')
  const nav = yaml.parse(rawNav)

  const testdir = t.testdir({
    'nav.yml': rawNav,
    content: {},
    ...testdirOpts,
  })

  if (!packument.versions) {
    packument.versions = releases.map(r => {
      // real tarball requests are made for these verions
      // so by default they all need to exist
      switch (r.id.slice(1)) {
        case '6':
          return '6.14.18'
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

  const navSection = (ref) => {
    const id = ref === 'latest' ? `v${semver.major(packument.latest)}` : posix.basename(ref)
    const { variants } = nav.find(c => c.url === '/cli')
    const { children } = variants.find(v => posix.basename(v.url) === id)
    return yaml.stringify(children).replace(new RegExp(`/cli/${id}/`, 'g'), '/')
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
    '../lib/gh.js': {
      getFile: async ({ ref }) => navSection(ref),
      pathExists: async (ref, p) => {
        if (ref.includes('v6') && p.includes('docs/lib/content')) {
          return null
        }
        return p
      },
      nwo: `npm/cli`,
    },
  })

  return {
    testdir,
    build: (opts) => build({
      releases,
      contentPath: join(testdir, 'content'),
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
    packument: { versions: ['6.14.18', '7.24.2', '8.19.3', '9.0.0-pre.2'], latest: '8.19.3' },
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

t.test('can skip fetching latest', async (t) => {
  const releases = getReleases()
  const { build } = await mockBuild({
    releases,
  })

  await build({ useCurrent: true })
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
