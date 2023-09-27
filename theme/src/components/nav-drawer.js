import {BorderBox, Flex, Link} from '@primer/components'
import {XIcon, ThreeBarsIcon} from '@primer/octicons-react'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import navItems from '../nav.yml'
import headerNavItems from '../header-nav.yml'
import useSiteMetadata from '../use-site-metadata'
import DarkButton from './dark-button'
import Drawer from './drawer'
import NavItems from './nav-items'
import {useIsMobile} from '../use-breakpoint'

const useDrawerIsOpen = () => {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = React.useState(false)
  const setOpen = React.useCallback(() => setIsOpen(true), [])
  const setClose = React.useCallback(() => setIsOpen(false), [])

  React.useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false)
    }
  }, [isMobile, isOpen])

  return [isOpen, {setOpen, setClose}]
}

function NavDrawer({location}) {
  const siteMetadata = useSiteMetadata()
  const [isOpen, {setOpen, setClose}] = useDrawerIsOpen()

  return (
    <>
      <DarkButton aria-label="Menu" aria-expanded={isOpen} onClick={setOpen} ml={3}>
        <ThreeBarsIcon />
      </DarkButton>
      <Drawer isOpen={isOpen} onDismiss={setClose}>
        <Flex
          flexDirection="column"
          height="100%"
          bg="gray.0"
          style={{overflow: 'auto', WebkitOverflowScrolling: 'touch'}}
        >
          <Flex flexDirection="column" flex="1 0 auto" color="gray.7" bg="gray.0">
            <BorderBox borderWidth={0} borderRadius={0} borderBottomWidth={1} borderColor="gray.7">
              <Flex py={3} pl={4} pr={3} alignItems="center" justifyContent="space-between" color="gray.1" bg="gray.9">
                <Link as={GatsbyLink} to="/" display="inline-block" color="inherit">
                  {siteMetadata.title}
                </Link>
                <DarkButton aria-label="Close" onClick={setClose}>
                  <XIcon />
                </DarkButton>
              </Flex>
            </BorderBox>
            {navItems.length > 0 ? (
              <Flex flexDirection="column">
                <NavItems location={location} items={navItems} editOnGitHub={false} />
              </Flex>
            ) : null}
          </Flex>
          {headerNavItems.length > 0 ? (
            <Flex flexDirection="column" flex="1 0 auto" color="gray.1" bg="gray.9">
              <HeaderNavItems items={headerNavItems} />
            </Flex>
          ) : null}
        </Flex>
      </Drawer>
    </>
  )
}

function HeaderNavItems({items}) {
  return items.map((item, index) => (
    <BorderBox
      key={item.title}
      borderWidth={0}
      borderRadius={0}
      borderTopWidth={index !== 0 ? 1 : 0}
      borderColor="gray.7"
      p={4}
    >
      <Link key={index} href={item.url} color="inherit" display="block">
        {item.title}
      </Link>
    </BorderBox>
  ))
}

export default NavDrawer
