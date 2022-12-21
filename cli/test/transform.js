const t = require('tap')
const fm = require('front-matter')

const transform = ({ id, path }) => {
  const Transform = t.mock('../lib/transform', {
    '../lib/gh.js': { nwo: 'npm/cli' },
  })
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

t.test('v6 default page', async t => {
  const v6 = transform({ id: 'v6', path: 'configuring-npm/package-locks' })
  const v7 = transform({ id: 'v7', path: 'configuring-npm/package-locks' })

  t.strictSame(v6.redirect_from, [
    '/cli/configuring-npm/package-locks',
    '/cli/files/package-locks',
    '/cli/v6/configuring-npm/package-locks',
    '/cli/v6/files/package-locks',
    '/configuring-npm/package-locks',
    '/files/package-locks',
  ])
  t.strictSame(v7.redirect_from, [
    '/cli/v7/configuring-npm/package-locks',
    '/cli/v7/files/package-locks',
  ])
})

t.test('command', async t => {
  const v7 = transform({ id: 'v7', path: 'commands/npm-bin' })
  const v8 = transform({ id: 'v8', path: 'commands/npm-bin' })

  t.strictSame(v7.redirect_from, [
    '/cli/v7/bin',
    '/cli/v7/cli-commands/bin',
    '/cli/v7/cli-commands/npm-bin',
    '/cli/v7/commands/bin',
    '/cli/v7/commands/npm-bin',
    '/cli/v7/npm-bin',
  ])
  t.strictSame(v8.redirect_from, [
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

t.test('package-json files', async t => {
  const v7 = transform({ id: 'v7', path: 'configuring-npm/package-json' })
  const v8 = transform({ id: 'v8', path: 'configuring-npm/package-json' })

  t.strictSame(v7.redirect_from, [
    '/cli/v7/configuring-npm/package-json',
    '/cli/v7/configuring-npm/package.json',
    '/cli/v7/files/package-json',
    '/cli/v7/files/package.json',
  ])
  t.strictSame(v8.redirect_from, [
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
