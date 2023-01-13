module.exports = {
  rootRepo: {
    add: {
      '.github/workflows/ci.yml': 'ci.yml',
      '.github/workflows/publish.yml': 'publish.yml',
      '.github/CODEOWNERS': 'CODEOWNERS',
      '.github/ISSUE_TEMPLATE/bug.yml': false,
      '.commitlintrc.js': false,
      '.github/dependabot.yml': false,
      '.github/workflows/post-dependabot.yml': false,
    },
  },
  rootModule: {
    add: {
      'CODE_OF_CONDUCT.md': false,
    },
  },
  workspaceRepo: {
    add: {
      '.github/dependabot.yml': false,
      '.github/workflows/post-dependabot.yml': false,
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
