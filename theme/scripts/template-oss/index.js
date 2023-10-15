module.exports = {
  ...require('../../../scripts/template-oss'),
  workspaceRepo: {
    add: {
      '.github/settings.yml': false,
    },
  },
  workspaceModule: {
    add: {
      'package.json': {file: 'pkg.json', overwrite: false},
      '.eslintrc.js': false,
    },
  },
  allowPaths: ['/src', '/gatsby-*.js', '/jest*.js', '/index.js', '/.prettierIgnore'],
  requiredPackages: {
    devDependencies: [],
  },
}
