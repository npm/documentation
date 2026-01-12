import React from 'react'
import {BaseStyles, themeGet} from '@primer/react'
import {createGlobalStyle} from 'styled-components'
import Slugger from 'github-slugger'
import Header from './components/header'
import Sidebar from './components/sidebar'
import {SkipBox, SkipLink} from './components/skip-nav'
import {
  SKIP_TO_CONTENT_ID,
  SKIP_TO_SEARCH_ID,
  HEADER_HEIGHT,
  HEADER_BAR,
  FULL_HEADER_HEIGHT,
  SCROLL_MARGIN_TOP,
  Z_INDEX,
} from './constants'

import {PageProvider} from './hooks/use-page'
import Layout from './layout'

import * as styles from './page.module.css'

const GlobalStyles = createGlobalStyle`
  :root {
    --header-height: ${HEADER_HEIGHT}px;
    --header-bar: ${HEADER_BAR}px;
    --full-header-height: ${FULL_HEADER_HEIGHT}px;
    --scroll-margin-top: ${SCROLL_MARGIN_TOP}px;
    --z-index-header: ${Z_INDEX.HEADER};
    --z-index-search-overlay: ${Z_INDEX.SEARCH_OVERLAY};
  }
  body {
    color: ${themeGet('colors.fg.default')};
    background-color: ${themeGet('colors.canvas.default')};
  }
`

const PageElement = ({element, props}) => {
  const page = {
    pageContext: props.pageContext,
    frontmatter: props.pageContext?.frontmatter || {},
    location: props.location,
    path: props.location.pathname,
    slugger: new Slugger(),
  }
  return (
    <BaseStyles>
      <GlobalStyles />
      <SkipBox>
        <SkipLink href={`#${SKIP_TO_SEARCH_ID}`}>Skip to search</SkipLink>
        <SkipLink href={`#${SKIP_TO_CONTENT_ID}`}>Skip to content</SkipLink>
      </SkipBox>
      <PageProvider value={page}>
        <div className={styles.Box}>
          <Header />
          <div className={styles.Box_1}>
            <div className={styles.sidebarContainer}>
              <Sidebar />
            </div>
            <Layout>{element}</Layout>
          </div>
        </div>
      </PageProvider>
    </BaseStyles>
  )
}

export default PageElement
