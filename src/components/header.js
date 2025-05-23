import React from 'react'
import {Box} from '@primer/react'
import styled from 'styled-components'
import * as Search from './search'
import NavDrawer from './nav-drawer'
import Link from './link'
import useSearch from '../hooks/use-search'
import {HEADER_HEIGHT, HEADER_BAR} from '../constants'
import headerNavItems from '../../content/header-nav.yml'
import {DarkTheme} from '../theme'
import SiteTitle from './site-title'

const NpmHeaderBar = styled(Box)`
  height: ${HEADER_BAR}px;
  background-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);
`

function Header() {
  const search = useSearch()

  return (
    <DarkTheme sx={{top: 0, position: 'sticky', zIndex: 1}}>
      <NpmHeaderBar />
      <Box
        as="header"
        sx={{
          display: 'flex',
          height: `${HEADER_HEIGHT}px`,
          px: [3, null, null, 4],
          alignItems: 'center',
          justifyContent: 'space-between',
          bg: 'canvas.default',
          border: '1px solid',
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderColor: 'border.muted',
        }}
      >
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <SiteTitle logo={true} sx={{mr: 4}} />
          <Box sx={{display: ['none', null, null, 'block'], ml: 4}}>
            <Search.Desktop {...search} />
          </Box>
        </Box>
        <Box sx={{display: 'flex'}}>
          <Box sx={{display: ['none', null, null, 'flex'], alignItems: 'center'}}>
            {headerNavItems.map((item, index) => (
              <Link key={index} href={item.url} sx={{display: 'block', ml: 4, color: 'fg.default'}}>
                {item.title}
              </Link>
            ))}
          </Box>
          <Box sx={{display: ['flex', null, null, 'none']}}>
            <Search.Mobile {...search} />
            <NavDrawer />
          </Box>
        </Box>
      </Box>
    </DarkTheme>
  )
}

export default Header
