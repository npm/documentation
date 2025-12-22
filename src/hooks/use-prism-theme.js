import {useTheme} from '@primer/react'
import {themes} from 'prism-react-renderer'
import {useMemo} from 'react'

const colorModeToThemeMap = {
  light: themes.github,
  dark: themes.vsDark,
  day: themes.github,
  night: themes.vsDark,
}

export const usePrismTheme = () => {
  const {resolvedColorMode} = useTheme()

  const theme = useMemo(() => colorModeToThemeMap[resolvedColorMode ?? 'day'], [resolvedColorMode])
  return {theme}
}
