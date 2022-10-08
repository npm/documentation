const { resolve } = require('path')
const build = require('../lib/build.js')

build({
  loglevel: process.argv.includes('--debug') || process.env.CI ? 'verbose' : 'info',
  force: process.argv.includes('--force'),
  prerelease: false,
  contentPath: resolve(__dirname, '..', '..', 'content', 'cli'),
  releasesPath: resolve(__dirname, '..', 'releases.json'),
  navPath: resolve(
    __dirname,
    '..',
    '..',
    'src',
    'gatsby-theme-doctornpm',
    'nav.yml'
  ),
})
  .then(() => console.log('DONE'))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
