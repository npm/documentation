import React from 'react'
import {BaseStyles, themeGet, Box} from '@primer/react'
import styled, {createGlobalStyle} from 'styled-components'
import {SKIP_NAV} from './constants'
import Slugger from 'github-slugger'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Link from './components/link'
import {PageProvider} from './hooks/use-page'
import Layout from './layout'

const SkipLinkBase = props => (
  <Link
    {...props}
    href={`#${SKIP_NAV.id}`}
    sx={{
      p: 3,
      color: 'fg.onEmphasis',
      backgroundColor: 'accent.emphasis',
      fontSize: 1,
    }}
  >
    Skip to content
  </Link>
)

// The following rules are to ensure that the element
// is visually hidden, unless it has focus. This is the recommended
// way to hide content from:
// https://webaim.org/techniques/css/invisiblecontent/#techniques
export const SkipLink = styled(SkipLinkBase)`
  z-index: 20;
  width: auto;
  height: auto;
  clip: auto;
  position: absolute;
  overflow: hidden;

  &:not(:focus) {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
  }
`

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
