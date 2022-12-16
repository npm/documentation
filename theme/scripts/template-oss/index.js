module.exports = {
  ...require('../../../scripts/template-oss'),
  workspaceModule: {
    add: {
      'package.json': 'pkg.json',
      '.eslintrc.js': false,
    },
  },
  allowPaths: [
    '/src',
    '/gatsby-*.js',
    '/jest*.js',
    '/index.js',
  ],
  requiredPackages: {
    devDependencies: [],
  },
  allowedPackages: [
    'eslint',
  ],
}
