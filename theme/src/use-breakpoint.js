import React from 'react'

function useBreakpoint(breakpoint, minMax = 'min') {
  // Handle string values from themes with units at the end
  if (typeof breakpoint === 'string') {
    breakpoint = parseInt(breakpoint, 10)
  }

  const matchMedia = React.useMemo(() => {
    if (typeof window === 'undefined') {
      const eventTarget = new EventTarget()
      eventTarget.matches = false
      return eventTarget
    }
    return window.matchMedia(`(${minMax}-width: ${breakpoint - (minMax === 'min' ? 0 : 1)}px)`)
  }, [breakpoint, minMax])

  const [matches, setMatches] = React.useState(matchMedia.matches)
  const handleChange = React.useCallback(() => setMatches(matchMedia.matches), [matchMedia])

  React.useEffect(() => {
    matchMedia.addEventListener('change', handleChange)
    return () => matchMedia.removeEventListener('change', handleChange)
  }, [matchMedia, handleChange])

  return matches
}

export default useBreakpoint
