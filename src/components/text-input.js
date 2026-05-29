import {TextInput as PrimerTextInput} from '@primer/react'
import styled from 'styled-components'

const TextInput = styled(PrimerTextInput)`
  /* The font-size of inputs should never be less than 16px.
   * Otherwise, iOS browsers will zoom in when the input is focused.
   * TODO: Update font-size of TextInput in @primer/react.
   */
  input {
    font-size: 16px !important;
    color: var(--fgColor-default, #1f2328) !important;
    caret-color: var(--fgColor-default, #1f2328) !important;
  }

  input::placeholder {
    color: var(--fgColor-muted, #57606a) !important;
    opacity: 1;
  }
`
export default TextInput
