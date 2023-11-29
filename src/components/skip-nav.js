import React from 'react'
import {Box} from '@primer/react'
import styled from 'styled-components'
import Link from './link'
import {SCROLL_MARGIN_TOP, SKIP_TO_CONTENT_ID} from '../constants'

const SkipLinkBase = props => (
  <Link
    {...props}
    href={`#${props.skipTarget}`}
    sx={{
      p: 3,
      color: 'fg.onEmphasis',
      backgroundColor: 'accent.emphasis',
      fontSize: 1,
    }}
  >
    {props.linkText}
  </Link>
)

export const SkipLink = styled(SkipLinkBase)`
  &:focus {
    text-decoration: underline;
  }
`;

// The following rules are to ensure that the element is visually hidden, unless
// it has focus. This is the recommended way to hide content from:
// https://webaim.org/techniques/css/invisiblecontent/#techniques
export const SkipBox = styled.div`
  display: inline-flex;
  z-index: 20;
  left: 10px;
  gap: 3px;
  position: absolute;
  transform: translateY(-100%);
  transition: transform 0.3s;

  &:focus-within {
    transform: translateY(0%);
  }
`

const SkipNavBase = props => <Box id={SKIP_TO_CONTENT_ID} {...props} />

export const SkipNav = styled(SkipNavBase)`
  scroll-margin-top: ${SCROLL_MARGIN_TOP}px;
`
