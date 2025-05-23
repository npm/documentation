module.exports = {
  ...require('../../../scripts/template-oss'),
  workspaceRepo: {
    add: {
      '.github/workflows/update-cli.yml': 'update-cli-yml.hbs',
    },
  },
  allowPaths: ['/releases.json'],
}
