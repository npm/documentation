import React from 'react'
import FrameComponent, { FrameContextConsumer } from 'react-frame-component'
import { StyleSheetManager } from 'styled-components'
import Measure from 'react-measure'

function Frame ({ children }) {
  const [height, setHeight] = React.useState('auto')
  return (
    <FrameComponent style={{ width: '100%', border: 0, height }}>
      <FrameContextConsumer>
        {({ document }) => {
          // By default, styled-components injects styles in the head of the page.
          // However, styles from the page's head don't apply inside iframes.
          // We're using StyleSheetManager to make styled-components inject styles
          // into the head of the iframe instead.
          return (
            <StyleSheetManager target={document.head}>
              <Measure
                // iframes don't adjust to the height of their content by default.
                // We're using Measure to calculate the size of the content
                // and adjust the iframe's height dynamically.
                bounds={true}
                onResize={rect => setHeight(rect.bounds.height)}
              >
                {({ measureRef }) => <div ref={measureRef}>{children}</div>}
              </Measure>
            </StyleSheetManager>
          )
        }}
      </FrameContextConsumer>
    </FrameComponent>
  )
}

export default Frame
