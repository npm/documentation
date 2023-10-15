import React from 'react'
import {Box, Link} from '@primer/react'
import {Link as GatsbyLink} from 'gatsby'
import styled from 'styled-components'
import MobileSearch from './mobile-search'
import NavDrawer from './nav-drawer'
import Search from './search'
import NpmLogo from './npm-logo'
import useSearch from '../hooks/use-search'
import useSiteMetadata from '../hooks/use-site-metadata'
import headerNavItems from '../header-nav.yml'
import {HEADER_HEIGHT} from '../constants'

const NpmHeaderBar = styled(Box)`
  height: 10px;
  background-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);
`

function Header() {
  const siteMetadata = useSiteMetadata()
  const search = useSearch()

  return (
    <Box position="sticky" top={0} sx={{zIndex: 1}} role="banner">
      <NpmHeaderBar />
      <Box
        display="flex"
        height={HEADER_HEIGHT}
        px={[3, null, null, 4]}
        alignItems="center"
        justifyContent="space-between"
        bg="#333333"
      >
        <Box display="flex" alignItems="center">
          <Link
            as={GatsbyLink}
            to="/"
            style={{
              color: '#dddddd',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
            }}
            sx={{mr: 4}}
          >
            <NpmLogo size="32" style={{color: '#cb0000', marginRight: '16px'}} />
            {siteMetadata.title}
          </Link>
          <Box display={['none', null, null, 'block']} ml={4}>
            <Search {...search} />
          </Box>
        </Box>
        <Box display="flex">
          <Box display={['none', null, null, 'block']}>
            <Box display="flex" alignItems="center" color="gray.2">
              {headerNavItems.map((item, index) => (
                <Link key={index} href={item.url} sx={{display: 'block', color: 'inherit', ml: 4}}>
                  {item.title}
                </Link>
              ))}
            </Box>
          </Box>
          <Box display={['flex', null, null, 'none']}>
            <MobileSearch {...search} />
            <NavDrawer />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
