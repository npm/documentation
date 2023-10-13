import {Box, Link} from '@primer/components'
import React from 'react'

function TableOfContents({items, depth, labelId}) {
  return (
    <Box
      key={items}
      as="ul"
      role="list"
      m={0}
      p={0}
      css={{listStyle: 'none', lineHeight: '1.4em'}}
      aria-labelledby={labelId}
    >
      {items.map(item => (
        <Box as="li" role="listitem" key={item.url} pl={depth > 0 ? 3 : 0}>
          <Link key={item.title} display="inline-block" py={1} href={item.url} color="gray.6">
            {item.title}
          </Link>
          {item.items ? <TableOfContents items={item.items} depth={depth + 1} /> : null}
        </Box>
      ))}
    </Box>
  )
}

TableOfContents.defaultProps = {
  depth: 0,
}

export default TableOfContents
