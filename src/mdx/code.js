import React from 'react'
import {Box, Text, Button, Octicon} from '@primer/react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import githubTheme from 'prism-react-renderer/themes/github'
import {CheckIcon, CopyIcon} from '@primer/octicons-react'
import copy from 'copy-to-clipboard'
import {announce} from '../util/aria-live'

function ClipboardCopy({value, ...props}) {
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
        copy(value)
        setCopied(true)
        announce(`Copied to clipboard`)
      }}
    >
      <Octicon icon={copied ? CheckIcon : CopyIcon} sx={{color: copied ? 'success.fg' : 'fg.muted'}} />
    </Button>
  )
}

// export default ClipboardCopy

function Code({className, children}) {
  const language = className ? className.replace(/language-/, '') : ''
  const code = children.trim()

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={githubTheme}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
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
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row-reverse',
              borderRadius: 2,
              borderStyle: 'solid',
              borderWidth: 1,
              borderColor: 'border.muted',
            }}
          >
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
            <Box sx={{m: 0, p: 3, overflowX: 'auto'}}>
              <Box as="pre" className={className} tabIndex={0} sx={{m: 0}}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({line, key: i})}>
                    {line.map((token, key) => (
                      <Text key={key} {...getTokenProps({token, key})} sx={{fontFamily: 'mono', fontSize: 1}} />
                    ))}
                  </div>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Highlight>
  )
}

export default Code
