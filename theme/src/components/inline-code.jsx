import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

const InlineCode = styled.code`
  padding: 0.2em 0.4em;
  font-family: ${themeGet('fonts.mono')};
  font-size: 85%;
  background-color: ${themeGet('colors.gray.1')};
  border-radius: ${themeGet('radii.1')};
`

export default InlineCode
