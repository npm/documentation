import {Box, Link} from '@primer/components'
import React from 'react'

function TableOfContents({items, depth}) {
  return (
    <Box key={items} as="ul" m={0} p={0} css={{listStyle: 'none', lineHeight: '1.4em'}}>
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
