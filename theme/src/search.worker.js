import Fuse from 'fuse.js'
import debounce from 'lodash.debounce'
;(function searchWorker() {
  let fuse = null

  // [MKT]: I landed on the debouce wait value of 50 based mostly on
  // experimentation. With both `leading` and `trailing` set to `true`, this
  // feels pretty snappy.
  //
  // From https://lodash.com/docs/#debounce:
  //
  // > Note: If `leading` and `trailing` options are `true`, `func` is invoked
  // > on the trailing edge of the timeout only if the debounced function is
  // > invoked more than once during the wait timeout.
  const performSearch = debounce(
    function performSearch(query) {
      const results = fuse.search(query).slice(0, 20)
      postMessage({results, query})
    },
    50,
    {leading: true, trailing: true},
  )

  onmessage = function ({data}) {
    if (data.list) {
      fuse = new Fuse(data.list, {
        threshold: 0.2,
        keys: ['title', 'rawBody'],
        tokenize: true,
      })
    } else if (data.query) {
      performSearch(data.query)
    }
  }
})()
