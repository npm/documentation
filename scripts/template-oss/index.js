module.exports = {
  rootRepo: {
    add: {
      '.github/workflows/ci.yml': 'ci-yml.hbs',
      '.github/workflows/publish.yml': 'publish-yml.hbs',
      '.github/CODEOWNERS': false,
      '.github/ISSUE_TEMPLATE/bug.yml': false,
      '.commitlintrc.js': false,
      '.github/settings.yml': false,
    },
  },
  rootModule: {
    add: {
      'package.json': {file: 'package-json.hbs', overwrite: false},
      '.eslintrc.js': false,
      'CODE_OF_CONDUCT.md': false,
      'CONTRIBUTING.md': false,
    },
  },
  workspaceRepo: {
    add: {
      '.github/settings.yml': false,
    },
  },
  workspaceModule: {
    add: {
      '.eslintrc.js': false,
    },
  },
  ciVersions: 'latest',
  latestCiVersion: 18,
  macCI: false,
  windowsCI: false,
  lockfile: true,
  // these need to be allowed since they need to installed explicitly since
  // the repo uses legacy-peer-deps to avoid gatsby errors
  allowedPackages: ['eslint', 'eslint-plugin-import', 'eslint-plugin-node', 'eslint-plugin-promise'],
  requiredPackages: {
    devDependencies: [],
  },
  allowPaths: [
    '/.nvmrc',
    '/.prettierignore',
    '/.prettierrc.js',
    '/.reuse/',
    '/CODE_OF_CONDUCT.md',
    '/CONTENT-MODEL.md',
    '/content/',
    '/CONTRIBUTING.md',
    '/gatsby-*',
    '/jest*.js',
    '/LICENSE*',
    '/src',
    '/static/',
    '/webpack.config.js',
  ],
}
