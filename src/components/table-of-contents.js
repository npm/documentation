import React from 'react'
import {Box, Link, Text, Octicon, Details, useDetails} from '@primer/react'
import {ChevronDownIcon, ChevronRightIcon} from '@primer/octicons-react'
import {usePageContext} from '../layout'
import {HEADER_HEIGHT} from '../constants'

const TableOfContents = ({items, depth = 0, labelId}) => (
  <Box
    key={items}
    as="ul"
    role="list"
    sx={{m: 0, p: 0, listStyle: 'none', lineHeight: '1.4em'}}
    aria-labelledby={labelId}
  >
    {items.map(item => (
      <Box as="li" role="listitem" key={item.url} sx={{pl: depth > 0 ? 3 : 0}}>
        <Link key={item.title} href={item.url} sx={{display: 'inline-block', py: 1, color: 'gray.6'}}>
          {item.title}
        </Link>
        {item.items ? <TableOfContents items={item.items} depth={depth + 1} /> : null}
      </Box>
    ))}
  </Box>
)

const withTableOfContents = Component => {
  const WithTableOfContents = props => {
    const {tableOfContents} = usePageContext()
    return tableOfContents ? <Component {...props} items={tableOfContents} /> : null
  }
  return WithTableOfContents
}

export const Mobile = withTableOfContents(({items}) => {
  const {getDetailsProps, open} = useDetails({})
  return (
    <Box sx={{display: ['block', null, 'none'], mb: 3}}>
      <Details {...getDetailsProps()}>
        <Text as="summary" sx={{fontWeight: 'bold'}}>
          <Octicon icon={open ? ChevronDownIcon : ChevronRightIcon} sx={{mr: 2}} />
          Table of contents
        </Text>
        <Box sx={{pt: 1}}>
          <TableOfContents items={items} />
        </Box>
      </Details>
    </Box>
  )
})

export const Desktop = withTableOfContents(({items}) => (
  <Box
    sx={{
      display: ['none', null, 'block'],
      position: 'sticky',
      top: `${HEADER_HEIGHT + 24}px`,
      maxHeight: `calc(100vh - ${HEADER_HEIGHT}px - 24px)`,
      mt: '6px',
      pr: 1,
      pl: 1,
      pb: 1,
      gridArea: 'table-of-contents',
      overflow: 'auto',
    }}
  >
    <Text id="table-of-content-label" sx={{display: 'inline-block', fontWeight: 'bold', mb: 1}}>
      Table of contents
    </Text>
    <TableOfContents items={items} labelId="table-of-content-label" />
  </Box>
))
