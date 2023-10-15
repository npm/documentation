import React from 'react'
import {Box} from '@primer/react'
import Container from '../components/container'
import Head from '../components/head'
import Header from '../components/header'
import Hero from '../components/hero'
import Sidebar from '../components/sidebar'
import * as Slugger from '../hooks/use-slugger'

const HeroLayout = ({children, location, pageContext: {repositoryUrl}}) => (
  <Slugger.Provider>
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Head />
      <Header location={location} repositoryUrl={repositoryUrl} />
      <Box display="flex" flex="1 1 auto" flexDirection="row" role="main">
        <Box display={['none', null, null, 'block']}>
          <Sidebar repositoryUrl={repositoryUrl} location={location} />
        </Box>
        <Box width="100%">
          <Hero />
          <Container>{children}</Container>
        </Box>
      </Box>
    </Box>
  </Slugger.Provider>
)

export default HeroLayout
