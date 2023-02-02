import { Flex, Text } from '@primer/components'
import React from 'react'
import useSiteMetadata from '../use-site-metadata'
import NavHierarchy from '../nav-hierarchy'

function SearchResults ({ results, getItemProps, highlightedIndex }) {
  const siteMetadata = useSiteMetadata()

  if (results.length === 0) {
    return (
      <Text as="div" p={3} fontSize={1} color="gray.7" width="100%">
        No results
      </Text>
    )
  }

  return results.map((item, index) => (
    <Flex
      key={item.path}
      {...getItemProps({
        item,
        flexDirection: 'column',
        flex: '0 0 auto',
        px: 3,
        py: 2,
        color: highlightedIndex === index ? 'white' : 'gray.8',
        bg: highlightedIndex === index ? 'blue.5' : 'transparent',
        style: { cursor: 'pointer' },
      })}
    >
      <Text
        fontSize={0}
        color={highlightedIndex === index ? 'blue.2' : 'gray.7'}
      >
        {getBreadcrumbs(siteMetadata.shortName, item.path).join(' / ')}
      </Text>
      {item.title}
    </Flex>
  ))
}

function getBreadcrumbs (siteTitle, path) {
  const hierarchy = NavHierarchy.getItemHierarchy(path)

  if (hierarchy) {
    hierarchy.pop()
    return hierarchy.map(item => item.shortName ? item.shortName : item.title)
  } else {
    return [siteTitle]
  }
}

export default SearchResults
