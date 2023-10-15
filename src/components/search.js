import React from 'react'
import {Box} from '@primer/react'
import DarkTextInput from './dark-text-input'
import SearchResults from './search-results'
import useSiteMetadata from '../hooks/use-site-metadata'

function Search(props) {
  const siteMetadata = useSiteMetadata()
  const {getInputProps, getMenuProps, isOpen, results, getItemProps, highlightedIndex} = props

  return (
    <Box position="relative">
      <DarkTextInput
        {...getInputProps({
          placeholder: `Search ${siteMetadata.title}`,
          width: 240,
          'aria-label': `Search ${siteMetadata.title}`,
        })}
      />
      <Box
        {...getMenuProps({
          position: 'absolute',
          left: 0,
          right: 0,
          pt: 2,
        })}
      >
        {isOpen ? (
          <Box
            borderWidth={1}
            borderStyle="solid"
            borderColor="border.default"
            borderRadius={2}
            minWidth={300}
            maxHeight="70vh"
            py={1}
            boxShadow="medium"
            bg="white"
            style={{overflow: 'auto'}}
          >
            <SearchResults {...{results, getItemProps, highlightedIndex}} />
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}

export default Search
