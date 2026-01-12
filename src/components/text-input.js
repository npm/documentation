import {TextInput as PrimerTextInput} from '@primer/react'
import styled from 'styled-components'

const TextInput = styled(PrimerTextInput)`
  /* The font-size of inputs should never be less than 16px.
   * Otherwise, iOS browsers will zoom in when the input is focused.
   * TODO: Update font-size of TextInput in @primer/react.
   */
  input {
    font-size: 14px !important;
    color: var(--fgColor-default) !important;
  }

  input::placeholder {
    color: var(--fgColor-default) !important;
  }
`
export default TextInput
