import React from 'react'
import styled from 'styled-components'
import Link from './link'
import {SCROLL_MARGIN_TOP, SKIP_TO_CONTENT_ID} from '../constants'

export const SkipLink = styled(Link)`
  color: var(--fgColor-accent);
  padding: 4px;
  &:focus {
    text-decoration: underline;
  }
`

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
  padding: 8px;
  background-color: var(--bgColor-default);
  border: 1px solid var(--fgColor-accent);
  border-top: 0;
  font-size: 12px;
  border-radius: 0 0 6px 6px;
  

  &:focus-within {
    transform: translateY(0%);
  }

  & > * {
    margin-right: 4px;
  }

  & > *:last-child {
    margin-right: 0;
  }
`

const SkipNavBase = props => <div id={SKIP_TO_CONTENT_ID} {...props} />

export const SkipNav = styled(SkipNavBase)`
  scroll-margin-top: ${SCROLL_MARGIN_TOP}px;
`
