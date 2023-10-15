import React from 'react'
import {Box, Link, Text, Octicon, Details} from '@primer/react'
import {ChevronDownIcon, ChevronRightIcon} from '@primer/octicons-react'
import {usePageContext} from '../layout'
import {HEADER_HEIGHT} from '../constants'

const TableOfContents = ({items, depth = 0, labelId}) => (
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
        <Link key={item.title} href={item.url} sx={{display: 'inline-block', py: 1, color: 'gray.6'}}>
          {item.title}
        </Link>
        {item.items ? <TableOfContents items={item.items} depth={depth + 1} /> : null}
      </Box>
    ))}
  </Box>
)

const withTableOfContent = Component => {
  const TOC = props => {
    const {tableOfContents} = usePageContext()
    if (!tableOfContents) {
      return null
    }
    return <Component {...props} items={tableOfContents} />
  }
  return TOC
}

export const Mobile = withTableOfContent(({items}) => (
  <Box display={['block', null, 'none']} mb={3}>
    <Details>
      {({open}) => (
        <>
          <Text as="summary" fontWeight="bold">
            <Octicon icon={open ? ChevronDownIcon : ChevronRightIcon} mr={2} />
            Table of contents
          </Text>
          <Box pt={1}>
            <TableOfContents items={items} />
          </Box>
        </>
      )}
    </Details>
  </Box>
))

export const Desktop = withTableOfContent(({items}) => (
  <Box
    display={['none', null, 'block']}
    css={{gridArea: 'table-of-contents', overflow: 'auto'}}
    position="sticky"
    top={HEADER_HEIGHT + 24}
    mt="6px"
    maxHeight={`calc(100vh - ${HEADER_HEIGHT}px - 24px)`}
    pr={1}
    pl={1}
    pb={1}
  >
    <Text display="inline-block" fontWeight="bold" mb={1} id="table-of-content-label">
      Table of contents
    </Text>
    <TableOfContents items={items} labelId="table-of-content-label" />
  </Box>
))
