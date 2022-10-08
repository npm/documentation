// TODO: many of these redirects can be simplified now that
// they are looked up using minimatch.
module.exports = Object.entries({
  // indexes
  index: ['/cli', '/cli-documentation'],
  '*/index': ({ section }) => [`/${section}`, `/cli/${section}`],
  // commands
  'commands/!(index|npx)': ({ section, page }) => {
    const command = page.replace(/^npm-/, '')
    return [
      `/cli/${command}`,
      `/cli/${command}.html`,
      `/cli/${section}/${command}`,
      `/cli-${section}/${page}`,
      `/cli-${section}/${command}`,
      `/cli-${section}/${command}.html`,
    ]
  },
  'commands/index': [
    '/cli-documentation/cli',
    '/cli-documentation/cli-commands',
  ],
  'commands/npm-access': ['/cli-documentation/access'],
  'commands/npm-install': ['/cli-documentation/install'],
  // configuring npm
  'configuring-npm/!(index)': ({ section, page }) => [
    `/${section}/${page}`,
    `/${section}/${page}.html`,
  ],
  'configuring-npm/index': [
    '/cli-documentation/configuring-npm',
    '/cli-documentation/files',
  ],
  'configuring-npm/folders': ['/files/folders', '/files/folders.html'],
  'configuring-npm/npmrc': [
    '/cli-documentation/files/npmrc',
    '/files/npmrc',
    '/files/npmrc.html',
  ],
  'configuring-npm/package-json': [
    '/configuring-npm/package.json',
    '/creating-a-packge-json-file',
    '/files/package.json',
    '/files/package.json.html',
  ],
  'configuring-npm/package-lock-json': [
    '/files/package-lock.json',
    '/files/package-lock.json.html',
  ],
  'configuring-npm/package-locks': [
    '/files/package-locks',
    '/files/package-locks.html',
  ],
  'configuring-npm/shrinkwrap-json': [
    '/files/shrinkwrap.json',
    '/files/shrinkwrap.json.html',
  ],
  // using npm
  'using-npm/!(index)': ({ section, page }) => [
    `/${section}/${page}`,
    `/${section}/${page}.html`,
    `/misc/${page}`,
    `/misc/${page}.html`,
  ],
  'using-npm/index': [
    '/cli-documentation/misc',
    '/cli-documentation/using-npm',
    '/misc/index.html',
  ],
  'using-npm/removal': ['/misc/removing-npm', '/misc/removing-npm.html'],
  'using-npm/scope': ['/using-npm/npm-scope'],
})
