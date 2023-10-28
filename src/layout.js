import React from 'react'
import {Box, Heading, Text} from '@primer/react'
import {h1 as H1} from './mdx'
import PageFooter from './components/page-footer'
import * as TableOfContents from './components/table-of-contents'
import VariantSelect from './components/variant-select'
import Breadcrumbs from './components/breadcrumbs'
import useSiteMetadata from './hooks/use-site-metadata'
import usePage from './hooks/use-page'
import {DarkTheme} from './theme'
import {SkipNav} from './components/skip-nav'

const Container = ({sx, ...props}) => <Box sx={{width: '100%', maxWidth: '960px', ...sx}} {...props} />

const HeroLayout = ({children}) => {
  const {title, description} = useSiteMetadata()

  return (
    <Box as="main" sx={{width: '100%'}}>
      <DarkTheme sx={{bg: 'canvas.inset', py: [0, 4, 5, 6]}}>
        <Container sx={{p: 5, mx: 'auto'}}>
          <Heading as="h1" sx={{color: 'fg.default', fontSize: 7, m: 0}}>
            {title}
          </Heading>
          <Text as="p" sx={{m: 0, color: 'fg.onEmphasis', fontSize: 4}}>
            {description}
          </Text>
        </Container>
      </DarkTheme>
      <SkipNav />
      <Container sx={{p: 5, mx: 'auto'}}>{children}</Container>
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
      <Container as="main">
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
      </Container>
    </Box>
  )
}

const Layout = ({children}) => React.createElement(usePage().path === '/' ? HeroLayout : DefaultLayout, null, children)

export default Layout
