import {Absolute, BorderBox, Relative, Text} from '@primer/components'
import Highlight, {defaultProps} from 'prism-react-renderer'
import githubTheme from 'prism-react-renderer/themes/github'
import React from 'react'
import ClipboardCopy from './clipboard-copy'
import LiveCode from './live-code'

function Code({className, children, live, noinline}) {
  const language = className ? className.replace(/language-/, '') : ''
  const code = children.trim()

  if (live) {
    return <LiveCode code={code} language={language} noinline={noinline} />
  }

  return (
    <Relative>
      <Absolute top={0} right={0} p={2}>
        <ClipboardCopy value={code} />
      </Absolute>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={githubTheme}
      >
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <BorderBox
            as="pre"
            className={className}
            mt={0}
            mb={3}
            p={3}
            border={0}
            style={{...style, overflow: 'auto'}}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <Text
                    key={key}
                    fontFamily="mono"
                    fontSize={1}
                    {...getTokenProps({token, key})}
                  />
                ))}
              </div>
            ))}
          </BorderBox>
        )}
      </Highlight>
    </Relative>
  )
}

export default Code
