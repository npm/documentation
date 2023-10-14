import {Box, Flex} from '@primer/components'
import React from 'react'
import Container from '../components/container'
import Head from '../components/head'
import Header from '../components/header'
import Hero from '../components/hero'
import Sidebar from '../components/sidebar'
import * as Slugger from '../hooks/use-slugger'

function HeroLayout({children, pageContext, location}) {
  return (
    <Slugger.Provider>
      <Flex flexDirection="column" minHeight="100vh">
        <Head />
        <Header location={location} repositoryUrl={pageContext.repositoryUrl} />
        <Flex flex="1 1 auto" flexDirection="row" role="main">
          <Box display={['none', null, null, 'block']}>
            <Sidebar repositoryUrl={pageContext.repositoryUrl} location={location} />
          </Box>
          <Box width="100%">
            <Hero />
            <Container>{children}</Container>
          </Box>
        </Flex>
      </Flex>
    </Slugger.Provider>
  )
}

export default HeroLayout
