import {Box} from '@primer/react'
import React from 'react'
import navItems from '../nav.yml'
import {HEADER_HEIGHT} from './header'
import NavItems from './nav-items'
import BorderBox from './border-box'
import Flex from '../components/flex'

function Sidebar({location, repositoryUrl}) {
  return (
    <Box
      position="sticky"
      top={HEADER_HEIGHT}
      height={`calc(100vh - ${HEADER_HEIGHT}px)`}
      minWidth={260}
      color="gray.8"
      bg="gray.0"
      role="navigation"
    >
      <BorderBox borderWidth={0} borderRightWidth={1} borderRadius={0} height="100%" style={{overflow: 'auto'}}>
        <Flex flexDirection="column" role="list">
          <NavItems location={location} items={navItems} repositoryUrl={repositoryUrl} />
        </Flex>
      </BorderBox>
    </Box>
  )
}

export default Sidebar
