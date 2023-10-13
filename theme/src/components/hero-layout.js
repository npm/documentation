import {Box, Flex} from '@primer/components'
import React from 'react'
import Container from './container'
import PageFooter from './page-footer'
import Head from './head'
import Header from './header'
import Hero from './hero'
import Sidebar from './sidebar'
import * as Slugger from '../use-slugger'

function HeroLayout({children, pageContext, location}) {
  const {additionalContributors = []} = pageContext.frontmatter

  return (
    <Slugger.Provider>
      <Flex flexDirection="column" minHeight="100vh">
        <Head />
        <Header
          location={location}
          repositoryUrl={pageContext.repositoryUrl}
          isSearchEnabled={pageContext.isSearchEnabled}
        />
        <Flex flex="1 1 auto" flexDirection="row" role="main">
          <Box display={['none', null, null, 'block']}>
            <Sidebar repositoryUrl={pageContext.repositoryUrl} location={location} />
          </Box>
          <Box width="100%">
            <Hero />
            <Container>
              {children}
              <PageFooter
                editUrl={pageContext.themeOptions.editUrl}
                contributors={pageContext.contributors.concat(additionalContributors.map(login => ({login})))}
              />
            </Container>
          </Box>
        </Flex>
      </Flex>
    </Slugger.Provider>
  )
}

export default HeroLayout
