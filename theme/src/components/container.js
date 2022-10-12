import {Box} from '@primer/components'
import React from 'react'
import { activateArrowKeyNavigation } from '../utils/accessibility'

function Container({children}) {
  const containerRef = React.createRef()

  React.useEffect(() => {
    const arrowKeyNavigation = activateArrowKeyNavigation(containerRef.current, 'li > a')
    return arrowKeyNavigation.deactivate
  }, [containerRef.current])

  return (
    <Box id="skip-nav" width="100%" maxWidth={960} p={5} mx="auto" ref={containerRef}>
      {children}
    </Box>
  )
}

export default Container
