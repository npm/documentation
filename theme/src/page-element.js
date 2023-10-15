import {BaseStyles, Link} from '@primer/react'
import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ::placeholder {
    color: #dddddd;
  }
`

const SkipLinkBase = props => (
  <Link {...props} backgroundColor="blue.6" color="white" p={3} href="#skip-nav" fontSize={1}>
    Skip to content
  </Link>
)

const SkipLink = styled(SkipLinkBase)`
  z-index: 20;
  width: auto;
  height: auto;
  clip: auto;
  position: absolute;
  overflow: hidden;

  // The following rules are to ensure that the element
  // is visually hidden, unless it has focus. This is the recommended
  // way to hide content from:
  // https://webaim.org/techniques/css/invisiblecontent/#techniques

  &:not(:focus) {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
  }
`

function PageElement({element}) {
  return (
    <BaseStyles>
      <GlobalStyle />
      <SkipLink />
      {element}
    </BaseStyles>
  )
}

export default PageElement
