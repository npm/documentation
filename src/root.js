import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import {ThemeProvider} from './theme'
import * as components from './mdx'

const RootElement = ({element}) => (
  <MDXProvider components={components}>
    <ThemeProvider>{element}</ThemeProvider>
  </MDXProvider>
)

export default RootElement
