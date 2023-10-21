import {Box} from '@primer/react'
import React from 'react'
import useSiteMetadata from '../hooks/use-site-metadata'
import DarkTextInput from './dark-text-input'
import SearchResults from './search-results'
import BorderBox from './border-box'

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
          <BorderBox minWidth={300} maxHeight="70vh" py={1} boxShadow="medium" bg="white" style={{overflow: 'auto'}}>
            <SearchResults {...{results, getItemProps, highlightedIndex}} />
          </BorderBox>
        ) : null}
      </Box>
    </Box>
  )
}

export default Search
