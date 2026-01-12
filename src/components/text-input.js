import {TextInput as PrimerTextInput} from '@primer/react'
import styled from 'styled-components'

const TextInput = styled(PrimerTextInput)`
  /* The font-size of inputs should never be less than 16px.
   * Otherwise, iOS browsers will zoom in when the input is focused.
   * TODO: Update font-size of TextInput in @primer/react.
   */
  input {
    font-size: 16px !important;
    color: rgb(225, 228, 232) !important;
  }

  input::placeholder {
    color: rgb(225, 228, 232) !important;
    opacity: 0.7;
  }
`
export default TextInput
