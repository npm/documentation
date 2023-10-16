import React from 'react'
import {Box, Text, Octicon, Details, useDetails} from '@primer/react'
import {ChevronDownIcon, ChevronRightIcon} from '@primer/octicons-react'
import {usePageContext} from '../layout'
import {HEADER_HEIGHT} from '../constants'
import {NavList} from '@primer/react/drafts'

const TableOfContentsItems = ({items}) => (
  <>
    {items.map(item => (
      <NavList.Item key={item.title} href={item.url}>
        {item.title}
        {item.items ? (
          <NavList.SubNav>
            <TableOfContentsItems items={item.items} />
          </NavList.SubNav>
        ) : null}
      </NavList.Item>
    ))}
  </>
)

const TableOfContents = ({'aria-labelledby': ariaLabelledBy, items}) => (
  <NavList aria-labelledby={ariaLabelledBy}>
    <TableOfContentsItems items={items} />
  </NavList>
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
      overflow: 'auto',
    }}
  >
    <Text id="table-of-content-label" sx={{display: 'inline-block', fontWeight: 'bold', mb: 1}}>
      Table of contents
    </Text>
    <TableOfContents items={items} aria-labelledby="table-of-content-label" />
  </Box>
))
