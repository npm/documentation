const fs = require('fs/promises')

/** cache npm cli version shas to NOT pull down changes we already have */
class CacheVersionSha {
  constructor(cache, path) {
    this.cache = cache
    this.path = path
  }

  static async load(path) {
    return new CacheVersionSha(JSON.parse(await fs.readFile(path, 'utf-8')), path)
  }

  async save() {
    await fs.writeFile(this.path, JSON.stringify(this.cache, null, 2))
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
