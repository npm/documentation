import {BaseStyles} from '@primer/components'
import React from 'react'
import SkipLink from './skip-link'

function wrapPageElement({element}) {
  return (
    <BaseStyles>
      <SkipLink />
      {element}
    </BaseStyles>
  )
}

export default wrapPageElement
