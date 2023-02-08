import {BorderBox, Box, Flex, StyledOcticon, Link, themeGet} from '@primer/components'
import {LinkExternalIcon} from '@primer/octicons-react'
import {Link as GatsbyLink} from 'gatsby'
import preval from 'preval.macro'
import React from 'react'
import styled from 'styled-components'
import NavHierarchy from '../nav-hierarchy'

// This code needs to run at build-time so it can access the file system.
const repositoryUrl = preval`
  const readPkgUp = require('read-pkg-up')
  const getPkgRepo = require('get-pkg-repo')
  try {
    const repo = getPkgRepo(readPkgUp.sync().package)
    module.exports = \`https://github.com/\${repo.user}/\${repo.project}\`
  } catch (error) {
    module.exports = ''
  }
`

const getActiveProps = className => props => {
  const location = NavHierarchy.getLocation(props.location.pathname)
  const href = NavHierarchy.getLocation(props.href)

  if (NavHierarchy.isActiveUrl(location, href)) {
    return {className: `${className} active`}
  }

  return {className: `${className}`}
}

const ActiveLink = ({className, children, ...props}) => (
  <Link as={GatsbyLink} getProps={getActiveProps(className)} {...props}>
    {children}
  </Link>
)

const NavLink = styled(ActiveLink)`
  color: inherit;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`

const TopLevelLink = styled(NavLink)`
  &.active {
    font-weight: ${themeGet('fontWeights.bold')};
    color: ${themeGet('colors.gray.8')};
  }
  &.activePage {
    color: ${themeGet('colors.gray.8')};
  }
`
const SecondLevelLink = styled(NavLink)`
  display: block;
  font-size: ${themeGet('fontSizes.1')};
  padding-top: ${themeGet('space.1')};
  padding-bottom: ${themeGet('space.1')};
  margin-top: ${themeGet('space.2')};
  &.active {
    font-weight: ${themeGet('fontWeights.bold')};
    color: ${themeGet('colors.gray.8')};
  }
`

const ThirdLevelLink = styled(NavLink)`
  display: block;
  font-size: ${themeGet('fontSizes.1')};
  padding-top: ${themeGet('space.1')};
  padding-bottom: ${themeGet('space.1')};
  border-left: solid 1px ${themeGet('colors.gray.3')};
  padding-left: calc(${themeGet('space.2')} + (${themeGet('space.1')} - 1px));
  color: ${themeGet('colors.blue.5')};
  &.active {
    border-left: solid ${themeGet('space.1')} ${themeGet('colors.gray.3')};
    padding-left: ${themeGet('space.2')};
    color: ${themeGet('colors.gray.8')};
  }
`

const Description = styled(Box)`
  & {
    color: ${themeGet('colors.gray.6')};
    font-size: 0.8em;
    font-weight: normal;
  }
`

function topLevelItems(items, path) {
  if (items == null) {
    return null
  }

  return (
    <>
      {items.map(item => {
        const children = NavHierarchy.isActiveUrl(path, item.url)
          ? NavHierarchy.getHierarchy(item, {path, hideVariants: true})
          : null

        return (
          <BorderBox key={item.title} borderWidth={0} borderRadius={0} borderTopWidth={1} py={3} px={4} role="listitem">
            <Flex flexDirection="column">
              <TopLevelLink to={item.url} key={item.title}>
                {item.title}
              </TopLevelLink>
              {secondLevelItems(children, path)}
            </Flex>
          </BorderBox>
        )
      })}
    </>
  )
}

function secondLevelItems(items, path) {
  if (items == null) {
    return null
  }

  return (
    <Flex flexDirection="column" mt={2} role="list">
      {items.map(item => {
        const children = NavHierarchy.isActiveUrl(path, item.url)
          ? NavHierarchy.getHierarchy(item, {path, hideVariants: true})
          : null
        return (
          <Box key={item.title} role="listitem">
            <SecondLevelLink key={item.url} to={item.url}>
              {item.title}
              {item.description != null ? (
                <>
                  <Description>{item.description}</Description>
                </>
              ) : null}
            </SecondLevelLink>
            {thirdLevelItems(children, path)}
          </Box>
        )
      })}
    </Flex>
  )
}

function thirdLevelItems(items) {
  if (items == null) {
    return null
  }

  return (
    <Flex flexDirection="column" mt={2} role="list">
      {items.map(item => (
        <Box key={item.title} role="listitem">
          <ThirdLevelLink key={item.url} to={item.url}>
            {item.title}
          </ThirdLevelLink>
        </Box>
      ))}
    </Flex>
  )
}

function githubLink() {
  if (!repositoryUrl) {
    return null
  }

  return (
    <BorderBox borderWidth={0} borderTopWidth={1} borderRadius={0} py={5} px={4}>
      <Link href={repositoryUrl} color="inherit">
        <Flex justifyContent="space-between" alignItems="center" color="gray.5">
          Edit on GitHub
          <StyledOcticon icon={LinkExternalIcon} color="gray.5" />
        </Flex>
      </Link>
    </BorderBox>
  )
}

function NavItems(props) {
  const path = NavHierarchy.getLocation(props.location.pathname)
  const items = NavHierarchy.getHierarchy(null, {path, hideVariants: true})

  return (
    <>
      {topLevelItems(items, path)}
      {props.editOnGitHub !== false ? githubLink(props) : null}
    </>
  )
}

export default NavItems
