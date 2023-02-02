import React from 'react'
import { BorderBox } from '@primer/components'

function Note ({ children }) {
  return (
    <BorderBox
      borderWidth={1}
      borderRadius={0}
      borderColor='blue.1'
      backgroundColor='blue.0'
      px={3}
      py={2}
      my={4}
    >
      {React.Children.toArray(children).map((child, index, list) => (
        React.cloneElement(child, {
          style: index === list.length - 1 ? { marginBottom: '0' } : null,
        })
      ))}
    </BorderBox>
  )
}

export default Note
