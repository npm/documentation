import {Box, Heading, Text} from '@primer/components'
import React from 'react'
import useSiteMetadata from '../use-site-metadata'
import Container from './container'

function Hero() {
  const {title, description} = useSiteMetadata()

  return (
    <Box bg="black" py={6}>
      <Container>
        <Heading as="h1" color="white" fontSize={7} m={0}>
          {title}
        </Heading>
        <Text as="p" m={0} color="gray.4" fontSize={4}>
          {description}
        </Text>
      </Container>
    </Box>
  )
}

export default Hero
