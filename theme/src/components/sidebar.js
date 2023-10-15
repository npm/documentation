import {Box} from '@primer/react'
import React from 'react'
import {HEADER_HEIGHT} from './header'
import NavItems from './nav-items'
import navItems from '../nav.yml'

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
      <Box
        borderStyle="solid"
        borderColor="border.default"
        borderWidth={0}
        borderRightWidth={1}
        borderRadius={0}
        height="100%"
        style={{overflow: 'auto'}}
      >
        <Box display="flex" flexDirection="column" role="list">
          <NavItems location={location} items={navItems} repositoryUrl={repositoryUrl} />
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
