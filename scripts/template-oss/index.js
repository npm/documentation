module.exports = {
  rootRepo: {
    add: {
      '.github/workflows/ci.yml': 'ci.yml',
      '.github/workflows/publish.yml': 'publish.yml',
      '.github/CODEOWNERS': 'CODEOWNERS',
      '.github/ISSUE_TEMPLATE/bug.yml': false,
      '.commitlintrc.js': false,
      '.github/settings.yml': false,
    },
  },
  rootModule: {
    add: {
      'CODE_OF_CONDUCT.md': false,
      'CONTRIBUTING.md': false,
    },
  },
  workspaceRepo: {
    add: {
      '.github/settings.yml': false,
    },
  },
  ciVersions: 'latest',
  latestCiVersion: 18,
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
    '/CONTRIBUTING.md',
    '/CONTENT-MODEL.md',
    '/.nvmrc',
  ],
  allowedPackages: [
    // these need to be allowed since this repo uses legacy-peer-deps
    // and these need to be installed explicitly
    'eslint-plugin-promise',
    'eslint-plugin-node',
    'eslint-plugin-import',
  ],
}
