import React from 'react'
import {Link as GatsbyLink} from 'gatsby'
import {Box, StyledOcticon, Link, themeGet} from '@primer/react'
import {LinkExternalIcon} from '@primer/octicons-react'
import styled from 'styled-components'
import NavHierarchy from '../util/nav-hierarchy'
import {useLocation, usePageContext} from '../layout'

const getActiveClass = props => {
  const location = NavHierarchy.getLocation(props.location.pathname)
  const href = NavHierarchy.getLocation(props.href)
  return NavHierarchy.isActiveUrl(location, href) ? 'active' : ''
}

const ActiveLink = ({className, children, ...props}) => (
  <Link as={GatsbyLink} getProps={p => ({className: `${className} ${getActiveClass(p)}`})} {...props}>
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
          <Box
            borderStyle="solid"
            borderColor="border.default"
            key={item.title}
            borderWidth={0}
            borderRadius={0}
            borderTopWidth={1}
            py={3}
            px={4}
            role="listitem"
          >
            <Box display="flex" flexDirection="column">
              <TopLevelLink to={item.url} key={item.title}>
                {item.title}
              </TopLevelLink>
              {secondLevelItems(children, path)}
            </Box>
          </Box>
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
    <Box display="flex" flexDirection="column" mt={2} role="list">
      {items.map(item => {
        const children = NavHierarchy.isActiveUrl(path, item.url)
          ? NavHierarchy.getHierarchy(item, {path, hideVariants: true})
          : null
        return (
          <Box key={item.title} role="listitem">
            <SecondLevelLink key={item.url} to={item.url}>
              {item.title}
              {item.description != null ? <Description>{item.description}</Description> : null}
            </SecondLevelLink>
            {thirdLevelItems(children, path)}
          </Box>
        )
      })}
    </Box>
  )
}

function thirdLevelItems(items) {
  if (items == null) {
    return null
  }

  return (
    <Box display="flex" flexDirection="column" mt={2} role="list">
      {items.map(item => (
        <Box key={item.title} role="listitem">
          <ThirdLevelLink key={item.url} to={item.url}>
            {item.title}
          </ThirdLevelLink>
        </Box>
      ))}
    </Box>
  )
}

function NavItems() {
  const location = useLocation()
  const {repositoryUrl} = usePageContext()
  const path = NavHierarchy.getLocation(location.pathname)
  const items = NavHierarchy.getHierarchy(null, {path, hideVariants: true})

  return (
    <>
      {topLevelItems(items, path)}
      <Box borderStyle="solid" borderColor="border.default" borderWidth={0} borderTopWidth={1} py={3} px={4}>
        <Link href={repositoryUrl} sx={{color: 'inherit'}}>
          <Box display="flex" justifyContent="space-between" alignItems="center" color="gray.5">
            GitHub
            <StyledOcticon icon={LinkExternalIcon} color="gray.5" />
          </Box>
        </Link>
      </Box>
    </>
  )
}

export default NavItems
