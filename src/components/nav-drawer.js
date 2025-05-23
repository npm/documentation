import React from 'react'
import {Button, Box} from '@primer/react'
import {XIcon, ThreeBarsIcon} from '@primer/octicons-react'
import NavItems from './nav-items'
import {useIsMobile} from '../hooks/use-breakpoint'
import {DarkTheme, LightTheme} from '../theme'
import {AnimatePresence, motion} from 'framer-motion'
import {FocusOn} from 'react-focus-on'
import {HEADER_BAR, HEADER_HEIGHT} from '../constants'
import SiteTitle from './site-title'

const Drawer = ({isOpen, onDismiss, children}) => (
  <AnimatePresence>
    {isOpen ? (
      // These event handlers fix a bug that caused links below the fold
      // to be unclickable in macOS Safari.
      // Reference: https://github.com/theKashey/react-focus-lock/issues/79
      <Box
        onMouseDown={event => event.preventDefault()}
        onKeyDown={event => event.target.focus()}
        onClick={event => event.target.focus()}
        role="button"
        tabIndex="0"
      >
        <FocusOn returnFocus={true} onEscapeKey={onDismiss}>
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              bg: 'overlay.backdrop',
            }}
            key="overlay"
            as={motion.div}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{type: 'tween'}}
            onClick={onDismiss}
          />
          <Box
            sx={{
              position: 'fixed',
              top: `${HEADER_BAR}px`,
              right: 0,
              bottom: 0,
              width: 300,
              zIndex: 1,
            }}
            key="drawer"
            as={motion.div}
            initial={{x: '100%'}}
            animate={{x: 0}}
            exit={{x: '100%'}}
            transition={{type: 'tween', duration: 0.2}}
          >
            {children}
          </Box>
        </FocusOn>
      </Box>
    ) : null}
  </AnimatePresence>
)

function NavDrawer() {
  const isMobile = useIsMobile()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!isMobile && open) {
      setOpen(false)
    }
  }, [isMobile, open])

  return (
    <>
      <Button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(true)} sx={{ml: 3}}>
        <ThreeBarsIcon />
      </Button>
      <LightTheme as={Drawer} isOpen={open} onDismiss={() => setOpen(false)}>
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
            <DarkTheme
              sx={{
                color: 'fg.default',
                bg: 'canvas.default',
                height: `${HEADER_HEIGHT}px`,
                px: 3,
                alignItems: 'center',
                justifyContent: 'space-between',
                display: 'flex',
              }}
            >
              <SiteTitle />
              <Button aria-label="Close" onClick={() => setOpen(false)}>
                <XIcon />
              </Button>
            </DarkTheme>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <NavItems />
            </Box>
          </Box>
        </Box>
      </LightTheme>
    </>
  )
}

export default NavDrawer
