import {useEffect, useState} from 'preact/hooks'
import {CheckIcon, CopyIcon} from '@primer/octicons-react'
import withIsland from '@doc-kit/generator-react/html/ui/islands/withIsland.jsx'
import {announce} from '../util/aria-live'
import cx from '../util/cx'

/**
 * The "copy to clipboard" button of a code block. The code is read from the
 * block the button sits in, so the button is the only part of a code block
 * that needs to be interactive.
 */
const ClipboardCopy = ({className}) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) {
        setCopied(false)
      }
    }, 1000)

    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <button
      type="button"
      aria-label="Copy to clipboard"
      className={cx('Button', 'Button--small', 'code-block-copy', className)}
      onClick={event => {
        const code = event.currentTarget.closest('[data-code-block]')?.querySelector('pre')?.textContent ?? ''
        navigator.clipboard?.writeText(code.replace(/\n$/, ''))
        setCopied(true)
        announce(`Copied to clipboard`)
      }}
    >
      <span className="Button-content">
        <span className="Button-label">{copied ? <CheckIcon fill="#1a7f37" /> : <CopyIcon fill="#656d76" />}</span>
      </span>
    </button>
  )
}

export default withIsland(ClipboardCopy, {name: 'ClipboardCopy', on: {interaction: 'pointerover,focusin,touchstart'}})
