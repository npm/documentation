import React from 'react'
import {Box, Text} from '@primer/react'
import useSiteMetadata from '../hooks/use-site-metadata'
import * as getNav from '../util/get-nav'

const Breadcrumbs = ({item, highlighted}) => {
  const siteMetadata = useSiteMetadata()
  const hierarchy = getNav.getItemBreadcrumbs(item.path)

  const text = hierarchy
    ? hierarchy
        .slice(0, -1)
        .map(s => s.title)
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
      {...getItemProps({
        item,
        style: {cursor: 'pointer'},
        sx: {
          display: 'flex',
          flexDirection: 'column',
          flex: '0 0 auto',
          px: 3,
          py: 2,
          color: 'fg.default',
          fontSize: 1,
          bg: highlightedIndex === index ? 'neutral.muted' : 'transparent',
          cursor: 'pointer',
        },
      })}
    >
      <Breadcrumbs item={item} highlighted={highlightedIndex === index} />
      {item.title}
    </Box>
  ))
}

export default SearchResults
