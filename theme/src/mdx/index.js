import React from 'react'
import {useLocation} from '@reach/router' // eslint-disable-line import/no-unresolved
import {Box, Link} from '@primer/react'
import {Link as GatsbyLink} from 'gatsby'
import NavHierarchy from '../util/nav-hierarchy'

function showHierarchy(items, props, depth = 1) {
  let hierarchy

  if (props.depth && depth > props.depth) {
    return null
  }

  return (
    <Box as="ul">
      {items.map(item => (
        <Box as="li" key={item.url}>
          <Link as={GatsbyLink} key={item.title} to={item.url}>
            {item.title}
          </Link>
          {item.description != null ? (
            <>
              <Box style={{fontSize: '0.85em', marginBottom: '0.5em'}}>{item.description}</Box>
            </>
          ) : null}
          {(hierarchy = NavHierarchy.getHierarchy(item, props)) != null
            ? showHierarchy(hierarchy, props, depth + 1)
            : null}
        </Box>
      ))}
    </Box>
  )
}

function Index(props) {
  const location = useLocation()
  const path = NavHierarchy.getLocation(location.pathname)
  const root = (props.root ? props.root : path).replace(/\/+$/g, '')

  const rootItem = NavHierarchy.getItem(root)
  const hierarchy = NavHierarchy.getHierarchy(rootItem, props)

  if (!hierarchy) {
    throw new Error(`could not find entry for ${root}`)
  }

  return showHierarchy(hierarchy, props)
}

export default Index
