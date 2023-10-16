import {Box} from '@primer/react'
import React from 'react'
import NavItems from './nav-items'
import {HEADER_HEIGHT} from '../constants'

const Sidebar = () => (
  <Box
    role="navigation"
    sx={{
      position: 'sticky',
      top: `${HEADER_HEIGHT}px`,
      height: `calc(100vh - ${HEADER_HEIGHT}px)`,
      minWidth: 260,
      color: 'gray.8',
      bg: 'gray.0',
    }}
  >
    <Box
      sx={{
        borderStyle: 'solid',
        borderColor: 'border.default',
        borderWidth: 0,
        borderRightWidth: 1,
        borderRadius: 0,
        height: '100%',
        overflow: 'auto',
      }}
    >
      <Box sx={{display: 'flex', flexDirection: 'column'}} role="list">
        <NavItems />
      </Box>
    </Box>
  </Box>
)

export default Sidebar
