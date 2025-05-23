import FuseJs from 'fuse.js'
import debounce from 'lodash.debounce'

class Fuse {
  constructor() {
    this.allItems = null
    this.cliVersion = null
    this.instances = new Map()
    // [MKT]: I landed on the debouce wait value of 50 based mostly on
    // experimentation. With both `leading` and `trailing` set to `true`, this
    // feels pretty snappy.
    //
    // From https://lodash.com/docs/#debounce:
    //
    // > Note: If `leading` and `trailing` options are `true`, `func` is invoked
    // > on the trailing edge of the timeout only if the debounced function is
    // > invoked more than once during the wait timeout.
    this.search = debounce(this.search, 50, {leading: true, trailing: true})
  }

  search(query) {
    postMessage({
      query,
      results: this.instances
        .get(this.cliVersion.current)
        .search(query)
        .slice(0, 20)
        .map(i => i.item),
    })
  }

  createInstance() {
    if (!this.allItems || !this.cliVersion) {
      return
    }
    const items = this.allItems.filter(item =>
      item.path.startsWith(this.cliVersion.root) ? item.path.startsWith(this.cliVersion.current) : true,
    )
    this.instances.set(this.cliVersion.current, new FuseJs(items, {threshold: 0.2, keys: ['title', 'body']}))
  }

  setItems(items) {
    this.allItems = items
    this.createInstance()
  }

  setCliVersion({root, current}) {
    this.cliVersion = {root, current}
    if (this.instances.has(this.cliVersion.current)) {
      return
    }
    this.createInstance()
  }
}

const fuse = new Fuse()

onmessage = function ({data: {items, query, cli}}) {
  if (items) {
    fuse.setItems(items)
  }

  if (cli) {
    fuse.setCliVersion(cli)
  }

  if (query) {
    fuse.search(query)
  }
}
