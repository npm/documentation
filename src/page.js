import React from 'react'
import {BaseStyles, themeGet, Link} from '@primer/react'
import styled, {createGlobalStyle} from 'styled-components'
import {SKIP_NAV} from './constants'

const SkipLinkBase = props => (
  <Link
    {...props}
    href={`#${SKIP_NAV.id}`}
    sx={{
      p: 3,
      color: 'fg.onEmphasis',
      backgroundColor: 'accent.emphasis',
      fontSize: 1,
    }}
  >
    Skip to content
  </Link>
)

export const SkipLink = styled(SkipLinkBase)`
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
