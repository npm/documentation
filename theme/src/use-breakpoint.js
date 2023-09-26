import React from 'react'
import {ThemeContext} from 'styled-components'

const getMatches = query => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false)

// The MIT License (MIT)
// Copyright (c) 2020 Julien CARON
// https://github.com/juliencrn/usehooks-ts/blob/master/packages/usehooks-ts/src/useMediaQuery/useMediaQuery.ts
export function useMediaQuery(query) {
  const [matches, setMatches] = React.useState(getMatches(query))
  const handleChange = React.useCallback(() => setMatches(getMatches(query)), [query])

  React.useEffect(() => {
    handleChange()
    const matchMedia = window.matchMedia(query)
    matchMedia.addEventListener('change', handleChange)
    return () => matchMedia.removeEventListener('change', handleChange)
  }, [query, handleChange])

  return matches
}

export function useBreakpoint(breakpoint, minMax = 'min') {
  // Handle string values from themes with units at the end
  const px = typeof breakpoint === 'string' ? parseInt(breakpoint, 10) : breakpoint
  return useMediaQuery(`(${minMax}-width: ${px - (minMax === 'min' ? 0 : 1)}px)`)
}

// a common breakpoint where things change on mobile
export function useIsMobile() {
  const theme = React.useContext(ThemeContext)
  return useBreakpoint(theme.breakpoints[2], 'max')
}

export default useBreakpoint
