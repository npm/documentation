import React from 'react'
import {Box, Heading} from '@primer/react'
import PageFooter from '../components/page-footer'
import * as TableOfContents from '../components/table-of-contents'
import VariantSelect from '../components/variant-select'
import Breadcrumbs from '../components/breadcrumbs'
import withLayout from '../layout'
import {SKIP_NAV} from '../constants'

const Layout = ({children, pageContext: {frontmatter}}) => {
  const {title, description} = frontmatter

  return (
    <Box
      role="region"
      sx={{
        display: 'grid',
        maxWidth: '100%',
        gridTemplateColumns: ['100%', null, 'minmax(0, 65ch) 220px'],
        gridTemplateAreas: ['"heading" "content"', null, '"heading table-of-contents" "content table-of-contents"'],
        columnGap: [null, null, 6, 7],
        rowGap: 3,
        mx: 'auto',
        p: [5, 6, null, 7],
        alignItems: 'start',
        alignSelf: 'start',
      }}
    >
      <Box css={{gridArea: 'table-of-contents'}}>
        <TableOfContents.Desktop />
      </Box>
      <Box css={{gridArea: 'heading'}}>
        <Box {...SKIP_NAV} sx={{mb: 4}}>
          <Breadcrumbs />
          <Heading as="h1" sx={{fontSize: 7}}>
            {title}
          </Heading>
          {description ? <Box sx={{fontSize: 3, mb: 3}}>{description}</Box> : null}
        </Box>
        <VariantSelect />
      </Box>
      <Box css={{gridArea: 'content'}}>
        <TableOfContents.Mobile />
        {children}
        <PageFooter />
      </Box>
    </Box>
  )
}

export default withLayout(Layout)
