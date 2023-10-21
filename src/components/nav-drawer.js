import React from 'react'
import {Button, Box} from '@primer/react'
import {XIcon, ThreeBarsIcon} from '@primer/octicons-react'
import Link from './link'
import Drawer from './drawer'
import NavItems from './nav-items'
import useSiteMetadata from '../hooks/use-site-metadata'
import {useIsMobile} from '../hooks/use-breakpoint'
import {DarkTheme, LightTheme} from '../theme'

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
      <LightTheme>
        <Drawer isOpen={isOpen} onDismiss={setClose}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              bg: 'canvas.backdrop',
              overflow: 'auto',
            }}
            style={{WebkitOverflowScrolling: 'touch'}}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: '1 0 auto',
                color: 'fg.default',
                bg: 'canvas.default',
              }}
            >
              <DarkTheme>
                <Box
                  sx={{
                    borderWidth: 0,
                    borderRadius: 0,
                    borderBottomWidth: 1,
                    borderColor: 'border.muted',
                    borderStyle: 'solid',
                    color: 'fg.default',
                    bg: 'canvas.default',
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
                    <Link to="/" sx={{fontSize: 2, color: 'fg.default'}}>
                      {siteMetadata.title}
                    </Link>
                    <Button aria-label="Close" onClick={setClose}>
                      <XIcon />
                    </Button>
                  </Box>
                </Box>
              </DarkTheme>
              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <NavItems />
              </Box>
            </Box>
          </Box>
        </Drawer>
      </LightTheme>
    </>
  )
}

export default NavDrawer
