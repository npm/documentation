import React from 'react'
import {Box, themeGet} from '@primer/react'
import styled from 'styled-components'
import Link from './link'
import {SCROLL_MARGIN_TOP, SKIP_TO_CONTENT_ID} from '../constants'

export const SkipLink = styled(Link)`
  color: ${themeGet('colors.accent.emphasis')};
  padding: ${themeGet('space.1')};
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
  padding: ${themeGet('space.2')};
  background-color: ${themeGet('colors.canvas.default')};
  border: 1px solid ${themeGet('colors.accent.emphasis')};
  border-top: 0;
  font-size: ${themeGet('fontSizes.1')};
  border-radius: 0 0 ${themeGet('radii.2')} ${themeGet('radii.2')};
  

  &:focus-within {
    transform: translateY(0%);
  }

  & > * {
    margin-right: ${themeGet('space.1')};
  }

  & > *:last-child {
    margin-right: 0;
  }
`

const SkipNavBase = props => <Box id={SKIP_TO_CONTENT_ID} {...props} />

export const SkipNav = styled(SkipNavBase)`
  scroll-margin-top: ${SCROLL_MARGIN_TOP}px;
`
