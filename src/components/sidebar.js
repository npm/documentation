import {Box} from '@primer/react'
import React from 'react'
import NavItems from './nav-items'
import {FULL_HEADER_HEIGHT} from '../constants'

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
    sx={{
      position: 'sticky',
      top: `${FULL_HEADER_HEIGHT}px`,
      height: `calc(100vh - ${FULL_HEADER_HEIGHT}px)`,
      width: 270,
    }}
  >
    <Box
      {...usePersistentScroll('sidebar')}
      sx={{
        overflow: 'auto',
        borderWidth: 0,
        borderRightWidth: 1,
        height: '100%',
        borderStyle: 'solid',
        borderColor: 'border.subtle',
      }}
    >
      <Box sx={{display: 'flex', flexDirection: 'column'}} role="list">
        <NavItems />
      </Box>
    </Box>
  </Box>
)

export default Sidebar
