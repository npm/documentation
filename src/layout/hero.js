import React from 'react'
import {Box} from '@primer/react'
import Container from '../components/container'
import Hero from '../components/hero'
import withLayout from '../layout'
import {SKIP_NAV} from '../constants'

const HeroLayout = ({children}) => (
  <Box sx={{width: '100%'}} {...SKIP_NAV}>
    <Hero />
    <Container>{children}</Container>
  </Box>
)

export default withLayout(HeroLayout)
