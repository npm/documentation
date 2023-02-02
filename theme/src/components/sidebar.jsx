import { BorderBox, Flex, Position } from '@primer/components'
import React from 'react'
import navItems from '../nav.yml'
import { HEADER_HEIGHT } from './header'
import NavItems from './nav-items'

function Sidebar ({ location, editOnGitHub }) {
  return (
    <Position
      position="sticky"
      top={HEADER_HEIGHT}
      height={`calc(100vh - ${HEADER_HEIGHT}px)`}
      minWidth={260}
      color="gray.8"
      bg="gray.0"
      role="navigation"
    >
      <BorderBox
        borderWidth={0}
        borderRightWidth={1}
        borderRadius={0}
        height="100%"
        style={{ overflow: 'auto' }}
      >
        <Flex flexDirection="column" role="list">
          <NavItems location={location} items={navItems} editOnGitHub={editOnGitHub} />
        </Flex>
      </BorderBox>
    </Position>
  )
}

export default Sidebar
