import React from 'react'
import {BaseStyles} from '@primer/react'
import {createGlobalStyle} from 'styled-components'
import {SkipLink} from './mdx'

const GlobalStyle = createGlobalStyle`
  ::placeholder {
    color: #dddddd;
  }
`

const PageElement = ({element}) => (
  <BaseStyles>
    <GlobalStyle />
    <SkipLink />
    {element}
  </BaseStyles>
)

export default PageElement
