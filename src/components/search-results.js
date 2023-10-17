import React from 'react'
import {Box, Text} from '@primer/react'
import useSiteMetadata from '../hooks/use-site-metadata'
import * as getNav from '../util/get-nav'

const Breadcrumbs = ({item}) => {
  const siteMetadata = useSiteMetadata()
  const hierarchy = getNav.getItemBreadcrumbs(item.path).slice(0, -1)

  const text = hierarchy.length ? hierarchy.map(s => s.shortName || s.title).join(' / ') : siteMetadata.shortName

  return <Text sx={{fontSize: 0}}>{text}</Text>
}

function SearchResults({results, getItemProps, highlightedIndex}) {
  if (results.length === 0) {
    return (
      <Text as="div" sx={{px: 3, py: 2, color: 'fg.default', fontSize: 1}}>
        No results
      </Text>
    )
  }

  return results.map((item, index) => (
    <Box
      key={item.path}
      style={{cursor: 'pointer'}}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 auto',
        px: 3,
        py: 2,
        color: 'fg.default',
        fontSize: 1,
        bg: highlightedIndex === index ? 'neutral.muted' : 'transparent',
        cursor: 'pointer',
      }}
      {...getItemProps({item, index})}
    >
      <Breadcrumbs item={item} />
      {item.title}
    </Box>
  ))
}

export default SearchResults
