import React from 'react'
import {Box, Link} from '@primer/react'
import BorderBox from './border-box'
import {XIcon, ThreeBarsIcon} from '@primer/octicons-react'
import {Link as GatsbyLink} from 'gatsby'
import DarkButton from './dark-button'
import Drawer from './drawer'
import NavItems from './nav-items'
import navItems from '../nav.yml'
import headerNavItems from '../header-nav.yml'
import useSiteMetadata from '../hooks/use-site-metadata'
import {useIsMobile} from '../hooks/use-breakpoint'

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

function NavDrawer({location, repositoryUrl}) {
  const siteMetadata = useSiteMetadata()
  const [isOpen, {setOpen, setClose}] = useDrawerIsOpen()

  return (
    <>
      <DarkButton aria-label="Menu" aria-expanded={isOpen} onClick={setOpen} ml={3}>
        <ThreeBarsIcon />
      </DarkButton>
      <Drawer isOpen={isOpen} onDismiss={setClose}>
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          bg="gray.0"
          style={{overflow: 'auto', WebkitOverflowScrolling: 'touch'}}
        >
          <Box display="flex" flexDirection="column" flex="1 0 auto" color="gray.7" bg="gray.0">
            <BorderBox borderWidth={0} borderRadius={0} borderBottomWidth={1} borderColor="gray.7">
              <Box
                display="flex"
                py={3}
                pl={4}
                pr={3}
                alignItems="center"
                justifyContent="space-between"
                color="gray.1"
                bg="gray.9"
              >
                <Link as={GatsbyLink} to="/" sx={{display: 'inline-block', color: 'inherit'}}>
                  {siteMetadata.title}
                </Link>
                <DarkButton aria-label="Close" onClick={setClose}>
                  <XIcon />
                </DarkButton>
              </Box>
            </BorderBox>
            {navItems.length > 0 ? (
              <Box display="flex" flexDirection="column">
                <NavItems location={location} items={navItems} repositoryUrl={repositoryUrl} />
              </Box>
            ) : null}
          </Box>
          {headerNavItems.length > 0 ? (
            <Box display="flex" flexDirection="column" flex="1 0 auto" color="gray.1" bg="gray.9">
              <HeaderNavItems items={headerNavItems} />
            </Box>
          ) : null}
        </Box>
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
      <Link key={index} href={item.url} sx={{color: 'inherit', display: 'block'}}>
        {item.title}
      </Link>
    </BorderBox>
  ))
}

export default NavDrawer
