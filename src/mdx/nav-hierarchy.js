import React from 'react'
import {Box, Link} from '@primer/react'
import {Link as GatsbyLink} from 'gatsby'
import * as getNav from '../util/get-nav'
import {useLocation} from '../layout'

const HierarchyItem = ({item, depth, ...props}) => {
  const hierarchy = getNav.getHierarchy(item, props)

  return (
    <Box as="li" key={item.url}>
      <Link as={GatsbyLink} key={item.title} to={item.url}>
        {item.title}
      </Link>
      {item.description ? <Box sx={{fontSize: '0.85em', marginBottom: '0.5em'}}>{item.description}</Box> : null}
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
  const location = useLocation()
  const path = getNav.getLocation(location.pathname)
  const navRoot = (root || path).replace(/\/+$/g, '')

  const rootItem = getNav.getItem(navRoot)
  const hierarchy = getNav.getHierarchy(rootItem, props)

  return <Hierarchy items={hierarchy} maxDepth={depth} depth={1} {...props} />
}

export default NavHierarchy
