import React from 'react'
import {Box, ThemeProvider} from '@primer/react'
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
        placeholder={`Search ${siteMetadata.title}`}
        aria-label={`Search ${siteMetadata.title}`}
        {...getInputProps()}
      />
      <Box sx={{position: 'absolute', left: 0, right: 0, pt: 2}} {...getMenuProps()}>
        {isOpen ? (
          <ThemeProvider colorMode="light">
            <Box
              sx={{
                overflow: 'auto',
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
          </ThemeProvider>
        ) : null}
      </Box>
    </Box>
  )
}

export default Search
