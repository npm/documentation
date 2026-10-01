import {useCallback, useEffect, useState} from 'preact/hooks'
import {MOBILE_QUERY} from '../constants'

const getMatches = query => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false)

// The MIT License (MIT)
// Copyright (c) 2020 Julien CARON
// https://github.com/juliencrn/usehooks-ts/blob/master/packages/usehooks-ts/src/useMediaQuery/useMediaQuery.ts
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => getMatches(query))
  const handleChange = useCallback(() => setMatches(getMatches(query)), [query])

  useEffect(() => {
    handleChange()
    const matchMedia = window.matchMedia(query)
    matchMedia.addEventListener('change', handleChange)
    return () => matchMedia.removeEventListener('change', handleChange)
  }, [query, handleChange])

  return matches
}

// a common breakpoint where things change on mobile
export function useIsMobile() {
  return useMediaQuery(MOBILE_QUERY)
}
