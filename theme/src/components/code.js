import {Absolute, BorderBox, Relative, Text} from '@primer/components'
import Highlight, {defaultProps} from 'prism-react-renderer'
import githubTheme from 'prism-react-renderer/themes/github'
import React, {useState, useEffect} from 'react'
import ClipboardCopy from './clipboard-copy'
import LiveCode from './live-code'

function Code({className, children, live, noinline}) {
  const [scrollHandleStyle, setScrollHandleStyle] = useState({position: 'absolute'})
  const language = className ? className.replace(/language-/, '') : ''
  const code = children.trim()
  const scrollHandleRef = React.createRef()

  useEffect(() => {
    resizeScrollHandle()
  })

  if (live) {
    return <LiveCode code={code} language={language} noinline={noinline} />
  }

  return (
    <Relative>
      <Absolute top={0} right={0} p={2} zIndex={1}>
        <ClipboardCopy value={code} />
      </Absolute>
      <Highlight {...defaultProps} code={code} language={language} theme={githubTheme}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <BorderBox as="pre" className={className} mt={0} mb={3} p={3} border={0} style={{...style, overflow: 'auto'}}>
            {/* This is the scroll handle, it is supposed to be focused with keyboard and scroll a wide codebox horizontally */}
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
            <div aria-hidden="true" tabIndex={0} style={scrollHandleStyle} ref={scrollHandleRef} aria-label={code}>
              &nbsp;
            </div>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <Text key={key} fontFamily="mono" fontSize={1} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </BorderBox>
        )}
      </Highlight>
    </Relative>
  )

  /**
   * Resize the scroll handle to the size of the code contents, since the former has to be positioned absolutely.
   */
  function resizeScrollHandle() {
    // Skip if already resized.
    if (typeof scrollHandleStyle.width !== 'undefined') {
      return
    }

    const node = scrollHandleRef.current
    node.parentElement.style.position = 'relative'
    const computedStyle = getComputedStyle(node.parentElement)
    const height =
      node.parentElement.clientHeight -
      parseInt(computedStyle.paddingTop, 10) -
      parseInt(computedStyle.paddingBottom, 10)
    const width =
      node.parentElement.scrollWidth -
      parseInt(computedStyle.paddingLeft, 10) -
      parseInt(computedStyle.paddingRight, 10)
    setScrollHandleStyle({...scrollHandleStyle, height, width})
  }
}

export default Code
