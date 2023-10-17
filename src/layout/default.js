import React from 'react'
import {Box} from '@primer/react'
import PageFooter from '../components/page-footer'
import * as TableOfContents from '../components/table-of-contents'
import VariantSelect from '../components/variant-select'
import Breadcrumbs from '../components/breadcrumbs'
import withLayout from '../layout'
import {SKIP_NAV} from '../constants'
import {H1} from '../mdx'

const Layout = ({children, pageContext: {frontmatter}}) => {
  const {title, description} = frontmatter

  return (
    <Box
      sx={{
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        display: 'flex',
        maxWidth: '1200px',
        mx: 'auto',
        width: '100%',
        p: [4, 5, 6, 7],
      }}
    >
      <TableOfContents.Desktop />
      <Box sx={{width: '100%', maxWidth: '960px'}}>
        <Box sx={{mb: 4}} {...SKIP_NAV}>
          <Breadcrumbs />
          <H1>{title}</H1>
          {description ? <Box sx={{fontSize: 3, mb: 3}}>{description}</Box> : null}
        </Box>
        <VariantSelect />
        <TableOfContents.Mobile />
        {children}
        <PageFooter />
      </Box>
    </Box>
  )
}

export default withLayout(Layout)
