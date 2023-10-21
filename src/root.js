import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import {ThemeProvider, theme} from '@primer/react'
import deepmerge from 'deepmerge'
import * as Components from './mdx'
import {NPM_RED} from './constants'

const npmTheme = deepmerge(theme, {
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

const components = {
  a: Components.Link,
  pre: ({children}) => children,
  code: Components.Code,
  table: Components.Table,
  img: Components.Image,
  p: Components.Paragraph,
  hr: Components.HorizontalRule,
  blockquote: Components.Blockquote,
  h1: Components.H1,
  h2: Components.H2,
  h3: Components.H3,
  h4: Components.H4,
  h5: Components.H5,
  h6: Components.H6,
  ul: Components.UnorderedList,
  ol: Components.OrderedList,
  dl: Components.DescriptionList,
  Index: Components.Index,
  Note: Components.Note,
  Prompt: Components.Prompt,
  PromptReply: Components.PromptReply,
  Screenshot: Components.Screenshot,
  Link: Components.Link,
}

const RootElement = ({element}) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={npmTheme}>{element}</ThemeProvider>
  </MDXProvider>
)

export default RootElement
