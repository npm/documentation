import React from 'react'
import {Button, Box, Link} from '@primer/react'
import {XIcon, ThreeBarsIcon} from '@primer/octicons-react'
import {Link as GatsbyLink} from 'gatsby'
import Drawer from './drawer'
import NavItems from './nav-items'
import useSiteMetadata from '../hooks/use-site-metadata'
import {useIsMobile} from '../hooks/use-breakpoint'
import headerNavItems from '../../content/header-nav.yml'

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

function NavDrawer() {
  const siteMetadata = useSiteMetadata()
  const [isOpen, {setOpen, setClose}] = useDrawerIsOpen()

  return (
    <>
      <Button aria-label="Menu" aria-expanded={isOpen} onClick={setOpen} sx={{ml: 3}}>
        <ThreeBarsIcon />
      </Button>
      <Drawer isOpen={isOpen} onDismiss={setClose}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            bg: 'canvas.default',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <Box
            sx={{display: 'flex', flexDirection: 'column', flex: '1 0 auto', color: 'fg.default', bg: 'canvas.default'}}
          >
            <Box
              sx={{
                borderWidth: 0,
                borderRadius: 0,
                borderBottomWidth: 1,
                borderColor: 'border.muted',
                borderStyle: 'solid',
              }}
            >
              <Box
                sx={{
                  py: 3,
                  pl: 4,
                  pr: 3,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  display: 'flex',
                }}
              >
                <Link as={GatsbyLink} to="/" sx={{display: 'inline-block', color: 'inherit'}}>
                  {siteMetadata.title}
                </Link>
                <Button aria-label="Close" onClick={setClose}>
                  <XIcon />
                </Button>
              </Box>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <NavItems />
            </Box>
          </Box>
          <Box
            sx={{flexDirection: 'column', flex: '1 0 auto', color: 'fg.default', bg: 'canvas.default', display: 'flex'}}
          >
            {headerNavItems.map((item, index) => (
              <Box
                key={item.title}
                sx={{
                  borderWidth: 0,
                  borderRadius: 0,
                  borderTopWidth: index !== 0 ? 1 : 0,
                  borderColor: 'border.muted',
                  px: 4,
                  py: 3,
                  borderStyle: 'solid',
                }}
              >
                <Link key={index} href={item.url} sx={{color: 'inherit', display: 'block'}}>
                  {item.title}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  )
}

export default NavDrawer
