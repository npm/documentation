import React from 'react'
import {Box} from '@primer/react'
import styled from 'styled-components'
import * as Search from './search'
import NavDrawer from './nav-drawer'
import Link from './link'
import useSearch from '../hooks/use-search'
import {HEADER_HEIGHT, HEADER_BAR} from '../constants'
import useSiteMetadata from '../hooks/use-site-metadata'
import headerNavItems from '../../content/header-nav.yml'
import {DarkTheme} from '../theme'

const NpmHeaderBar = styled(Box)`
  height: ${HEADER_BAR}px;
  background-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);
`

const NpmLogo = ({size, sx}) => (
  <Box sx={{...sx, color: 'logoBg'}} role="banner">
    <svg height={size} width={size} viewBox="0 0 700 700" fill="currentColor" aria-hidden="true">
      <polygon fill="currentColor" points="0,700 700,700 700,0 0,0" />
      <polygon fill="#ffffff" points="150,550 350,550 350,250 450,250 450,550 550,550 550,150 150,150 " />
    </svg>
  </Box>
)

function Header() {
  const siteMetadata = useSiteMetadata()
  const search = useSearch()

  return (
    <DarkTheme>
      <Box sx={{top: 0, position: 'sticky', zIndex: 1}}>
        <NpmHeaderBar />
        <Box
          as="header"
          sx={{
            display: 'flex',
            height: HEADER_HEIGHT,
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
            <Link
              to="/"
              sx={{
                mr: 4,
                fontWeight: 'bold',
                color: 'fg.default',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <NpmLogo size="32" sx={{display: 'flex', mr: 3}} />
              {siteMetadata.title}
            </Link>
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
      </Box>
    </DarkTheme>
  )
}

export default Header
