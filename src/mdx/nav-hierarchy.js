import React from 'react'
import {Box} from '@primer/react'
import Link from '../components/link'
import * as getNav from '../util/get-nav'
import usePage from '../hooks/use-page'

const HierarchyItem = ({item, depth, ...props}) => {
  const hierarchy = getNav.getHierarchy(item, props)

  return (
    <Box as="li" key={item.url}>
      <Link key={item.title} to={item.url}>
        {item.title}
      </Link>
      {item.description ? <Box sx={{fontSize: 1, mb: 1}}>{item.description}</Box> : null}
      {hierarchy ? <Hierarchy items={hierarchy} depth={depth + 1} {...props} /> : null}
    </Box>
  )
}

const Hierarchy = ({items, ...props}) => {
  if (props.maxDepth && props.depth > props.maxDepth) {
    return null
  }

  return (
    <Box as="ul">
      {items.map(item => (
        <HierarchyItem key={item.url} item={item} {...props} />
      ))}
    </Box>
  )
}

function NavHierarchy({root, depth, ...props}) {
  const {location} = usePage()
  const path = getNav.getLocation(location.pathname)
  const navRoot = (root || path).replace(/\/+$/g, '')

  const rootItem = getNav.getItem(navRoot)
  const hierarchy = getNav.getHierarchy(rootItem, props)

  return <Hierarchy items={hierarchy} maxDepth={depth} depth={1} {...props} />
}

export default NavHierarchy
