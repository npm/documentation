import {Button, StyledOcticon, themeGet} from '@primer/components'
import {CheckIcon, CopyIcon} from '@primer/octicons-react'
import styled from 'styled-components'
import copy from 'copy-to-clipboard'
import React from 'react'
import {announce} from '../aria-live'

const CopyToClipboard = styled(Button)`
  &:focus {
    box-shadow: 0 0 0 3px ${themeGet('colors.blue.5')};
  }
`

function ClipboardCopy({value}) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) {
        setCopied(false)
      }
    }, 1000)

    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <CopyToClipboard
      aria-label="Copy to clipboard"
      onClick={() => {
        copy(value)
        setCopied(true)
        announce(`Copied to clipboard`)
      }}
    >
      {copied ? <StyledOcticon icon={CheckIcon} color="green.5" /> : <StyledOcticon icon={CopyIcon} color="gray.7" />}
    </CopyToClipboard>
  )
}

export default ClipboardCopy
