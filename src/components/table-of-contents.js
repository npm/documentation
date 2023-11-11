import React from 'react'
import {Heading, Box, Details, useDetails, Button, NavList} from '@primer/react'
import {ChevronDownIcon, ChevronRightIcon} from '@primer/octicons-react'
import {SCROLL_MARGIN_TOP} from '../constants'
import usePage from '../hooks/use-page'

const TableOfContentsItems = ({items, depth}) => (
  <>
    {items.map(item => (
      <React.Fragment key={item.title}>
        <NavList.Item href={item.url} sx={{pl: depth > 1 ? 4 : 2}}>
          {item.title}
        </NavList.Item>
        {item.items ? <TableOfContentsItems items={item.items} depth={depth + 1} /> : null}
      </React.Fragment>
    ))}
  </>
)

const TableOfContents = ({'aria-labelledby': ariaLabelledBy, items, depth = 1, ...props}) => (
  <NavList aria-labelledby={ariaLabelledBy} {...props}>
    <TableOfContentsItems items={items} depth={depth} />
  </NavList>
)

const withTableOfContents = Component => {
  const WithTableOfContents = props => {
    const {tableOfContents} = usePage().pageContext
    return tableOfContents ? <Component {...props} items={tableOfContents} /> : null
  }
  return WithTableOfContents
}

export const Mobile = withTableOfContents(({items}) => {
  const {getDetailsProps, open} = useDetails({defaultOpen: true})
  return (
    <Box sx={{display: ['block', null, 'none'], mb: 3, mt: 4}}>
      <Details
        {...getDetailsProps()}
        sx={{
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: 'border.muted',
          borderRadius: 2,
        }}
      >
        <Button
          as="summary"
          sx={{
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: open ? 1 : 0,
            borderBottomLeftRadius: open ? 0 : 2,
            borderBottomRightRadius: open ? 0 : 2,
          }}
          leadingIcon={open ? ChevronDownIcon : ChevronRightIcon}
        >
          Table of contents
        </Button>
        <TableOfContents items={items} />
      </Details>
    </Box>
  )
})

export const Desktop = withTableOfContents(({items}) => (
  <Box
    sx={{
      width: 220,
      flex: '0 0 auto',
      marginLeft: [null, 7, 8, 9],
      display: ['none', null, 'block'],
      position: 'sticky',
      top: SCROLL_MARGIN_TOP,
      maxHeight: `calc(100vh - ${SCROLL_MARGIN_TOP}px)`,
    }}
  >
    <Heading as="h3" sx={{fontSize: 1, display: 'inline-block', fontWeight: 'bold'}} id="toc-heading">
      Table of contents
    </Heading>
    <Box
      sx={{
        // extra pixels to account for table of contents title height
        maxHeight: `calc(100% - 24px)`,
        overflowY: 'scroll',
      }}
    >
      <TableOfContents aria-labelledby="toc-heading" items={items} sx={{ml: -2}} />
    </Box>
  </Box>
))
