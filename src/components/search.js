import React from 'react'
import {Box} from '@primer/react'
import TextInput from './text-input'
import SearchResults from './search-results'
import useSiteMetadata from '../hooks/use-site-metadata'

function Search(props) {
  const siteMetadata = useSiteMetadata()
  const {getInputProps, getMenuProps, isOpen, results, getItemProps, highlightedIndex} = props

  return (
    <Box sx={{position: 'relative'}}>
      <TextInput
        sx={{width: '240px'}}
        {...getInputProps({
          placeholder: `Search ${siteMetadata.title}`,
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
            style={{overflow: 'auto'}}
            sx={{
              minWidth: 300,
              maxHeight: '70vh',
              p: 2,
              boxShadow: 'shadow.large',
              borderColor: 'border.muted',
              bg: 'canvas.overlay',
              borderRadius: '12px',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            <SearchResults {...{results, getItemProps, highlightedIndex}} />
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}

export default Search
