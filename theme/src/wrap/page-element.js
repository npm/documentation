import {BaseStyles} from '@primer/components'
import React from 'react'
import SkipLink from '../components/skip-link'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ::placeholder {
    color: #dddddd;
  }
`

function wrapPageElement({element}) {
  return (
    <BaseStyles>
      <GlobalStyle />
      <SkipLink />
      {element}
    </BaseStyles>
  )
}

export default wrapPageElement
