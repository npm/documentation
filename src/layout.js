import React from 'react'
import {Box, Heading, Text} from '@primer/react'
import {h1 as H1} from './mdx'
import PageFooter from './components/page-footer'
import * as TableOfContents from './components/table-of-contents'
import VariantSelect from './components/variant-select'
import Breadcrumbs from './components/breadcrumbs'
import Container from './components/container'
import useSiteMetadata from './hooks/use-site-metadata'
import usePage from './hooks/use-page'
import {DarkTheme} from './theme'
import {SkipNav} from './components/skip-nav'

const HeroLayout = ({children}) => {
  const {title, description} = useSiteMetadata()

  return (
    <Box as="main" sx={{width: '100%'}}>
      <DarkTheme sx={{bg: 'canvas.inset', py: 6}}>
        <Container>
          <Heading as="h1" sx={{color: 'fg.default', fontSize: 7, m: 0}}>
            {title}
          </Heading>
          <Text as="p" sx={{m: 0, color: 'fg.onEmphasis', fontSize: 4}}>
            {description}
          </Text>
        </Container>
      </DarkTheme>
      <SkipNav />
      <Container>{children}</Container>
    </Box>
  )
}

const DefaultLayout = ({children}) => {
  const {title, description} = usePage().frontmatter
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
      <Box as="main" sx={{width: '100%', maxWidth: '960px'}}>
        <Box sx={{mb: 4}}>
          <Breadcrumbs />
          <H1 autolink={false}>{title}</H1>
          {description ? <Box sx={{fontSize: 3, mb: 3}}>{description}</Box> : null}
        </Box>
        <SkipNav />
        <VariantSelect />
        <TableOfContents.Mobile />
        {children}
        <PageFooter />
      </Box>
    </Box>
  )
}

const Layout = ({children}) => React.createElement(usePage().path === '/' ? HeroLayout : DefaultLayout, null, children)

export default Layout
