import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import {Link, SSRProvider, ThemeProvider, theme} from '@primer/react'
import Blockquote from './mdx/blockquote'
import Code from './mdx/code'
import DescriptionList from './mdx/description-list'
import {H1, H2, H3, H4, H5, H6} from './mdx/heading'
import HorizontalRule from './mdx/horizontal-rule'
import Image from './mdx/image'
import InlineCode from './mdx/inline-code'
import List from './mdx/list'
import Paragraph from './mdx/paragraph'
import Table from './mdx/table'
import Index from './mdx/index'
import Note from './mdx/note'
import Prompt from './mdx/prompt'
import PromptReply from './mdx/prompt-reply'
import Screenshot from './mdx/screenshot'

function UnderlinedLink(props) {
  return <Link {...props} underline={true} />
}

console.log(theme)

const components = {
  a: UnderlinedLink,
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
  Index,
  Note,
  Prompt,
  PromptReply,
  Screenshot,
  Link: UnderlinedLink,
}

function RootElement({element}) {
  return (
    <SSRProvider>
      <MDXProvider components={components}>
        <ThemeProvider>{element}</ThemeProvider>
      </MDXProvider>
    </SSRProvider>
  )
}

export default RootElement
