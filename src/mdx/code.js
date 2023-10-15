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
    <Box position="relative">
      <div ref={paddingRef}>
        <Box position="absolute" top={0} right={0} p={2} zIndex={1}>
          <ClipboardCopy value={code} />
        </Box>
      </div>
      <Highlight {...defaultProps} code={code} language={language.replace(/language-/, '')} theme={githubTheme}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <Box
            tabIndex={0}
            borderWidth={1}
            borderStyle="solid"
            borderColor="border.default"
            borderRadius={2}
            as="pre"
            className={className}
            mt={0}
            mb={3}
            p={3}
            border={0}
            style={{...style, overflow: 'auto'}}
          >
            {/* This is the scroll handle, it is supposed to be focused with keyboard and scroll a wide codebox horizontally */}
            <div aria-hidden="true" style={{visibility: 'hidden', position: 'absolute', ...size}} ref={scrollRef} />
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <Text key={key} fontFamily="mono" fontSize={1} {...getTokenProps({token, key})} />
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
