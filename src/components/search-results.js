import React from 'react'
import {Box, Text} from '@primer/react'
import useSiteMetadata from '../hooks/use-site-metadata'
import * as getNav from '../util/get-nav'

const Breadcrumbs = ({item}) => {
  const siteMetadata = useSiteMetadata()
  const variant = getNav.getVariant(getNav.getVariantRoot(item.path), item.path)
  const hierarchy = getNav.getItemBreadcrumbs(item.path)

  // keep the variant in the breadcrumb if we have one and its not the
  // same as the last breadcrumb. this makes sure that variant index pages
  // don't all appear the same in the search results
  if (!variant || variant !== hierarchy[hierarchy.length - 1].shortName) {
    hierarchy.pop()
  }

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
      }}
      {...getItemProps({item, index})}
    >
      <Breadcrumbs item={item} />
      {item.title}
    </Box>
  ))
}

export default SearchResults
