import React from 'react'
import {Box, Text} from '@primer/react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import githubTheme from 'prism-react-renderer/themes/github'
import ClipboardCopy from '../components/clipboard-copy'
import useScrollSize from '../hooks/use-scroll-size'

function Code({className: language = '', children}) {
  const code = children.trim()
  const {scrollRef, paddingRef, size} = useScrollSize()

  return (
    <Box sx={{position: 'relative'}}>
      <div ref={paddingRef}>
        <Box sx={{position: 'absolute', top: 0, right: 0, p: 2, zIndex: 1}}>
          <ClipboardCopy value={code} />
        </Box>
      </div>
      <Highlight {...defaultProps} code={code} language={language.replace(/language-/, '')} theme={githubTheme}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <Box
            tabIndex={0}
            as="pre"
            className={className}
            style={style}
            sx={{
              overflow: 'auto',
              borderRadius: 2,
              mt: 0,
              mb: 3,
              p: 3,
              borderStyle: 'solid',
              borderWidth: 1,
              borderColor: 'border.muted',
            }}
          >
            {/* This is the scroll handle, it is supposed to be focused with keyboard and scroll a wide codebox horizontally */}
            <div aria-hidden="true" style={{visibility: 'hidden', position: 'absolute', ...size}} ref={scrollRef} />
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <Text key={key} {...getTokenProps({token, key})} sx={{fontFamily: 'mono', fontSize: 1}} />
                ))}
              </div>
            ))}
          </Box>
        )}
      </Highlight>
    </Box>
  )
}

export default Code
