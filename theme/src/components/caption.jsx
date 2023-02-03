import {Text} from '@primer/components'
import React from 'react'

function Caption(props) {
  return <Text as="p" mt={2} mb={3} fontSize={1} color="gray.5" {...props} />
}

export default Caption
