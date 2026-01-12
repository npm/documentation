import React from 'react'
import {Text, Button} from '@primer/react'
import {Octicon} from '@primer/react/deprecated'
import {Highlight, themes, Prism} from 'prism-react-renderer'
import styled from 'styled-components'
import {CheckIcon, CopyIcon} from '@primer/octicons-react'
import copyToClipboard from 'copy-to-clipboard'
import {announce} from '../util/aria-live'
import * as styles from './code.module.css'
import {clsx} from 'clsx'
;(typeof global !== 'undefined' ? global : window).Prism = Prism
require('prismjs/components/prism-bash')

const ClipboardCopy = ({value, ...props}) => {
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
      size="small"
      onClick={() => {
        copyToClipboard(value)
        setCopied(true)
        announce(`Copied to clipboard`)
      }}
      className={clsx(styles.Button, props.className)}
    >
      <Octicon icon={copied ? CheckIcon : CopyIcon} style={{color: copied ? '#1a7f37' : '#656d76'}} />
    </Button>
  )
}

export const InlineCode = styled.code`
  padding: 0.2em 0.4em;
  font-family: var(--fontStack-monospace);
  font-size: 80%;
  background-color: var(--bgColor-neutral-muted);
  border-radius: 6px;
`
const colorMap = {
  'token comment': '#747458',
  'token function': '#cf3846',
  'token parameter variable': '#277d7b',
  'token assign-left variable': '#277d7b',
  'token string': '#db1068',
}

const MonoText = props => <Text className={styles.Text} {...props} />

const CodeBlock = ({children, code, className, style}) => (
  <div className={styles.Box}>
    <div style={style} className={styles.Box_1}>
      {code ? <ClipboardCopy value={code} className={styles.ClipboardCopy} /> : null}
      <div className={styles.Box_2}>
        <pre className={clsx(className, styles.Box_3)} tabIndex={0}>
          {children}
        </pre>
      </div>
    </div>
  </div>
)

function Code({className = '', prompt, children}) {
  if (prompt) {
    return (
      <CodeBlock style={themes.github.plain}>
        <MonoText>{children}</MonoText>
      </CodeBlock>
    )
  }

  const code = children.trim()
  const isBlock = className.startsWith('language-') || code.includes('\n')

  if (!isBlock) {
    return <InlineCode className={className}>{code}</InlineCode>
  }

  return (
    <Highlight code={code} language={className.replace(/language-/, '') || 'bash'} theme={themes.github}>
      {({className: highlightClassName, style, tokens, getLineProps, getTokenProps}) => (
        <CodeBlock className={highlightClassName} style={style} code={code}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => {
                const tokenProps = getTokenProps({token, key})
                const tokenStyle = colorMap[tokenProps.className]
                  ? {...tokenProps.style, color: colorMap[tokenProps.className]}
                  : tokenProps.style

                return <MonoText key={key} {...tokenProps} style={tokenStyle} />
              })}
            </div>
          ))}
        </CodeBlock>
      )}
    </Highlight>
  )
}

export default Code
