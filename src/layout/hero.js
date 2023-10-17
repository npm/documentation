import React from 'react'
import {Box, Heading, Text, ThemeProvider} from '@primer/react'
import Container from '../components/container'
import withLayout from '../layout'
import {SKIP_NAV} from '../constants'
import useSiteMetadata from '../hooks/use-site-metadata'

const HeroLayout = ({children}) => {
  const {title, description} = useSiteMetadata()

  return (
    <Box sx={{width: '100%'}} {...SKIP_NAV}>
      <ThemeProvider colorMode="night" nightScheme="dark_dimmed">
        <Box sx={{bg: 'canvas.inset', py: 6}}>
          <Container>
            <Heading as="h1" sx={{color: 'fg.default', fontSize: 7, m: 0}}>
              {title}
            </Heading>
            <Text as="p" sx={{m: 0, color: 'fg.onEmphasis', fontSize: 4}}>
              {description}
            </Text>
          </Container>
        </Box>
      </ThemeProvider>
      <Container>{children}</Container>
    </Box>
  )
}

export default withLayout(HeroLayout)
