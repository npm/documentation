import { Box, Flex, Link, Sticky } from '@primer/components'
import {
  SearchIcon,
  ThreeBarsIcon,
} from '@primer/octicons-react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import styled, { ThemeContext } from 'styled-components'
import headerNavItems from '../header-nav.yml'
import useSiteMetadata from '../use-site-metadata'
import DarkButton from './dark-button'
import MobileSearch from './mobile-search'
import NavDrawer, { useNavDrawerState } from './nav-drawer'
import NavDropdown, { NavDropdownItem } from './nav-dropdown'
import Search from './search'
import NpmLogo from './npm-logo'

export const HEADER_HEIGHT = 66

const NpmHeaderBar = styled(Box)`
  height: 10px;
  background-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);
`

function Header ({ location, isSearchEnabled = true }) {
  const theme = React.useContext(ThemeContext)
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useNavDrawerState(
    theme.breakpoints[2]
  )
  const [isMobileSearchOpen, setIsMobileSearchOpen] = React.useState(false)
  const siteMetadata = useSiteMetadata()

  const logoStyle = { color: '#cb0000', marginRight: '16px' }
  const titleStyle = { color: '#dddddd', fontWeight: '600', display: 'flex', alignItems: 'center' }

  return (
    <Sticky role="banner">
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

          {isSearchEnabled ? (
            <Box display={['none', null, null, 'block']} ml={4}>
              <Search />
            </Box>
          ) : null}
        </Flex>
        <Flex>
          <Box display={['none', null, null, 'block']}>
            <HeaderNavItems items={headerNavItems} />
          </Box>
          <Flex display={['flex', null, null, 'none']}>
            {isSearchEnabled ? (
              <>
                <DarkButton
                  aria-label="Search"
                  aria-expanded={isMobileSearchOpen}
                  onClick={() => setIsMobileSearchOpen(true)}
                >
                  <SearchIcon />
                </DarkButton>
                <MobileSearch
                  isOpen={isMobileSearchOpen}
                  onDismiss={() => setIsMobileSearchOpen(false)}
                />
              </>
            ) : null}
            <DarkButton
              aria-label="Menu"
              aria-expanded={isNavDrawerOpen}
              onClick={() => setIsNavDrawerOpen(true)}
              ml={3}
            >
              <ThreeBarsIcon />
            </DarkButton>
            <NavDrawer
              location={location}
              isOpen={isNavDrawerOpen}
              onDismiss={() => setIsNavDrawerOpen(false)}
            />
          </Flex>
        </Flex>
      </Flex>
    </Sticky>
  )
}

function HeaderNavItems ({ items }) {
  return (
    <Flex alignItems="center" color="gray.2">
      {items.map((item, index) => {
        if (item.children) {
          return (
            <Box ml={4} key={index}>
              <NavDropdown title={item.title}>
                {item.children.map((child) => (
                  <NavDropdownItem key={child.title} href={child.url}>
                    {child.title}
                  </NavDropdownItem>
                ))}
              </NavDropdown>
            </Box>
          )
        }

        return (
          <Link
            key={index}
            href={item.url}
            display="block"
            color="inherit"
            ml={4}
          >
            {item.title}
          </Link>
        )
      })}
    </Flex>
  )
}

export default Header
