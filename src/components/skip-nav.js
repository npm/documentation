import React from 'react'
import {Box} from '@primer/react'
import styled from 'styled-components'
import Link from './link'
import {SCROLL_MARGIN_TOP} from '../constants'

const ID = 'skip-nav'

const SkipLinkBase = props => (
  <Link
    {...props}
    href={`#${ID}`}
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

// The following rules are to ensure that the element is visually hidden, unless
// it has focus. This is the recommended way to hide content from:
// https://webaim.org/techniques/css/invisiblecontent/#techniques
export const SkipLink = styled(SkipLinkBase)`
  z-index: 20;
  width: auto;
  height: auto;
  clip: auto;
  position: absolute;
  overflow: hidden;
  left: 10px;

  &:not(:focus) {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
  }
`

const SkipNavBase = props => <Box id={ID} {...props} />

export const SkipNav = styled(SkipNavBase)`
  scroll-margin-top: ${SCROLL_MARGIN_TOP}px;
`
