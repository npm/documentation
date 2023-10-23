import React from 'react'
import {Box, Text} from '@primer/react'
import {LinkNoUnderline} from './link'
import useSiteMetadata from '../hooks/use-site-metadata'
import * as getNav from '../util/get-nav'

const SearchItem = ({item}) => {
  const siteMetadata = useSiteMetadata()
  const variant = getNav.getVariant(getNav.getVariantRoot(item.path), item.path)
  const hierarchy = getNav.getItemBreadcrumbs(item.path)

  // keep the variant in the breadcrumb if we have one and its not the
  // same as the last breadcrumb. this makes sure that variant index pages
  // don't all appear the same in the search results
  if (!variant || variant !== hierarchy[hierarchy.length - 1].shortName) {
    hierarchy.pop()
  }

  return (
    <>
      <Text sx={{fontSize: 0}}>
        {hierarchy.length ? hierarchy.map(s => s.shortName || s.title).join(' / ') : siteMetadata.shortName}
      </Text>
      {item.title}
    </>
  )
}

const Result = React.forwardRef(function Result({sx, ...props}, ref) {
  return <Box ref={ref} sx={{px: 3, py: 2, color: 'fg.default', fontSize: 1, ...sx}} {...props} />
})

function SearchResults({results, getItemProps, highlightedIndex}) {
  if (!results || results.length === 0) {
    return <Result>No results</Result>
  }

  return results.map((item, index) => (
    <Result
      {...getItemProps({item, index})}
      as={LinkNoUnderline}
      to={item.path}
      key={item.path}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 auto',
        bg: highlightedIndex === index ? 'neutral.muted' : 'transparent',
      }}
    >
      <SearchItem item={item} />
    </Result>
  ))
}

export default SearchResults
