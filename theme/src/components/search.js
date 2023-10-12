import {BorderBox, Position} from '@primer/components'
import React from 'react'
import useSiteMetadata from '../use-site-metadata'
import DarkTextInput from './dark-text-input'
import SearchResults from './search-results'

function Search(props) {
  const siteMetadata = useSiteMetadata()
  const {getInputProps, getMenuProps, isOpen, results, getItemProps, highlightedIndex} = props

  return (
    <Position position="relative">
      <DarkTextInput
        {...getInputProps({
          placeholder: `Search ${siteMetadata.title}`,
          width: 240,
          'aria-label': `Search ${siteMetadata.title}`
        })}
      />
      <Position
        {...getMenuProps({
          position: 'absolute',
          left: 0,
          right: 0,
          pt: 2,
        })}
      >
        {isOpen ? (
          <BorderBox minWidth={300} maxHeight="70vh" py={1} boxShadow="medium" bg="white" style={{overflow: 'auto'}}>
            <SearchResults {...{results, getItemProps, highlightedIndex}} />
          </BorderBox>
        ) : null}
      </Position>
    </Position>
  )
}

export default Search
