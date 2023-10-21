import {Box, Link} from '@primer/react'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import headerNavItems from '../header-nav.yml'
import useSiteMetadata from '../hooks/use-site-metadata'
import MobileSearch from './mobile-search'
import NavDrawer from './nav-drawer'
import Search from './search'
import NpmLogo from './npm-logo'
import useSearch from '../hooks/use-search'
import Flex from '../components/flex'

export const HEADER_HEIGHT = 66

const NpmHeaderBar = styled(Box)`
  height: 10px;
  background-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);
`

function Header({location, repositoryUrl}) {
  const siteMetadata = useSiteMetadata()
  const search = useSearch()

  const logoStyle = {color: '#cb0000', marginRight: '16px'}
  const titleStyle = {color: '#dddddd', fontWeight: '600', display: 'flex', alignItems: 'center'}

  return (
    <Box position="sticky" role="banner">
      <NpmHeaderBar />
      <Flex
        height={HEADER_HEIGHT}
        px={[3, null, null, 4]}
        alignItems="center"
        justifyContent="space-between"
        bg="#333333"
      >
        <Flex alignItems="center">
          <Link as={GatsbyLink} to="/" style={titleStyle} mr={4}>
            <NpmLogo size="32" style={logoStyle} />
            {siteMetadata.title}
          </Link>
          <Box display={['none', null, null, 'block']} ml={4}>
            <Search {...search} />
          </Box>
        </Flex>
        <Flex>
          <Box display={['none', null, null, 'block']}>
            <HeaderNavItems items={headerNavItems} />
          </Box>
          <Flex display={['flex', null, null, 'none']}>
            <MobileSearch {...search} />
            <NavDrawer location={location} repositoryUrl={repositoryUrl} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

function HeaderNavItems({items}) {
  return (
    <Flex alignItems="center" color="gray.2">
      {items.map((item, index) => (
        <Link key={index} href={item.url} display="block" color="inherit" ml={4}>
          {item.title}
        </Link>
      ))}
    </Flex>
  )
}

export default Header
