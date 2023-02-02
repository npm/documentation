import React from 'react'
// eslint-disable-next-line import/no-unresolved
import { Location } from '@reach/router'
import { Box, Link } from '@primer/components'
import { Link as GatsbyLink } from 'gatsby'
import NavHierarchy from '../nav-hierarchy'

function showHierarchy (items, props, depth = 1) {
  let hierarchy

  if (props.depth && depth > props.depth) {
    return null
  }

  return (
    <Box as="ul">
      {items.map(item => (
        <Box as="li" key={item.url}>
          <Link as={GatsbyLink} key={item.title} to={item.url}>{item.title}</Link>
          {item.description != null ? (
            <>
              <Box style={{ fontSize: '0.85em', marginBottom: '0.5em' }}>
                {item.description}
              </Box>
            </>
          ) : null}
          {(hierarchy = NavHierarchy.getHierarchy(item, props)) != null ? showHierarchy(hierarchy, props, depth + 1) : null}
        </Box>
      ))}
    </Box>
  )
}

function Index (props) {
  return (
    <Location>
      {({ location }) => {
        const path = NavHierarchy.getLocation(location.pathname)
        let root = props.root ? props.root : path
        root = root.replace(/\/+$/g, '')

        const rootItem = NavHierarchy.getItem(root)
        const hierarchy = NavHierarchy.getHierarchy(rootItem, props)

        if (!hierarchy) {
          throw new Error(`could not find entry for ${root}`)
        }

        return showHierarchy(hierarchy, props)
      }}
    </Location>
  )
}

export default Index
