import {Button, StyledOcticon} from '@primer/components'
import {CheckIcon, CopyIcon} from '@primer/octicons-react'
import copy from 'copy-to-clipboard'
import React from 'react'

function ClipboardCopy({value}) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <Button
      aria-label="Copy to clipboard"
      onClick={() => {
        copy(value)
        setCopied(true)
      }}
    >
      {copied ? <StyledOcticon icon={CheckIcon} color="green.5" /> : <StyledOcticon icon={CopyIcon} color="gray.7" />}
    </Button>
  )
}

export default ClipboardCopy
