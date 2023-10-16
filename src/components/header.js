import React from 'react'
import {Box, Link} from '@primer/react'
import {Link as GatsbyLink} from 'gatsby'
import styled from 'styled-components'
import MobileSearch from './mobile-search'
import NavDrawer from './nav-drawer'
import Search from './search'
import useSearch from '../hooks/use-search'
import {HEADER_HEIGHT, NPM_RED} from '../constants'
import useSiteMetadata from '../hooks/use-site-metadata'
import headerNavItems from '../../content/header-nav.yml'

const NpmHeaderBar = styled(Box)`
  height: 10px;
  background-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);
`

const NpmLogo = ({size, style}) => (
  <svg
    height={size}
    width={size}
    viewBox="0 0 700 700"
    fill="currentColor"
    style={{color: NPM_RED, ...style}}
    aria-hidden="true"
  >
    <polygon fill={NPM_RED} points="0,700 700,700 700,0 0,0" />
    <polygon fill="#ffffff" points="150,550 350,550 350,250 450,250 450,550 550,550 550,150 150,150 " />
  </svg>
)

function Header() {
  const siteMetadata = useSiteMetadata()
  const search = useSearch()

  return (
    <Box sx={{top: 0, position: 'sticky', zIndex: 1}} role="banner">
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
          borderColor: 'border.muted',
        }}
      >
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Link
            as={GatsbyLink}
            to="/"
            sx={{
              mr: 4,
              fontWeight: 'bold',
              color: 'fg.default',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <NpmLogo size="32" sx={{mr: '16px'}} />
            {siteMetadata.title}
          </Link>
          <Box sx={{display: ['none', null, null, 'block'], ml: 4}}>
            <Search {...search} />
          </Box>
        </Box>
        <Box sx={{display: 'flex'}}>
          <Box sx={{display: ['none', null, null, 'block']}}>
            <Box sx={{display: 'flex', alignItems: 'center', color: 'gray.2'}}>
              {headerNavItems.map((item, index) => (
                <Link key={index} href={item.url} sx={{display: 'block', ml: 4}}>
                  {item.title}
                </Link>
              ))}
            </Box>
          </Box>
          <Box sx={{display: ['flex', null, null, 'none']}}>
            <MobileSearch {...search} />
            <NavDrawer />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
