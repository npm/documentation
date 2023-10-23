import React from 'react'
import {Box, Text, Button, Octicon, themeGet} from '@primer/react'
import {Highlight, themes, Prism} from 'prism-react-renderer'
import styled from 'styled-components'
import {CheckIcon, CopyIcon} from '@primer/octicons-react'
import copyToClipboard from 'copy-to-clipboard'
import {announce} from '../util/aria-live'
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
      {...props}
      aria-label="Copy to clipboard"
      onClick={() => {
        copyToClipboard(value)
        setCopied(true)
        announce(`Copied to clipboard`)
      }}
    >
      <Octicon icon={copied ? CheckIcon : CopyIcon} sx={{color: copied ? 'success.fg' : 'fg.muted'}} />
    </Button>
  )
}

export const InlineCode = styled.code`
  padding: 0.2em 0.4em;
  font-family: ${themeGet('fonts.mono')};
  font-size: 85%;
  background-color: ${themeGet('colors.neutral.muted')};
  border-radius: ${themeGet('radii.2')};
`

const MonoText = props => <Text sx={{fontFamily: 'mono', fontSize: 1}} {...props} />

const CodeBlock = ({children, code, className, style}) => (
  <Box
    sx={{
      // Make <pre> adjust to the width of the container
      // https://stackoverflow.com/a/14406386
      display: 'table',
      tableLayout: 'fixed',
      width: '100%',
      mb: 3,
    }}
  >
    <Box
      style={style}
      sx={{
        ...(code ? {display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse'} : {}),
        borderRadius: 2,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'border.muted',
      }}
    >
      {code ? (
        <ClipboardCopy
          value={code}
          sx={{
            borderRadius: 0,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: 'border.muted',
            marginTop: '-1px',
            marginRight: '-1px',
            borderTopRightRadius: 2,
            borderBottomLeftRadius: 2,
          }}
        />
      ) : null}
      <Box sx={{m: 0, p: 3, overflowX: 'auto'}}>
        <Box as="pre" className={className} tabIndex={0} sx={{m: 0}}>
          {children}
        </Box>
      </Box>
    </Box>
  </Box>
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
            <Box key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <MonoText key={key} {...getTokenProps({token, key})} />
              ))}
            </Box>
          ))}
        </CodeBlock>
      )}
    </Highlight>
  )
}

export default Code
