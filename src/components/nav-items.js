import React from 'react'
import {Link as GatsbyLink} from 'gatsby'
import {Box, Octicon, Link, themeGet} from '@primer/react'
import {LinkExternalIcon} from '@primer/octicons-react'
import styled from 'styled-components'
import getNav from '../util/get-nav'
import {useLocation, usePageContext} from '../layout'

const getActiveClass = props => {
  const location = getNav.getLocation(props.location.pathname)
  const href = getNav.getLocation(props.href)
  return getNav.isActiveUrl(location, href) ? 'active' : ''
}

const ActiveLink = ({className, children, ...props}) => (
  <Link as={GatsbyLink} getProps={p => ({className: `${className} ${getActiveClass(p)}`})} {...props}>
    {children}
  </Link>
)

const withItems = Component => {
  const WithItems = ({parent, path}) => {
    if (!parent || getNav.isActiveUrl(path, parent.url)) {
      const items = getNav.getHierarchy(parent, {path, hideVariants: true})
      if (items) {
        return <Component items={items} path={path} />
      }
    }
    return null
  }
  return WithItems
}

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

const TopLevelItems = withItems(({items, path}) => (
  <>
    {items.map(item => (
      <Box
        key={item.title}
        role="listitem"
        sx={{
          borderStyle: 'solid',
          borderColor: 'border.default',
          borderWidth: 0,
          borderRadius: 0,
          borderTopWidth: 1,
          py: 3,
          px: 4,
        }}
      >
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <TopLevelLink to={item.url} key={item.title}>
            {item.title}
          </TopLevelLink>
          <SecondLevelItems parent={item} path={path} />
        </Box>
      </Box>
    ))}
  </>
))

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

const Description = styled(Box)`
  & {
    color: ${themeGet('colors.gray.6')};
    font-size: 0.8em;
    font-weight: normal;
  }
`

const SecondLevelItems = withItems(({items, path}) => (
  <Box sx={{display: 'flex', flexDirection: 'column', mt: 2}} role="list">
    {items.map(item => (
      <Box key={item.title} role="listitem">
        <SecondLevelLink key={item.url} to={item.url}>
          {item.title}
          {item.description ? <Description>{item.description}</Description> : null}
        </SecondLevelLink>
        <ThirdLevelItems parent={item} path={path} />
      </Box>
    ))}
  </Box>
))

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

const ThirdLevelItems = withItems(({items}) => (
  <Box sx={{display: 'flex', flexDirection: 'column', mt: 2}} role="list">
    {items.map(item => (
      <Box key={item.title} role="listitem">
        <ThirdLevelLink key={item.url} to={item.url}>
          {item.title}
        </ThirdLevelLink>
      </Box>
    ))}
  </Box>
))

function NavItems() {
  const {repositoryUrl} = usePageContext()
  const location = useLocation()

  return (
    <>
      <TopLevelItems path={getNav.getLocation(location.pathname)} />
      <Box sx={{borderStyle: 'solid', borderColor: 'border.default', borderWidth: 0, borderTopWidth: 1, py: 3, px: 4}}>
        <Link href={repositoryUrl} sx={{color: 'inherit'}}>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'gray.5'}}>
            GitHub
            <Octicon icon={LinkExternalIcon} sx={{color: 'gray.5'}} />
          </Box>
        </Link>
      </Box>
    </>
  )
}

export default NavItems
