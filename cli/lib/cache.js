const {join} = require('path')
const fs = require('fs/promises')

/** cache npm cli version shas to NOT pull down changes we already have */
class CacheVersionSha {
  constructor(cache) {
    this.cache = cache
  }

  static path = join(__dirname, '../../content/cli/cache.json')

  static async load() {
    return new CacheVersionSha(JSON.parse(await fs.readFile(this.path, 'utf-8')))
  }

  async save() {
    await fs.writeFile(CacheVersionSha.path, JSON.stringify(this.cache, null, 2))
    return this
  }

  set(id, sha) {
    this.cache[id] = sha
    return this
  }

  same(id, value) {
    return this.cache[id] === value
  }
}

module.exports = {
  CacheVersionSha,
}
