const {test} = require('node:test')
const assert = require('node:assert/strict')
const fm = require('front-matter')

// Stub `cli/lib/gh.js` in require.cache before requiring transform — gh.js
// otherwise tries to read process.env.GITHUB_TOKEN / shell out to `gh auth
// token` at load time.
const ghPath = require.resolve('../lib/gh')
require.cache[ghPath] = {
  id: ghPath,
  filename: ghPath,
  exports: {nwo: 'npm/cli'},
  loaded: true,
  children: [],
  paths: [],
}

const Transform = require('../lib/transform')

const transform = ({id, path}) => {
  const transformed = Transform.sync('---\n---\n', {
    release: {
      id: id,
      default: id === 'v8',
      src: 'docs/content',
      url: `/cli/${id}/${path}`,
      urlPrefixes: ['/cli'],
    },
    path,
  })
  return fm(transformed).attributes
}

test('v6 default page', () => {
  const v6 = transform({id: 'v6', path: 'configuring-npm/package-locks'})
  const v7 = transform({id: 'v7', path: 'configuring-npm/package-locks'})

  assert.deepEqual(v6.redirect_from, [
    '/cli/configuring-npm/package-locks',
    '/cli/files/package-locks',
    '/cli/v6/configuring-npm/package-locks',
    '/cli/v6/files/package-locks',
    '/configuring-npm/package-locks',
    '/files/package-locks',
  ])
  assert.deepEqual(v7.redirect_from, ['/cli/v7/configuring-npm/package-locks', '/cli/v7/files/package-locks'])
})

test('command', () => {
  const v7 = transform({id: 'v7', path: 'commands/npm-bin'})
  const v8 = transform({id: 'v8', path: 'commands/npm-bin'})

  assert.deepEqual(v7.redirect_from, [
    '/cli/v7/bin',
    '/cli/v7/cli-commands/bin',
    '/cli/v7/cli-commands/npm-bin',
    '/cli/v7/commands/bin',
    '/cli/v7/commands/npm-bin',
    '/cli/v7/npm-bin',
  ])
  assert.deepEqual(v8.redirect_from, [
    '/cli-commands/bin',
    '/cli-commands/npm-bin',
    '/cli/bin',
    '/cli/cli-commands/bin',
    '/cli/cli-commands/npm-bin',
    '/cli/commands/bin',
    '/cli/commands/npm-bin',
    '/cli/npm-bin',
    '/cli/v8/bin',
    '/cli/v8/cli-commands/bin',
    '/cli/v8/cli-commands/npm-bin',
    '/cli/v8/commands/bin',
    '/cli/v8/commands/npm-bin',
    '/cli/v8/npm-bin',
    '/commands/bin',
    '/commands/npm-bin',
  ])
})

test('package-json files', () => {
  const v7 = transform({id: 'v7', path: 'configuring-npm/package-json'})
  const v8 = transform({id: 'v8', path: 'configuring-npm/package-json'})

  assert.deepEqual(v7.redirect_from, [
    '/cli/v7/configuring-npm/package-json',
    '/cli/v7/configuring-npm/package.json',
    '/cli/v7/files/package-json',
    '/cli/v7/files/package.json',
  ])
  assert.deepEqual(v8.redirect_from, [
    '/cli/configuring-npm/package-json',
    '/cli/configuring-npm/package.json',
    '/cli/files/package-json',
    '/cli/files/package.json',
    '/cli/v8/configuring-npm/package-json',
    '/cli/v8/configuring-npm/package.json',
    '/cli/v8/files/package-json',
    '/cli/v8/files/package.json',
    '/configuring-npm/package-json',
    '/configuring-npm/package.json',
    '/files/package-json',
    '/files/package.json',
  ])
})

test('registry signatures', () => {
  assert.deepEqual(
    transform({
      id: 'v8',
      path: 'about-pgp-signatures-for-packages-in-the-public-registry',
    }).redirect_from,
    [
      '/about-registry-signatures',
      '/cli/about-pgp-signatures-for-packages-in-the-public-registry',
      '/cli/v8/about-pgp-signatures-for-packages-in-the-public-registry',
    ],
  )
  assert.deepEqual(
    transform({
      id: 'v8',
      path: 'verifying-the-pgp-signature-for-a-package-from-the-npm-public-registry',
    }).redirect_from,
    [
      '/cli/v8/verifying-the-pgp-signature-for-a-package-from-the-npm-public-registry',
      '/cli/verifying-the-pgp-signature-for-a-package-from-the-npm-public-registry',
      '/verifying-registry-signatures',
    ],
  )
})
