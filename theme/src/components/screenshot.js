import React from 'react'
import {withPrefix} from 'gatsby'

function Screenshot(props) {
  if (!props.src) {
    throw new Error('src is required')
  }

  if (!props.alt) {
    throw new Error('alt text is required')
  }

  return (
    <div>
      <img
        src={withPrefix(props.src)}
        alt={props.alt}
        style={{border: 'solid 1px #999999', marginTop: '15px', maxWidth: 'min(100%, 525px)', maxHeight: '300px'}}
      />
    </div>
  )
}

export default Screenshot
