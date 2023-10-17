import React from 'react'
import {BaseStyles, themeGet} from '@primer/react'
import {createGlobalStyle} from 'styled-components'
import {SkipLink} from './mdx'

const GlobalStyles = createGlobalStyle`
  body {
    color: ${themeGet('colors.fg.default')};
    background-color: ${themeGet('colors.canvas.default')};
  }
`

const PageElement = ({element}) => (
  <BaseStyles>
    <GlobalStyles />
    <SkipLink />
    {element}
  </BaseStyles>
)

export default PageElement
