const t = require('tap')
const { resolve, join } = require('path')
const fs = require('fs/promises')

const build = require('../lib/build')
const releases = require('../releases.json')
const navPath = resolve(
  __dirname,
  '..',
  '..',
  'src',
  'theme',
  'nav.yml'
)

t.test('builds successfully', async (t) => {
  const testdir = t.testdir({
    'releases.json': JSON.stringify(releases),
    'nav.yml': await fs.readFile(navPath, 'utf-8'),
    content: {},
  })

  await build({
    force: true,
    prerelease: true,
    contentPath: join(testdir, 'content'),
    releasesPath: join(testdir, 'releases.json'),
    navPath: join(testdir, 'nav.yml'),
  })
})

t.test('no force', async (t) => {
  const testdir = t.testdir({
    'releases.json': JSON.stringify(releases),
    'nav.yml': '- title: cli\n  url: /cli',
    content: {},
  })

  await build({
    contentPath: join(testdir, 'content'),
    releasesPath: join(testdir, 'releases.json'),
    navPath: join(testdir, 'nav.yml'),
  })
})
