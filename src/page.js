import React from 'react'
import {BaseStyles, themeGet, Box} from '@primer/react'
import {createGlobalStyle} from 'styled-components'
import Slugger from 'github-slugger'
import Header from './components/header'
import Sidebar from './components/sidebar'
import {SkipLink} from './components/skip-nav'

import {PageProvider} from './hooks/use-page'
import Layout from './layout'

const GlobalStyles = createGlobalStyle`
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
      <SkipLink />
      <PageProvider value={page}>
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
          <Header />
          <Box sx={{zIndex: 0, display: 'flex', flex: '1 1 auto', flexDirection: 'row'}} role="main">
            <Box sx={{display: ['none', null, null, 'block']}}>
              <Sidebar />
            </Box>
            <Layout>{element}</Layout>
          </Box>
        </Box>
      </PageProvider>
    </BaseStyles>
  )
}

export default PageElement
