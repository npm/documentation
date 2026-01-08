import {Box} from '@primer/react'
import React from 'react'
import NavItems from './nav-items'
import {FULL_HEADER_HEIGHT} from '../constants'

import * as styles from './sidebar.module.css'

function usePersistentScroll(id) {
  const ref = React.useRef()

  const handleScroll = React.useCallback(
    // Save scroll position in session storage on every scroll change
    event => window.sessionStorage.setItem(id, event.target.scrollTop),
    [id],
  )

  React.useLayoutEffect(() => {
    // Restore scroll position when component mounts
    const scrollPosition = window.sessionStorage.getItem(id)
    if (scrollPosition && ref.current) {
      ref.current.scrollTop = scrollPosition
    }
  }, [id])

  // Return props to spread onto the scroll container
  return {
    ref,
    onScroll: handleScroll,
  }
}

const Sidebar = () => (
  <Box
    role="navigation"
    style={{
      top: `${FULL_HEADER_HEIGHT}px`,
      height: `calc(100vh - ${FULL_HEADER_HEIGHT}px)`,
    }}
    className={styles.Box}
  >
    <Box {...usePersistentScroll('sidebar')} className={styles.Box_1}>
      <Box className={styles.Box_2}>
        <NavItems />
      </Box>
    </Box>
  </Box>
)

export default Sidebar
