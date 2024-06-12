const {resolve} = require('path')
// XXX do not export a devServer from this file.
// See https://github.com/npm/documentation/security/dependabot/112 for more info.
module.exports = {
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
    extensions: ['.js'],
  },
}
