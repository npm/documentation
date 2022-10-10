import {ButtonOutline, themeGet} from '@primer/components'
import styled from 'styled-components'

const DarkButton = styled(ButtonOutline)`
  color: ${themeGet('colors.gray.2')};
  background-color: transparent;
  border: 1px solid ${themeGet('colors.gray.7')};
  box-shadow: none;

  &:hover {
    background-color: #cb0000;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(214, 102, 102, 0.3);
  }

  &:active {
    background-color: #ba0000;
  }
`

export default DarkButton
