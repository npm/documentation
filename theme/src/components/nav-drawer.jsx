import { BorderBox, Flex, Link, Text } from '@primer/components'
import { ChevronDownIcon, ChevronUpIcon, XIcon } from '@primer/octicons-react'
import { Link as GatsbyLink } from 'gatsby'
import debounce from 'lodash.debounce'
import React from 'react'
import navItems from '../nav.yml'
import headerNavItems from '../header-nav.yml'
import useSiteMetadata from '../use-site-metadata'
import DarkButton from './dark-button'
import Details from './details'
import Drawer from './drawer'
import NavItems from './nav-items'

export function useNavDrawerState (breakpoint) {
  // Handle string values from themes with units at the end
  if (typeof breakpoint === 'string') {
    breakpoint = parseInt(breakpoint, 10)
  }
  const [isOpen, setOpen] = React.useState(false)

  const onResize = React.useCallback(() => {
    if (window.innerWidth >= breakpoint) {
      setOpen(false)
    }
  }, [setOpen])

  const debouncedOnResize = React.useCallback(debounce(onResize, 250), [
    onResize,
  ])

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('resize', debouncedOnResize)
      return () => {
        // cancel any debounced invocation of the resize handler
        debouncedOnResize.cancel()
        window.removeEventListener('resize', debouncedOnResize)
      }
    }
  }, [isOpen, debouncedOnResize])

  return [isOpen, setOpen]
}

function NavDrawer ({ location, isOpen, onDismiss }) {
  const siteMetadata = useSiteMetadata()
  return (
    <Drawer isOpen={isOpen} onDismiss={onDismiss}>
      <Flex
        flexDirection="column"
        height="100%"
        bg="gray.0"
        style={{ overflow: 'auto', WebkitOverflowScrolling: 'touch' }}
      >
        <Flex flexDirection="column" flex="1 0 auto" color="gray.7" bg="gray.0">
          <BorderBox
            borderWidth={0}
            borderRadius={0}
            borderBottomWidth={1}
            borderColor="gray.7"
          >
            <Flex
              py={3}
              pl={4}
              pr={3}
              alignItems="center"
              justifyContent="space-between"
              color="gray.1"
              bg="gray.9"
            >
              <Link
                as={GatsbyLink}
                to="/"
                display="inline-block"
                color="inherit"
              >
                {siteMetadata.title}
              </Link>
              <DarkButton aria-label="Close" onClick={onDismiss}>
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
          <Flex
            flexDirection="column"
            flex="1 0 auto"
            color="gray.1"
            bg="gray.9"
          >
            <HeaderNavItems items={headerNavItems} />
          </Flex>
        ) : null}
      </Flex>
    </Drawer>
  )
}

function HeaderNavItems ({ items }) {
  return items.map((item, index) => {
    return (
      <BorderBox
        key={item.title}
        borderWidth={0}
        borderRadius={0}
        borderTopWidth={index !== 0 ? 1 : 0}
        borderColor="gray.7"
        p={4}
      >
        {item.children ? (
          <Details key={index}>
            {({ open, toggle }) => (
              <>
                <summary onClick={toggle} style={{ cursor: 'pointer' }}>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Text>{item.title}</Text>
                    {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </Flex>
                </summary>
                <Flex flexDirection="column" mt={2}>
                  {item.children.map((child) => (
                    <Link
                      key={child.title}
                      href={child.url}
                      py={1}
                      mt={2}
                      fontSize={1}
                      color="inherit"
                    >
                      {child.title}
                    </Link>
                  ))}
                </Flex>
              </>
            )}
          </Details>
        ) : (
          <Link key={index} href={item.url} color="inherit" display="block">
            {item.title}
          </Link>
        )}
      </BorderBox>
    )
  })
}

export default NavDrawer
