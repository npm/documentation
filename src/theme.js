import React from 'react'
import {ThemeProvider as PrimerThemeProvider, theme as primerTheme} from '@primer/react'
import deepmerge from 'deepmerge'

export const NPM_RED = '#cb0000'

export const theme = deepmerge(primerTheme, {
  colors: {
    logoBg: NPM_RED,
  },
  colorSchemes: {
    light: {
      colors: {
        accent: {
          fg: NPM_RED,
        },
      },
    },
    dark_dimmed: {
      colors: {
        canvas: {
          default: '#333333',
        },
        fg: {
          default: '#E1E4E8',
        },
        btn: {
          text: '#E1E4E8',
          bg: 'transparent',
          border: '#444D56',
          hoverBorder: '#444D56',
          hoverBg: NPM_RED,
        },
      },
    },
  },
})

export const ThemeProvider = props => <PrimerThemeProvider theme={theme} {...props} />
export const LightTheme = props => <ThemeProvider colorMode="light" {...props} />
export const DarkTheme = props => <ThemeProvider colorMode="dark" nightScheme="dark_dimmed" {...props} />
