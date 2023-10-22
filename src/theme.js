import React from 'react'
import {ThemeProvider as Provider, theme, Box} from '@primer/react'
import deepmerge from 'deepmerge'

export const NPM_RED = '#cb0000'

export const npmTheme = deepmerge(theme, {
  colors: {
    logoBg: NPM_RED,
  },
  colorSchemes: {
    light: {
      colors: {
        accent: {
          fg: NPM_RED,
          emphasis: NPM_RED,
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

export const ThemeProvider = props => <Provider theme={npmTheme} {...props} />

export const Theme = ({theme: colorMode, as = Box, ...props}) => (
  <Provider colorMode={colorMode} nightScheme="dark_dimmed">
    {React.createElement(as, props)}
  </Provider>
)

export const LightTheme = props => <Theme theme="light" {...props} />
export const DarkTheme = props => <Theme theme="dark" {...props} />
