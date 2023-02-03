import React from 'react'
import {BorderBox, Text} from '@primer/components'

function Prompt({children}) {
  return (
    <BorderBox
      as="pre"
      mt={0}
      mb={3}
      p={3}
      border={0}
      style={{color: 'rgb(57, 58, 52)', backgroundColor: 'rgb(246, 248, 250)', overflow: 'auto'}}
    >
      <Text fontFamily="mono" fontSize={1}>
        {children}
      </Text>
    </BorderBox>
  )
}

export default Prompt
