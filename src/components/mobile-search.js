import React from 'react'
import {Button, Box, ThemeProvider} from '@primer/react'
import {XIcon, SearchIcon} from '@primer/octicons-react'
import {AnimatePresence, motion} from 'framer-motion'
import {FocusOn} from 'react-focus-on'
import TextInput from './text-input'
import SearchResults from './search-results'
import useSiteMetadata from '../hooks/use-site-metadata'
import {HEADER_BAR, HEADER_HEIGHT} from '../constants'

function MobileSearch({onDismiss, ...props}) {
  const siteMetadata = useSiteMetadata()
  const {reset, results, isOpen, getInputProps, getItemProps, getMenuProps, highlightedIndex} = props

  const handleDismiss = () => {
    reset()
    onDismiss()
  }

  return (
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
            bg: 'canvas.backdrop',
            zIndex: -1,
          }}
          as={motion.div}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          onClick={handleDismiss}
        />
        <Box sx={{display: 'flex', flexDirection: 'column', height: isOpen ? '100%' : 'auto'}}>
          <Box
            sx={{
              display: 'flex',
              bg: 'canvas.default',
              color: 'fg.default',
              height: `${HEADER_HEIGHT - HEADER_BAR}px`,
              flex: '0 0 auto',
              px: 3,
              alignItems: 'center',
            }}
          >
            <motion.div
              initial={{scaleX: 0.1}}
              animate={{scaleX: 1}}
              exit={{scaleX: 0.1, transition: {duration: 0.1}}}
              transition={{type: 'tween', duration: 0.2}}
              style={{width: '100%', originX: '100%'}}
            >
              <TextInput
                leadingVisual={SearchIcon}
                {...getInputProps({
                  placeholder: `Search ${siteMetadata.title}`,
                  'aria-label': `Search ${siteMetadata.title}`,
                  sx: {width: '100%'},
                })}
              />
            </motion.div>
            <Button sx={{ml: 3}} aria-label="Cancel" onClick={handleDismiss}>
              <XIcon />
            </Button>
          </Box>
          <ThemeProvider colorMode="light">
            <Box
              sx={{
                display: 'flex',
                bg: 'canvas.default',
                py: isOpen ? 1 : 0,
                flexDirection: 'column',
                flex: '1 1 auto',
                overflow: 'auto',
              }}
              style={{
                WebkitOverflowScrolling: 'touch',
              }}
              {...getMenuProps()}
            >
              {isOpen ? <SearchResults {...{results, getItemProps, highlightedIndex}} /> : null}
            </Box>
          </ThemeProvider>
        </Box>
      </Box>
    </FocusOn>
  )
}

function MobileSearchWrapper(props) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button aria-label="Search" aria-expanded={isOpen} onClick={() => setIsOpen(true)}>
        <SearchIcon />
      </Button>
      <AnimatePresence>
        {isOpen ? <MobileSearch onDismiss={() => setIsOpen(false)} {...props} /> : null}
      </AnimatePresence>
    </>
  )
}

export default MobileSearchWrapper
