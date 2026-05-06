const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')

const writeTree = (dir, spec) => {
  fs.mkdirSync(dir, {recursive: true})
  for (const [name, value] of Object.entries(spec)) {
    const p = path.join(dir, name)
    if (value === null || value === undefined) {
      continue
    }
    if (typeof value === 'string' || Buffer.isBuffer(value)) {
      fs.writeFileSync(p, value)
    } else if (typeof value === 'object') {
      writeTree(p, value)
    } else {
      throw new TypeError(`testdir: unsupported value at ${p}: ${typeof value}`)
    }
  }
}

const testdir = (t, spec = {}) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'cli-test-'))
  writeTree(dir, spec)
  t.after(() => fs.rmSync(dir, {recursive: true, force: true}))
  return dir
}

const mockRequire = (t, requestPath, mocks = {}) => {
  const sutPath = require.resolve(requestPath, {paths: [__dirname]})
  const sutDir = path.dirname(sutPath)

  const overridden = []
  for (const [spec, value] of Object.entries(mocks)) {
    const resolved = require.resolve(spec, {paths: [sutDir]})
    overridden.push([resolved, require.cache[resolved]])
    require.cache[resolved] = {
      id: resolved,
      filename: resolved,
      loaded: true,
      exports: value,
      children: [],
      paths: [],
      parent: null,
    }
  }

  const previousSut = require.cache[sutPath]
  delete require.cache[sutPath]
  const exported = require(sutPath)

  t.after(() => {
    delete require.cache[sutPath]
    if (previousSut) {
      require.cache[sutPath] = previousSut
    }
    for (const [resolved, prev] of overridden) {
      if (prev) {
        require.cache[resolved] = prev
      } else {
        delete require.cache[resolved]
      }
    }
  })

  return exported
}

module.exports = {testdir, mockRequire}
