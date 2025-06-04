import {useCallback, useMemo} from 'react'
import {useTheme} from '@primer/react'

export const useColorPreference = (themeContextId = 'root') => {
  const {colorMode, setColorMode} = useTheme()
  const setColorPreference = useCallback(
    mode => {
      localStorage.setItem(`${themeContextId}-color-mode`, mode)
      setColorMode(mode)
    },
    [setColorMode, themeContextId],
  )

  const preferredColorMode = useMemo(
    () => colorMode ?? localStorage.getItem(`${themeContextId}-color-mode`) ?? 'auto',
    [colorMode, themeContextId],
  )

  return {preferredColorMode, setColorPreference}
}
