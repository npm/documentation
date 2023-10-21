import {MDXProvider} from '@mdx-js/react'
import {Link, theme, SSRProvider, ThemeProvider} from '@primer/react'
import React from 'react'
import Blockquote from '../components/blockquote'
import Code from '../components/code'
import DescriptionList from '../components/description-list'
import {H1, H2, H3, H4, H5, H6} from '../components/heading'
import HorizontalRule from '../components/horizontal-rule'
import Image from '../components/image'
import InlineCode from '../components/inline-code'
import List from '../components/list'
import Paragraph from '../components/paragraph'
import Table from '../components/table'
import Index from '../components/index'
import Note from '../components/note'
import Prompt from '../components/prompt'
import PromptReply from '../components/prompt-reply'
import Screenshot from '../components/screenshot'

function UnderlinedLink(props) {
  return <Link {...props} underline={true}/>
}

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

function wrapRootElement({element}) {
  return (
    <SSRProvider>
      <MDXProvider components={components}>
        <ThemeProvider theme={theme}>{element}</ThemeProvider>
      </MDXProvider>
    </SSRProvider>
  )
}

export default wrapRootElement
