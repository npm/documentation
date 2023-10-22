import React from 'react'
import {Button, Box} from '@primer/react'
import {XIcon, SearchIcon} from '@primer/octicons-react'
import {AnimatePresence, motion} from 'framer-motion'
import {FocusOn} from 'react-focus-on'
import TextInput from './text-input'
import SearchResults from './search-results'
import useSiteMetadata from '../hooks/use-site-metadata'
import {HEADER_BAR, HEADER_HEIGHT} from '../constants'
import {LightTheme} from '../theme'

export const Desktop = props => {
  const siteMetadata = useSiteMetadata()
  const {getInputProps, getMenuProps, isOpen, results, getItemProps, highlightedIndex} = props

  return (
    <Box sx={{position: 'relative'}}>
      <TextInput
        sx={{width: '240px'}}
        placeholder={`Search ${siteMetadata.title}`}
        aria-label={`Search ${siteMetadata.title}`}
        {...getInputProps()}
      />
      <Box sx={{position: 'absolute', left: 0, right: 0, pt: 1}} {...getMenuProps()}>
        {isOpen ? (
          <LightTheme>
            <Box
              sx={{
                overflow: 'auto',
                minWidth: 300,
                maxHeight: '70vh',
                boxShadow: 'shadow.large',
                borderColor: 'border.muted',
                bg: 'canvas.overlay',
                borderRadius: 2,
                borderWidth: 1,
                borderStyle: 'solid',
              }}
            >
              <SearchResults {...{results, getItemProps, highlightedIndex}} />
            </Box>
          </LightTheme>
        ) : null}
      </Box>
    </Box>
  )
}

export const Mobile = props => {
  const [open, setOpen] = React.useState(false)
  const siteMetadata = useSiteMetadata()
  const {reset, results, isOpen: resultsOpen, getInputProps, getItemProps, getMenuProps, highlightedIndex} = props

  // Fixes focus behavior on iOS where the input gets focus styles but not the
  // actual focus after animating open.
  const ref = React.useRef()
  React.useEffect(() => {
    if (open) {
      ref.current.focus()
    }
  }, [ref, open])

  const handleDismiss = () => {
    reset()
    setOpen(false)
  }

  return (
    <>
      <Button aria-label="Search" aria-expanded={open} onClick={() => setOpen(true)}>
        <SearchIcon />
      </Button>
      <AnimatePresence>
        {open ? (
          <FocusOn returnFocus={true} onEscapeKey={handleDismiss}>
            <Box
              sx={{
                position: 'fixed',
                top: `${HEADER_BAR}px`,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bg: 'overlay.backdrop',
                  zIndex: -1,
                }}
                key="search-backdrop"
                as={motion.div}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{type: 'tween'}}
                onClick={handleDismiss}
              />
              <Box sx={{display: 'flex', flexDirection: 'column', height: resultsOpen ? '100%' : 'auto'}}>
                <Box
                  sx={{
                    display: 'flex',
                    color: 'fg.default',
                    height: `${HEADER_HEIGHT}px`,
                    flex: '0 0 auto',
                    px: 3,
                    alignItems: 'center',
                    border: '1px solid',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderColor: 'border.muted',
                    position: 'relative',
                  }}
                >
                  <motion.div
                    key="search-box"
                    initial={{scaleX: 0}}
                    animate={{scaleX: 1}}
                    exit={{scaleX: 0}}
                    transition={{type: 'tween', ease: 'easeOut', duration: 0.2}}
                    style={{width: '100%', originX: '100%'}}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: '70px',
                        bg: 'canvas.default',
                        zIndex: '-1',
                      }}
                    />
                    <TextInput
                      leadingVisual={SearchIcon}
                      placeholder={`Search ${siteMetadata.title}`}
                      aria-label={`Search ${siteMetadata.title}`}
                      sx={{width: '100%'}}
                      {...getInputProps({ref})}
                    />
                  </motion.div>
                  <Box
                    key="button-blocker"
                    as={motion.div}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{type: 'tween', ease: 'easeOut', duration: 0.2}}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      right: 0,
                      width: '70px',
                      bg: 'canvas.default',
                      zIndex: '-1',
                    }}
                  />
                  <Box
                    key="button"
                    as={motion.div}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{type: 'tween', ease: 'easeOut', duration: 0.2}}
                  >
                    <Button sx={{ml: 3}} aria-label="Cancel" onClick={handleDismiss}>
                      <XIcon />
                    </Button>
                  </Box>
                </Box>
                <LightTheme>
                  <Box
                    sx={{
                      display: 'flex',
                      bg: 'canvas.default',
                      py: resultsOpen ? 1 : 0,
                      flexDirection: 'column',
                      flex: '1 1 auto',
                      overflow: 'auto',
                    }}
                    style={{
                      WebkitOverflowScrolling: 'touch',
                    }}
                    {...getMenuProps()}
                  >
                    {resultsOpen ? <SearchResults {...{results, getItemProps, highlightedIndex}} /> : null}
                  </Box>
                </LightTheme>
              </Box>
            </Box>
          </FocusOn>
        ) : null}
      </AnimatePresence>
    </>
  )
}
