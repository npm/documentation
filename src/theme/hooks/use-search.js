import {useCallback, useEffect, useMemo, useRef, useState} from 'preact/hooks'
import {create, insertMultiple, search as searchDb} from '@orama/orama'
import {useIsMobile} from './use-media-query'
import * as getNav from '../util/get-nav'
import {CLI_PATH} from '../constants'
import {NO_CLI, SEARCH_SCHEMA} from '../../generators/npm/utils/search.mjs'

const SEARCH_INDEX_URL = '/search-index.json'
const MAX_RESULTS = 20

/**
 * The search index, loaded the first time it is needed.
 */
const useSearchIndex = () => {
  const dbRef = useRef(null)

  return useCallback(() => {
    dbRef.current ??= fetch(SEARCH_INDEX_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Could not load the search index: ${response.status}`)
        }
        return response.json()
      })
      .then(async ({documents}) => {
        const db = create({schema: SEARCH_SCHEMA, sort: {enabled: false}})
        await insertMultiple(db, documents)
        return db
      })
      .catch(err => {
        dbRef.current = null
        throw err
      })

    return dbRef.current
  }, [])
}

const useCliVersion = path =>
  getNav.getCurrentOrDefaultVariant(getNav.getItem(getNav.getVariantRoot(`${CLI_PATH}/`, {stripTrailing: false})), path)

/**
 * Searches the site. Pages of the CLI documentation only match for the CLI
 * version being read (or the default one).
 *
 * @param {string} pathname - The current page
 */
function useSearch(pathname) {
  const isMobile = useIsMobile()
  const loadIndex = useSearchIndex()
  const {url: cliUrl} = useCliVersion(pathname)

  const [query, setQuery] = useState('')
  const [results, setResults] = useState(null)
  const [isOpen, setOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [isMobileSearchOpen, setMobileSearchOpen] = useState(false)
  const inputRef = useRef(null)
  const queryRef = useRef('')

  // Run the search for the current query, discarding stale results.
  useEffect(() => {
    queryRef.current = query

    if (!query) {
      setResults(null)
      return
    }

    let cancelled = false
    const timeout = setTimeout(async () => {
      try {
        const db = await loadIndex()
        const {hits} = await searchDb(db, {
          term: query,
          properties: ['title', 'body'],
          boost: {title: 4},
          tolerance: 1,
          limit: MAX_RESULTS,
          where: {cli: {in: [NO_CLI, cliUrl]}},
        })
        if (!cancelled && queryRef.current === query) {
          setResults(hits.map(({document}) => ({path: document.path, title: document.title})))
          setHighlightedIndex(-1)
        }
      } catch (err) {
        console.error(err)
        if (!cancelled) {
          setResults([])
        }
      }
    }, 50)

    return () => {
      cancelled = true
      clearTimeout(timeout)
    }
  }, [query, cliUrl, loadIndex])

  const reset = useCallback(() => {
    setQuery('')
    setResults(null)
    setOpen(false)
    setHighlightedIndex(-1)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }, [])

  const resetAndClose = useCallback(() => {
    reset()
    setMobileSearchOpen(false)
  }, [reset])

  const navigateTo = useCallback(
    item => {
      if (item) {
        resetAndClose()
        window.location.assign(item.path)
      }
    },
    [resetAndClose],
  )

  // Fixes focus behavior on iOS where the input gets focus styles but not the
  // actual focus after animating open.
  useEffect(() => {
    if (isMobileSearchOpen) {
      inputRef.current?.focus()
    }
  }, [isMobileSearchOpen])

  const resultsOpen = Boolean(isOpen && results)
  const menuId = 'search-box-menu'

  const getInputProps = useCallback(
    (props = {}) => ({
      ref: inputRef,
      id: 'search-box-input',
      type: 'text',
      autoComplete: 'off',
      role: 'combobox',
      'aria-autocomplete': 'list',
      'aria-expanded': resultsOpen ? 'true' : 'false',
      'aria-controls': menuId,
      'aria-activedescendant': resultsOpen && highlightedIndex >= 0 ? `search-box-item-${highlightedIndex}` : undefined,
      onInput: event => {
        const value = event.currentTarget.value
        setQuery(value)
        // Close the menu if the input is empty.
        setOpen(Boolean(value))
      },
      onFocus: () => {
        // Warm up the index while the reader types.
        loadIndex().catch(() => {})
      },
      onBlur: () => {
        // Don't let a blur event change the state on mobile.
        if (!isMobile) {
          setOpen(false)
        }
      },
      onKeyDown: event => {
        const count = results?.length ?? 0
        switch (event.key) {
          case 'ArrowDown':
            event.preventDefault()
            if (!resultsOpen && results) {
              setOpen(true)
            }
            setHighlightedIndex(index => Math.min(index + 1, count - 1))
            break
          case 'ArrowUp':
            event.preventDefault()
            setHighlightedIndex(index => Math.max(index - 1, 0))
            break
          case 'Enter':
            if (resultsOpen && highlightedIndex >= 0) {
              event.preventDefault()
              navigateTo(results[highlightedIndex])
            }
            break
          case 'Escape':
            event.preventDefault()
            if (isMobileSearchOpen) {
              resetAndClose()
            } else if (resultsOpen) {
              setOpen(false)
            } else {
              reset()
            }
            break
          default:
        }
      },
      ...props,
    }),
    [resultsOpen, highlightedIndex, results, isMobile, isMobileSearchOpen, loadIndex, navigateTo, reset, resetAndClose],
  )

  const getMenuProps = useCallback(() => ({id: menuId, role: 'listbox'}), [])

  const getItemProps = useCallback(
    ({item, index}) => ({
      id: `search-box-item-${index}`,
      role: 'option',
      'aria-selected': highlightedIndex === index ? 'true' : 'false',
      onMouseMove: () => setHighlightedIndex(index),
      onMouseDown: event => {
        // Keep the input focused (and the menu open) while clicking a result.
        event.preventDefault()
      },
      onClick: event => {
        if (!event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
          event.preventDefault()
          navigateTo(item)
        }
      },
    }),
    [highlightedIndex, navigateTo],
  )

  return useMemo(
    () => ({
      results,
      resultsOpen,
      highlightedIndex,
      isMobileSearchOpen,
      setMobileSearchOpen,
      resetAndClose,
      getInputProps,
      getMenuProps,
      getItemProps,
    }),
    [
      results,
      resultsOpen,
      highlightedIndex,
      isMobileSearchOpen,
      resetAndClose,
      getInputProps,
      getMenuProps,
      getItemProps,
    ],
  )
}

export default useSearch
