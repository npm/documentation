import React from 'react'
import {Box, Link} from '@primer/react'
import {Link as GatsbyLink} from 'gatsby'
import getNav from '../util/get-nav'
import {useLocation} from '../layout'

const HierarchyItem = ({item, currentDepth, ...props}) => {
  const hierarchy = getNav.getHierarchy(item, props)

  return (
    <Box as="li" key={item.url}>
      <Link as={GatsbyLink} key={item.title} to={item.url}>
        {item.title}
      </Link>
      {item.description != null ? (
        <Box style={{fontSize: '0.85em', marginBottom: '0.5em'}}>{item.description}</Box>
      ) : null}
      {hierarchy ? <Hierarchy items={hierarchy} currentDepth={currentDepth + 1} {...props} /> : null}
    </Box>
  )
}

const Hierarchy = ({items, currentDepth = 1, ...props}) => {
  if (props.depth && currentDepth > props.depth) {
    return null
  }

  return (
    <Box as="ul">
      {items.map(item => (
        <HierarchyItem key={item.url} item={item} currentDepth={currentDepth} {...props} />
      ))}
    </Box>
  )
}

function NavHierarchy(props) {
  const location = useLocation()
  const path = getNav.getLocation(location.pathname)
  const root = (props.root ? props.root : path).replace(/\/+$/g, '')

  const rootItem = getNav.getItem(root)
  const hierarchy = getNav.getHierarchy(rootItem, props)

  if (!hierarchy) {
    throw new Error(`could not find entry for ${root}`)
  }

  return <Hierarchy items={hierarchy} {...props} />
}

export default NavHierarchy
