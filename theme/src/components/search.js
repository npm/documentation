import { BorderBox, Position } from '@primer/components'
import Downshift from 'downshift'
import { navigate } from 'gatsby'
import React from 'react'
import useSearch from '../use-search'
import useSiteMetadata from '../use-site-metadata'
import DarkTextInput from './dark-text-input'
import SearchResults from './search-results'

function stateReducer (state, changes) {
  switch (changes.type) {
    case Downshift.stateChangeTypes.changeInput:
      if (!changes.inputValue) {
        // Close the menu if the input is empty.
        return { ...changes, isOpen: false }
      }
      return changes
    default:
      return changes
  }
}

function Search () {
  const [query, setQuery] = React.useState('')
  const results = useSearch(query)
  const siteMetadata = useSiteMetadata()

  return (
    <Downshift
      inputValue={query}
      onInputValueChange={inputValue => setQuery(inputValue)}
      // We don't need Downshift to keep track of a selected item because as
      // soon as an item is selected we navigate to a new page.
      // Let's avoid any unexpected states related to the selected item
      // by setting it to always be `null`.
      selectedItem={null}
      onSelect={item => {
        if (item) {
          navigate(item.path)
          setQuery('')
        }
      }}
      itemToString={item => (item ? item.title : '')}
      stateReducer={stateReducer}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        getRootProps,
        isOpen,
        highlightedIndex,
      }) => (
        <Position {...getRootProps({ position: 'relative' })}>
          <DarkTextInput
            {...getInputProps({
              placeholder: `Search ${siteMetadata.title}`,
              width: 240,
            })}
          />
          {isOpen ? (
            <Position
              {...getMenuProps({
                position: 'absolute',
                left: 0,
                right: 0,
                pt: 2,
              })}
            >
              <BorderBox
                minWidth={300}
                maxHeight="70vh"
                py={1}
                boxShadow="medium"
                bg="white"
                style={{ overflow: 'auto' }}
              >
                <SearchResults
                  results={results}
                  getItemProps={getItemProps}
                  highlightedIndex={highlightedIndex}
                />
              </BorderBox>
            </Position>
          ) : null}
        </Position>
      )}
    </Downshift>
  )
}

export default Search
