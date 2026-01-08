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

import * as styles from './layout.module.css'
import {clsx} from 'clsx'

const Container = ({className, ...props}) => <Box className={clsx(styles.Box, className)} {...props} />

const HeroLayout = ({children}) => {
  const {title, description} = useSiteMetadata()

  return (
    <Box as="main" className={styles.Box_1}>
      <DarkTheme className={styles.DarkTheme}>
        <Container className={styles.Container}>
          <Heading as="h1" className={styles.Heading}>
            {title}
          </Heading>
          <Text as="p" className={styles.Text}>
            {description}
          </Text>
        </Container>
      </DarkTheme>
      <SkipNav />
      <Container className={styles.Container}>{children}</Container>
    </Box>
  )
}

const DefaultLayout = ({children}) => {
  const {title, description} = usePage().frontmatter
  return (
    <Box className={styles.Box_2}>
      <Container as="main">
        <Box className={styles.Box_3}>
          <Breadcrumbs />
          <H1 autolink={false}>{title}</H1>
          {description ? <Box className={styles.Box_4}>{description}</Box> : null}
        </Box>
        <SkipNav />
        <VariantSelect />
        <TableOfContents.Mobile />
        {children}
        <PageFooter />
      </Container>
      <TableOfContents.Desktop />
    </Box>
  )
}

const Layout = ({children}) => React.createElement(usePage().path === '/' ? HeroLayout : DefaultLayout, null, children)

export default Layout
