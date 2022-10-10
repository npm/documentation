import {MDXProvider} from '@mdx-js/react'
import {Link, theme} from '@primer/components'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import Blockquote from './blockquote'
import Code from './code'
import DescriptionList from './description-list'
import {H1, H2, H3, H4, H5, H6} from './heading'
import HorizontalRule from './horizontal-rule'
import Image from './image'
import InlineCode from './inline-code'
import List from './list'
import Paragraph from './paragraph'
import Table from './table'

const components = {
  a: Link,
  pre: props => props.children,
  code: Code,
  inlineCode: InlineCode,
  table: Table,
  img: Image,
  p: Paragraph,
  hr: HorizontalRule,
  blockquote: Blockquote,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  ul: List,
  ol: List.withComponent('ol'),
  dl: DescriptionList,
}

function wrapRootElement({element}) {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </MDXProvider>
  )
}

export default wrapRootElement
