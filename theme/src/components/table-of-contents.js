import {Box, Link} from '@primer/components'
import React from 'react'
import { activateArrowKeyNavigation } from '../utils/accessibility'

function TableOfContents({items, depth}) {
  const tableOfContentsRef = React.createRef()

  React.useEffect(() => {
    const arrowKeyNavigation = activateArrowKeyNavigation(tableOfContentsRef.current, 'li > a')
    return arrowKeyNavigation.deactivate
  }, [tableOfContentsRef.current])

  return (
    <Box key={items} as="ul" m={0} p={0} css={{listStyle: 'none', lineHeight: '1.4em'}} ref={tableOfContentsRef}>
      {items.map(item => (
        <Box as="li" key={item.url} pl={depth > 0 ? 3 : 0}>
          <Link key={item.title} display="inline-block" py={1} href={item.url} color="gray.6">
            {item.title}
          </Link>
          {item.items ? (
            <TableOfContents items={item.items} depth={depth + 1} />
          ) : null}
        </Box>
      ))}
    </Box>
  )
}

TableOfContents.defaultProps = {
  depth: 0,
}

export default TableOfContents
