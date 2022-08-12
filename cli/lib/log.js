const log = require('proc-log')
const SYMBOL = Symbol('doc-log')

module.exports = Object.fromEntries(
  Object.entries(log).map(([k, v]) => [k, (...a) => v(SYMBOL, ...a)])
)

/* istanbul ignore next */
module.exports.on = (loglevel) => process.on('log', (l, s, ...args) => {
  // If loglevel is verbose, show everything. Otherwise only show things
  // that are not verbose. The script only uses verbose and info, so this
  // approach works for now.
  if (s === SYMBOL && (loglevel === 'verbose' || l !== 'verbose')) {
    console.error(l, ...args)
  }
})
