import React from 'react'
import {Heading, Text} from '@primer/react'
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

const Container = ({className, ...props}) => <div className={clsx(styles.Box, className)} {...props} />

const HeroLayout = ({children}) => {
  const {title, description} = useSiteMetadata()

  return (
    <main className={styles.Box_1}>
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
    </main>
  )
}

const DefaultLayout = ({children}) => {
  const {title, description} = usePage().frontmatter
  return (
    <div className={styles.Box_2}>
      <Container as="main">
        <div className={styles.Box_3}>
          <Breadcrumbs />
          <H1 autolink={false}>{title}</H1>
          {description ? <div className={styles.Box_4}>{description}</div> : null}
        </div>
        <SkipNav />
        <VariantSelect />
        <TableOfContents.Mobile />
        {children}
        <PageFooter />
      </Container>
      <TableOfContents.Desktop />
    </div>
  )
}

const Layout = ({children}) => React.createElement(usePage().path === '/' ? HeroLayout : DefaultLayout, null, children)

export default Layout
