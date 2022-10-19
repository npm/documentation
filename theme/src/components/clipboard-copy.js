import {Button, StyledOcticon} from '@primer/components'
import {CheckIcon, CopyIcon} from '@primer/octicons-react'
import copy from 'copy-to-clipboard'
import React from 'react'

const afterCopyTimeout = 1000

function ClipboardCopy({value}) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false)
    }, afterCopyTimeout)

    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <Button
      aria-label="Copy to clipboard"
      onClick={() => {
        copy(value)
        setCopied(true)
        announceCopied()
      }}
    >
      {copied ? <StyledOcticon icon={CheckIcon} color="green.5" /> : <StyledOcticon icon={CopyIcon} color="gray.7" />}
    </Button>
  )

  // Announce by the screen reader
  function announceCopied(msg) {
    // Get curently focused elem
    const initiallyFocused = document.activeElement
    // Create new element for the announcement text
    const announcement = document.createElement("div")
    // Make it focusable
    announcement.setAttribute('tabindex', '-1')
    announcement.style.position = 'absolute'
    announcement.style.opacity = '0'
    announcement.appendChild(document.createTextNode("copied to clipboard"))
    document.body.appendChild(announcement)
    announcement.focus({ preventScroll: true })
    // Return focus to the initially focused element
    setTimeout(() => { initiallyFocused.focus();  }, afterCopyTimeout)
    // Delete the announcement element
    setTimeout(() => { announcement.remove() }, 3000)
  }
}

export default ClipboardCopy
