import React from 'react'
import {Box, Text} from '@primer/react'
import useSiteMetadata from '../hooks/use-site-metadata'
import getNav from '../util/get-nav'

const Breadcrumbs = ({item, highlighted}) => {
  const siteMetadata = useSiteMetadata()
  const hierarchy = getNav.getItemHierarchy(item.path)

  const text = hierarchy
    ? hierarchy
        .slice(0, -1)
        .map(item => item.shortName || item.title)
        .join(' / ')
    : siteMetadata.shortName

  return <Text sx={{fontSize: 0, color: highlighted ? 'blue.2' : 'gray.7'}}>{text}</Text>
}

function SearchResults({results, getItemProps, highlightedIndex}) {
  if (results.length === 0) {
    return (
      <Text as="div" sx={{p: 3, fontSize: 1, color: 'gray.7', width: '100%'}}>
        No results
      </Text>
    )
  }

  return results.map((item, index) => (
    <Box
      key={item.path}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 auto',
        px: 3,
        py: 2,
        color: highlightedIndex === index ? 'white' : 'gray.8',
        bg: highlightedIndex === index ? 'blue.5' : 'transparent',
        cursor: 'pointer',
      }}
      {...getItemProps({item})}
    >
      <Breadcrumbs item={item} highlighted={highlightedIndex === index} />
      {item.title}
    </Box>
  ))
}

export default SearchResults
