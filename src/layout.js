import React from 'react'
import {Helmet} from 'react-helmet'
import {Box} from '@primer/react'
import Slugger from 'github-slugger'
import Header from './components/header'
import Sidebar from './components/sidebar'
import useSiteMetdata from './hooks/use-site-metadata'

const SluggerContext = React.createContext(null)
const PageContext = React.createContext(null)
const LocationContext = React.createContext(null)

export const useSlugger = () => React.useContext(SluggerContext)
export const usePageContext = () => React.useContext(PageContext)
export const useLocation = () => React.useContext(LocationContext)

const Head = () => {
  const {frontmatter = {}} = usePageContext()
  const siteMetadata = useSiteMetdata()

  const title = [frontmatter.title, siteMetadata.title].filter(Boolean).join(' | ')
  const description = frontmatter.description || siteMetadata.description
  const lang = frontmatter.lang || siteMetadata.lang

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteMetadata.imageUrl} />
      <meta property="twitter:card" content="summary_large_image" />
      <html lang={lang} />
    </Helmet>
  )
}

const withLayout = Component => {
  const LayoutProvider = props => (
    <SluggerContext.Provider value={new Slugger()}>
      <PageContext.Provider value={props.pageContext}>
        <LocationContext.Provider value={props.location}>
          <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Head />
            <Header />
            <Box sx={{zIndex: 0, display: 'flex', flex: '1 1 auto', flexDirection: 'row'}} role="main">
              <Box sx={{display: ['none', null, null, 'block']}}>
                <Sidebar />
              </Box>
              <Component {...props} />
            </Box>
          </Box>
        </LocationContext.Provider>
      </PageContext.Provider>
    </SluggerContext.Provider>
  )
  return LayoutProvider
}

export default withLayout
