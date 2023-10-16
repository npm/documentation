import React from 'react'
import {Button, Octicon} from '@primer/react'
import {CheckIcon, CopyIcon} from '@primer/octicons-react'
import copy from 'copy-to-clipboard'
import {announce} from '../util/aria-live'

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
    <Button
      aria-label="Copy to clipboard"
      onClick={() => {
        copy(value)
        setCopied(true)
        announce(`Copied to clipboard`)
      }}
      sx={{px: 2}}
    >
      <Octicon icon={copied ? CheckIcon : CopyIcon} sx={{color: copied ? 'success.fg' : 'fg.muted'}} />
    </Button>
  )
}

export default ClipboardCopy
