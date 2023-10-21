import React from 'react'
import {useCombobox} from 'downshift'
import {navigate, graphql, useStaticQuery} from 'gatsby'
import {useIsMobile} from './use-breakpoint'

const useSearchData = () => {
  const rawData = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            title
          }
          rawBody
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
    if (!rawData) {
      return [{path: '/', title: 'Dev Title', rawBody: 'Test'}]
    }

    const mdxNodes = rawData.allMdx.nodes.reduce((map, obj) => {
      map[obj.id] = obj
      return map
    }, {})

    return rawData.allSitePage.nodes
      .filter(node => {
        return node.pageContext && node.pageContext.mdxId && mdxNodes[node.pageContext.mdxId] != null
      })
      .map(node => {
        const mdxNode = mdxNodes[node.pageContext.mdxId]
        return {
          path: node.path,
          title: mdxNode.frontmatter.title,
          rawBody: mdxNode.rawBody,
        }
      })
  }, [rawData])
}

function useSearch() {
  const isMobile = useIsMobile()

  const queryRef = React.useRef()
  const workerRef = React.useRef()

  const [query, setQuery] = React.useState()
  const [items, setItems] = React.useState(null)

  const data = useSearchData()

  const handleSearchResults = React.useCallback(({data}) => {
    if (data.query && data.results && data.query === queryRef.current) {
      setItems(data.results)
    }
  }, [])

  React.useEffect(() => {
    const worker = new Worker(new URL('../util/search.worker.js', import.meta.url))
    workerRef.current = worker

    worker.addEventListener('message', handleSearchResults)
    worker.postMessage({data})

    return () => worker.terminate()
  }, [data, handleSearchResults])

  React.useEffect(() => {
    queryRef.current = query

    if (query) {
      workerRef.current.postMessage({query})
    } else {
      setItems(null)
    }
  }, [query])

  const combobox = useCombobox({
    // We don't need Downshift to keep track of a selected item because as
    // soon as an item is selected we navigate to a new page.
    // Let's avoid any unexpected states related to the selected item
    // by setting it to always be `null`.
    items: items || [],
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
            return {...changes, inputValue: state.inputValue, isOpen: state.isOpen}
          }
          break
      }
      return changes
    },
  })

  return {
    ...combobox,
    results: items,
    isOpen: !!(combobox.isOpen && items),
  }
}

export default useSearch
