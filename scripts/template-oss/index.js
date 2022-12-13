module.exports = {
  rootRepo: {
    add: {
      '.github/workflows/ci.yml': 'ci.yml',
      '.github/workflows/publish.yml': 'publish.yml',
      '.github/CODEOWNERS': 'CODEOWNERS',
      '.github/ISSUE_TEMPLATE/bug.yml': false,
      '.commitlintrc.js': false,
    },
  },
  rootModule: {
    add: {
      'CODE_OF_CONDUCT.md': false,
    },
  },
  ciVersions: 'latest',
  macCI: false,
  windowsCI: false,
  lockfile: true,
  allowPaths: [
    '/.reuse/',
    '/src/',
    '/static/',
    '/content/',
    '/LICENSE*',
    '/*.md',
    '/gatsby-*.js',
  ],
}
