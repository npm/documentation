import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import {ThemeProvider} from './theme'
import * as Components from './mdx'

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
  YouTube: Components.YouTube,
}

const RootElement = ({element}) => (
  <MDXProvider components={components}>
    <ThemeProvider>{element}</ThemeProvider>
  </MDXProvider>
)

export default RootElement
