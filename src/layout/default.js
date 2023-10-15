import React from 'react'
import {Box, Heading} from '@primer/react'
import PageFooter from '../components/page-footer'
import * as TableOfContents from '../components/table-of-contents'
import VariantSelect from '../components/variant-select'
import withLayout from '../layout'

const Layout = ({children, pageContext: {frontmatter}}) => {
  const {title, description} = frontmatter

  return (
    <Box
      display="grid"
      maxWidth="100%"
      gridTemplateColumns={['100%', null, 'minmax(0, 65ch) 220px']}
      gridTemplateAreas={['"heading" "content"', null, '"heading table-of-contents" "content table-of-contents"']}
      gridColumnGap={[null, null, 6, 7]}
      gridRowGap={3}
      mx="auto"
      p={[5, 6, null, 7]}
      css={{alignItems: 'start', alignSelf: 'start'}}
      role="region"
    >
      <Box css={{gridArea: 'heading'}}>
        <Box
          borderStyle="solid"
          borderColor="border.default"
          borderWidth={0}
          borderBottomWidth={1}
          borderRadius={0}
          pb={2}
        >
          <Heading as="h1">{title}</Heading>
          {description}
        </Box>
        <VariantSelect />
      </Box>
      <TableOfContents.Desktop />
      <Box css={{gridArea: 'content'}}>
        <TableOfContents.Mobile />
        {children}
        <PageFooter />
      </Box>
    </Box>
  )
}

export default withLayout(Layout)
