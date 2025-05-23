const {resolve} = require('path')
// XXX do not export a devServer from this file.
// See https://github.com/advisories/GHSA-wr3j-pwj9-hqq6 for more info.
module.exports = {
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
    extensions: ['.js'],
  },
}
