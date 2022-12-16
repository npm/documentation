module.exports = {
  ...require('../../../scripts/template-oss'),
  workspaceRepo: {
    add: {
      '.github/workflows/update-cli.yml': 'update-cli.yml',
    },
  },
  allowPaths: [
    '/releases.json',
  ],
}
