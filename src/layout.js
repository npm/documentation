import React from 'react'
import {Box, Heading, Text, ThemeProvider} from '@primer/react'
import {H1} from './mdx'
import PageFooter from './components/page-footer'
import * as TableOfContents from './components/table-of-contents'
import VariantSelect from './components/variant-select'
import Breadcrumbs from './components/breadcrumbs'
import Container from './components/container'
import {SKIP_NAV} from './constants'
import useSiteMetadata from './hooks/use-site-metadata'
import usePage from './hooks/use-page'

export const HeroLayout = ({children}) => {
  const {title, description} = useSiteMetadata()

  return (
    <Box sx={{width: '100%'}} {...SKIP_NAV}>
      <ThemeProvider colorMode="night" nightScheme="dark_dimmed">
        <Box sx={{bg: 'canvas.inset', py: 6}}>
          <Container>
            <Heading as="h1" sx={{color: 'fg.default', fontSize: 7, m: 0}}>
              {title}
            </Heading>
            <Text as="p" sx={{m: 0, color: 'fg.onEmphasis', fontSize: 4}}>
              {description}
            </Text>
          </Container>
        </Box>
      </ThemeProvider>
      <Container>{children}</Container>
    </Box>
  )
}

export const DefaultLayout = ({children}) => {
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
      <Box sx={{width: '100%', maxWidth: '960px'}}>
        <Box sx={{mb: 4}} {...SKIP_NAV}>
          <Breadcrumbs />
          <H1 autolink={false}>{title}</H1>
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

const getLayout = ({path}) => ({'/': HeroLayout})[path] ?? DefaultLayout

export default getLayout
