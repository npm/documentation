import {Absolute, BorderBox, Relative, Text} from '@primer/components'
import Highlight, {defaultProps} from 'prism-react-renderer'
import githubTheme from 'prism-react-renderer/themes/github'
import React, {useState, useEffect} from 'react'
import ClipboardCopy from './clipboard-copy'
import LiveCode from './live-code'

/**
 * Resize the scroll handle to the size of the code contents, since the former has to be positioned absolutely.
 */
const useScrollSize = () => {
  const ref = React.createRef()
  const [size, setSize] = useState({})

  useEffect(() => {
    // Skip if already resized.
    if (typeof size.width !== 'undefined') {
      return
    }

    const node = ref.current
    node.parentElement.style.position = 'relative'
    const computedStyle = getComputedStyle(node.parentElement)
    setSize({
      height:
        node.parentElement.clientHeight -
        parseInt(computedStyle.paddingTop, 10) -
        parseInt(computedStyle.paddingBottom, 10),
      width:
        node.parentElement.scrollWidth -
        parseInt(computedStyle.paddingLeft, 10) -
        parseInt(computedStyle.paddingRight, 10),
    })
  }, [size, ref])

  return [ref, size]
}

function Code({className, children, live, noinline}) {
  const language = className ? className.replace(/language-/, '') : ''
  const code = children.trim()
  const [scrollHandleRef, scrollSize] = useScrollSize()

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
            <div aria-hidden="true" style={{position: 'absolute', ...scrollSize}} ref={scrollHandleRef} />
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
}

export default Code
