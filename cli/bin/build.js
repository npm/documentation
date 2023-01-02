const { resolve, relative, join } = require('path')
const { spawnSync } = require('child_process')
const build = require('../lib/build.js')
const { nwo } = require('../lib/gh')

// check only build with the current versions instead of checking the registry
// and also fails if any changes are detected. this is used in CI to make sure
// edits to the CLI content are made in the CLI repo
const checkOnly = process.argv.includes('--check-only')

const ROOT = resolve(__dirname, '../..')
const contentPath = join(ROOT, 'content/cli')
const navPath = join(ROOT, 'src/theme/nav.yml')

const checkContent = () => {
  const status = spawnSync('git', ['status', '--porcelain', contentPath], { encoding: 'utf-8' })
  if (status.stdout) {
    const msg = [
      `The following untracked changes to ${relative(process.cwd(), contentPath)} were found:`,
      status.stdout,
      `These files are generated and changes might need to be made in the ${nwo} repository.`,
    ]
    throw new Error(msg.join('\n'))
  }
}

build({
  releases: require('../releases.json'),
  loglevel: process.argv.includes('--debug') || process.env.CI ? 'verbose' : 'info',
  prerelease: false,
  useCurrent: checkOnly,
  contentPath,
  navPath,
})
  .then(() => {
    if (checkOnly) {
      checkContent()
    }
    return console.log('DONE')
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
