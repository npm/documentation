import React from 'react'
import {Box} from '@primer/react'
import Slugger from 'github-slugger'
import Head from './components/head'
import Header from './components/header'
import Sidebar from './components/sidebar'
import {SKIP_NAV} from './constants'

const SluggerContext = React.createContext(null)
const PageContext = React.createContext(null)
const LocationContext = React.createContext(null)

export const useSlugger = () => React.useContext(SluggerContext)
export const usePageContext = () => React.useContext(PageContext)
export const useLocation = () => React.useContext(LocationContext)
export const useFrontmatter = () => {
  const pageContext = usePageContext()
  return pageContext.frontmatter || {}
}

const withLayout = Component => {
  const LayoutProvider = props => (
    <SluggerContext.Provider value={new Slugger()}>
      <PageContext.Provider value={props.pageContext}>
        <LocationContext.Provider value={props.location}>
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <Head />
            <Header />
            <Box display="flex" flex="1 1 auto" flexDirection="row" css={{zIndex: 0}} role="main">
              <Box display={['none', null, null, 'block']}>
                <Sidebar />
              </Box>
              <Box id={SKIP_NAV}>
                <Component {...props} />
              </Box>
            </Box>
          </Box>
        </LocationContext.Provider>
      </PageContext.Provider>
    </SluggerContext.Provider>
  )
  return LayoutProvider
}

export default withLayout
