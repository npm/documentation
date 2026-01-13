import React from 'react'
import {Button} from '@primer/react'
import {XIcon, ThreeBarsIcon} from '@primer/octicons-react'
import NavItems from './nav-items'
import {useIsMobile} from '../hooks/use-breakpoint'
import {DarkTheme, LightTheme} from '../theme'
import {AnimatePresence, motion} from 'framer-motion'
import {FocusOn} from 'react-focus-on'
import {HEADER_BAR, HEADER_HEIGHT} from '../constants'
import SiteTitle from './site-title'

import * as styles from './nav-drawer.module.css'

const Drawer = ({isOpen, onDismiss, children}) => (
  <AnimatePresence>
    {isOpen ? (
      // These event handlers fix a bug that caused links below the fold
      // to be unclickable in macOS Safari.
      // Reference: https://github.com/theKashey/react-focus-lock/issues/79
      <div
        onMouseDown={event => event.preventDefault()}
        onKeyDown={event => event.target.focus()}
        onClick={event => event.target.focus()}
        role="button"
        tabIndex="0"
      >
        <FocusOn returnFocus={true} onEscapeKey={onDismiss}>
          <motion.div
            key="overlay"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{type: 'tween'}}
            onClick={onDismiss}
            className={styles.Box}
          />
          <motion.div
            style={{top: `${HEADER_BAR}px`}}
            key="drawer"
            initial={{x: '100%'}}
            animate={{x: 0}}
            exit={{x: '100%'}}
            transition={{type: 'tween', duration: 0.2}}
            className={styles.Box_1}
          >
            {children}
          </motion.div>
        </FocusOn>
      </div>
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
      <Button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(true)} className={styles.Button}>
        <ThreeBarsIcon />
      </Button>
      <LightTheme as={Drawer} isOpen={open} onDismiss={() => setOpen(false)}>
        <div style={{WebkitOverflowScrolling: 'touch'}} className={styles.Box_2}>
          <div className={styles.Box_3}>
            <DarkTheme style={{height: `${HEADER_HEIGHT}px`}} className={styles.DarkTheme}>
              <SiteTitle />
              <Button aria-label="Close" onClick={() => setOpen(false)}>
                <XIcon />
              </Button>
            </DarkTheme>
            <div className={styles.Box_4}>
              <NavItems />
            </div>
          </div>
        </div>
      </LightTheme>
    </>
  )
}

export default NavDrawer
