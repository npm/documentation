import React from 'react'
import {Box} from '@primer/react'
import Link from '../components/link'
import * as getNav from '../util/get-nav'
import usePage from '../hooks/use-page'

const HierarchyItem = ({item, maxDepth, depth, hideVariants}) => {
  const hierarchy = getNav.getHierarchy(item, null, {hideVariants})

  return (
    <Box as="li" key={item.url}>
      <Link key={item.title} to={item.url}>
        {item.title}
      </Link>
      {item.description ? <Box sx={{fontSize: 1, mb: 1}}>{item.description}</Box> : null}
      {hierarchy ? (
        <Hierarchy items={hierarchy} maxDepth={maxDepth} depth={depth + 1} hideVariants={hideVariants} />
      ) : null}
    </Box>
  )
}

const Hierarchy = ({items, maxDepth, depth, hideVariants}) => {
  if (maxDepth && depth > maxDepth) {
    return null
  }

  return (
    <Box as="ul">
      {items.map(item => (
        <HierarchyItem key={item.url} item={item} maxDepth={maxDepth} depth={depth} hideVariants={hideVariants} />
      ))}
    </Box>
  )
}

function NavHierarchy({depth, hideVariants}) {
  const {pathname} = usePage().location
  const hierarchy = getNav.getHierarchy(getNav.getItem(pathname), null, {hideVariants})

  return <Hierarchy items={hierarchy} maxDepth={depth} depth={1} hideVariants={hideVariants} />
}

export default NavHierarchy
