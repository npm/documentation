import React from 'react'
import {useCombobox} from 'downshift'
import {navigate, graphql, useStaticQuery} from 'gatsby'
import {useIsMobile} from './use-breakpoint'
import usePage from './use-page'
import * as getNav from '../util/get-nav'

// This worker can live for the entire duraction of the site
const WORKER = new Worker(new URL('../util/search.worker.js', import.meta.url))
const CLI_ROOT = '/cli'

const useSearchData = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            title
          }
          body
        }
      }
      allSitePage {
        nodes {
          path
          pageContext
        }
      }
    }
  `)

  return React.useMemo(() => {
    const mdxNodes = data.allMdx.nodes.reduce((map, obj) => {
      map[obj.id] = obj
      return map
    }, {})

    return data.allSitePage.nodes
      .filter(node => mdxNodes[node.pageContext?.mdxId] != null)
      .map(node => {
        const mdxNode = mdxNodes[node.pageContext.mdxId]
        return {
          path: node.path,
          title: mdxNode.frontmatter.title,
          body: mdxNode.body,
        }
      })
  }, [data])
}

const useCliVersion = () => {
  return getNav.getCurrentOrDefaultVariant(
    getNav.getItem(getNav.getVariantRoot(`${CLI_ROOT}/`, {stripTrailing: false})),
    usePage().location.pathname,
  )
}

function useSearch() {
  const [query, setQuery] = React.useState()
  const [results, setResults] = React.useState(null)
  const queryRef = React.useRef()
  const items = useSearchData()
  const isMobile = useIsMobile()
  const {url: cliUrl} = useCliVersion()

  const handleSearchResults = React.useCallback(({data}) => {
    if (data.debug) {
      console.log(data.debug)
    }
    if (data.query && data.results && data.query === queryRef.current) {
      setResults(data.results)
    }
  }, [])

  React.useEffect(() => {
    WORKER.addEventListener('message', handleSearchResults)
  }, [handleSearchResults])

  React.useEffect(() => {
    WORKER.postMessage({items})
  }, [items])

  React.useEffect(() => {
    WORKER.postMessage({cli: {root: CLI_ROOT, current: cliUrl}})
  }, [cliUrl])

  React.useEffect(() => {
    queryRef.current = query

    if (query) {
      WORKER.postMessage({query})
    } else {
      setResults(null)
    }
  }, [query])

  const combobox = useCombobox({
    id: 'search-box',
    items: results || [],
    onInputValueChange: ({inputValue}) => setQuery(inputValue),
    onSelectedItemChange: ({selectedItem}) => {
      if (selectedItem) {
        navigate(selectedItem.path)
        combobox.reset()
      }
    },
    itemToString: item => (item ? item.title : ''),
    stateReducer: (state, {type, changes}) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          if (!changes.inputValue) {
            // Close the menu if the input is empty.
            return {...changes, isOpen: false}
          }
          break
        case useCombobox.stateChangeTypes.InputBlur:
          if (isMobile) {
            // Don't let a blur event change the state of `inputValue` or `isOpen`.
            return {
              ...changes,
              inputValue: state.inputValue,
              isOpen: state.isOpen,
            }
          }
          break
        default:
          break
      }
      return changes
    },
  })

  return {
    ...combobox,
    results,
    isOpen: !!(combobox.isOpen && results),
  }
}

export default useSearch
