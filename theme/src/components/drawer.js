import {Fixed} from '@primer/components'
import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'
import {FocusOn} from 'react-focus-on'

function Drawer({isOpen, onDismiss, children}) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <button
          // These event handlers fix a bug that caused links below the fold
          // to be unclickable in macOS Safari.
          // Reference: https://github.com/theKashey/react-focus-lock/issues/79
          style={{ textAlign: 'start', fontSize: '1rem', lineHeight: '1.5rem' }}
          onMouseDown={event => event.preventDefault()}
          onClick={event => event.target.focus()}
        >
          <FocusOn returnFocus={true} onEscapeKey={() => onDismiss()}>
            <Fixed
              key="overlay"
              as={motion.div}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{type: 'tween'}}
              top={0}
              right={0}
              bottom={0}
              left={0}
              bg="rgba(0, 0, 0, 0.5)"
              onClick={() => onDismiss()}
            />
            <Fixed
              key="drawer"
              as={motion.div}
              initial={{x: '100%'}}
              animate={{x: 0}}
              exit={{x: '100%'}}
              transition={{type: 'tween', duration: 0.2}}
              width={300}
              top={0}
              right={0}
              bottom={0}
              bg="gray.0"
              style={{zIndex: 1}}
            >
              {children}
            </Fixed>
          </FocusOn>
        </button>
      ) : null}
    </AnimatePresence>
  )
}

export default Drawer
