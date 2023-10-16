import {Box} from '@primer/react'
import React from 'react'
import NavItems from './nav-items'
import {HEADER_HEIGHT} from '../constants'

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
      top: `${HEADER_HEIGHT}px`,
      height: `calc(100vh - ${HEADER_HEIGHT}px)`,
      minWidth: 260,
    }}
  >
    <Box
      {...usePersistentScroll('sidebar')}
      style={{overflow: 'auto'}}
      sx={{
        borderWidth: 0,
        borderRightWidth: 1,
        borderRadius: 0,
        height: '100%',
        borderStyle: 'solid',
        borderColor: 'border.subtle',
        px: 2,
      }}
    >
      <Box sx={{display: 'flex', flexDirection: 'column'}} role="list">
        <NavItems />
      </Box>
    </Box>
  </Box>
)

export default Sidebar
