import {BorderBox, Box, Flex, Grid, Heading, Position, StyledOcticon, Text} from '@primer/components'
import {ChevronDownIcon, ChevronRightIcon} from '@primer/octicons-react'
import React from 'react'
import Head from '../components/head'
import Header, {HEADER_HEIGHT} from '../components/header'
import PageFooter from '../components/page-footer'
import Sidebar from '../components/sidebar'
import SourceLink from '../components/source-link'
import StatusLabel from '../components/status-label'
import TableOfContents from '../components/table-of-contents'
import VariantSelect from '../components/variant-select'
import NavHierarchy from '../util/nav-hierarchy'
import Details from '../components/details'
import * as Slugger from '../hooks/use-slugger'
import './style.css'

function Layout({children, pageContext, location}) {
  const {title, description, status, source} = pageContext.frontmatter

  const variantRoot = NavHierarchy.getVariantRoot(location.pathname)

  return (
    <Slugger.Provider>
      <Flex flexDirection="column" minHeight="100vh">
        <Head title={title} description={description} />
        <Header repositoryUrl={pageContext.repositoryUrl} location={location} />
        <Flex flex="1 1 auto" flexDirection="row" css={{zIndex: 0}} role="main">
          <Box display={['none', null, null, 'block']}>
            <Sidebar repositoryUrl={pageContext.repositoryUrl} location={location} />
          </Box>
          <Grid
            id="skip-nav"
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
              <BorderBox borderWidth={0} borderBottomWidth={1} borderRadius={0} pb={2}>
                <Box>
                  <Box>
                    <Heading as="h1">{title}</Heading>
                    {description}
                  </Box>
                </Box>
              </BorderBox>
              {variantRoot != null ? (
                <Box css={{'margin-top': '25px'}}>
                  <VariantSelect
                    overlay={true}
                    direction="se"
                    menuWidth="min(30ch, 500px)"
                    root={variantRoot}
                    location={location}
                  />
                </Box>
              ) : null}
            </Box>
            {pageContext.tableOfContents ? (
              <Position
                display={['none', null, 'block']}
                css={{gridArea: 'table-of-contents', overflow: 'auto'}}
                position="sticky"
                top={HEADER_HEIGHT + 24}
                mt="6px"
                maxHeight={`calc(100vh - ${HEADER_HEIGHT}px - 24px)`}
                pr={1}
                pl={1}
                pb={1}
              >
                <Text display="inline-block" fontWeight="bold" mb={1} id="table-of-content-label">
                  Table of contents
                </Text>
                <TableOfContents items={pageContext.tableOfContents} labelId="table-of-content-label" />
              </Position>
            ) : null}
            <Box css={{gridArea: 'content'}}>
              {status || source ? (
                <Flex mb={3} alignItems="center">
                  {status ? <StatusLabel status={status} /> : null}
                  <Box mx="auto" />
                  {source ? <SourceLink href={source} /> : null}
                </Flex>
              ) : null}
              {pageContext.tableOfContents ? (
                <Box display={['block', null, 'none']} mb={3}>
                  <Details>
                    {({open}) => (
                      <>
                        <Text as="summary" fontWeight="bold">
                          {open ? (
                            <StyledOcticon icon={ChevronDownIcon} mr={2} />
                          ) : (
                            <StyledOcticon icon={ChevronRightIcon} mr={2} />
                          )}
                          Table of contents
                        </Text>
                        <Box pt={1}>
                          <TableOfContents items={pageContext.tableOfContents} />
                        </Box>
                      </>
                    )}
                  </Details>
                </Box>
              ) : null}
              {children}
              <PageFooter editUrl={pageContext.editUrl} contributors={pageContext.contributors} />
            </Box>
          </Grid>
        </Flex>
      </Flex>
    </Slugger.Provider>
  )
}

export default Layout
