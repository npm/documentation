import React from 'react'
import {useCombobox} from 'downshift'
import {navigate, graphql, useStaticQuery} from 'gatsby'
import {useIsMobile} from './use-breakpoint'
import usePage from './use-page'
import * as getNav from '../util/get-nav'
import {CLI_PATH} from '../constants'

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
    getNav.getItem(getNav.getVariantRoot(`${CLI_PATH}/`, {stripTrailing: false})),
    usePage().location.pathname,
  )
}

const useSearchCombobox = (results, setQuery) => {
  const isMobile = useIsMobile()

  const combobox = useCombobox({
    id: 'search-box',
    items: results || [],
    selectedItem: null,
    onInputValueChange: ({inputValue}) => setQuery(inputValue),
    onSelectedItemChange: ({selectedItem}) => {
      if (selectedItem) {
        navigate(selectedItem.path)
        resetAndClose(true)
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

  const [isMobileSearchOpen, setMobileSearchOpen] = React.useState(false)
  const [isForceClose, setForceClose] = React.useState(false)
  const forceCloseRef = React.useRef(false)

  const resetAndClose = React.useCallback(
    force => {
      combobox.reset()
      if (force === true) {
        setForceClose(true)
      } else {
        setMobileSearchOpen(false)
      }
    },
    [combobox, setMobileSearchOpen],
  )

  // if forceClose is set then we wait until the exit animation props have
  // been removed in the component and then set mobile search to false
  React.useEffect(() => {
    if (isMobileSearchOpen && isForceClose && !forceCloseRef.current) {
      setMobileSearchOpen(false)
    }
    forceCloseRef.current = isForceClose
  }, [forceCloseRef, isForceClose, isMobileSearchOpen, setMobileSearchOpen])

  // always reset force close any time mobile search is closed
  React.useEffect(() => {
    if (!isMobileSearchOpen) {
      setForceClose(false)
    }
  }, [setForceClose, isMobileSearchOpen])

  // Fixes focus behavior on iOS where the input gets focus styles but not the
  // actual focus after animating open.
  const inputRef = React.useRef()
  React.useEffect(() => {
    if (isMobileSearchOpen) {
      inputRef.current.focus()
    }
  }, [inputRef, isMobileSearchOpen])

  return {
    ...combobox,
    isMobileSearchOpen,
    isForceClose,
    setMobileSearchOpen,
    resetAndClose,
    getInputProps: (...props) => combobox.getInputProps({ref: inputRef, ...props}),
  }
}

function useSearch() {
  const [query, setQuery] = React.useState()
  const [results, setResults] = React.useState(null)
  const queryRef = React.useRef()
  const items = useSearchData()
  const {url: cliUrl} = useCliVersion()
  const worker = React.useRef()

  const handleSearchResults = React.useCallback(({data}) => {
    if (data.query && data.results && data.query === queryRef.current) {
      setResults(data.results)
    }
  }, [])

  React.useEffect(() => {
    worker.current = new Worker(new URL('../util/search.worker.js', import.meta.url))
  }, [])

  React.useEffect(() => {
    worker.current.addEventListener('message', handleSearchResults)
  }, [worker, handleSearchResults])

  React.useEffect(() => {
    worker.current.postMessage({items})
  }, [worker, items])

  React.useEffect(() => {
    worker.current.postMessage({cli: {root: CLI_PATH, current: cliUrl}})
  }, [worker, cliUrl])

  React.useEffect(() => {
    queryRef.current = query

    if (query) {
      worker.current.postMessage({query})
    } else {
      setResults(null)
    }
  }, [worker, query])

  const combobox = useSearchCombobox(results, setQuery)

  return {
    ...combobox,
    results,
    resultsOpen: !!(combobox.isOpen && results),
  }
}

export default useSearch
