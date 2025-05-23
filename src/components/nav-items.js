import React from 'react'
import {Box, NavList} from '@primer/react'
import {LinkExternalIcon} from '@primer/octicons-react'
import Link from './link'
import * as getNav from '../util/get-nav'
import VisuallyHidden from './visually-hidden'
import headerNavItems from '../../content/header-nav.yml'
import usePage from '../hooks/use-page'
import useSiteMetadata from '../hooks/use-site-metadata'

const NavItem = ({item, path, depth}) => {
  const isCurrent = getNav.isActiveUrl(path, item.url)
  const items = getNav.getHierarchy(item, item.url, {hideVariants: true})

  return (
    <NavList.Item
      as={Link}
      to={item.url}
      defaultOpen={items && isCurrent}
      aria-current={isCurrent ? 'page' : null}
      sx={{fontSize: depth === 1 ? 2 : 1}}
    >
      {item.title}
      {items ? (
        <NavList.SubNav>
          <NavItems items={items} path={path} depth={depth + 1} />
        </NavList.SubNav>
      ) : null}
    </NavList.Item>
  )
}

const NavItems = ({items, path, depth = 1}) => (
  <>
    {items.map(item =>
      React.createElement(
        depth === 1 ? NavList.Group : React.Fragment,
        {key: item.title},
        <NavItem item={item} path={path} depth={depth} />,
      ),
    )}
  </>
)

const ExternalNavItem = ({title, ...props}) => (
  <NavList.Item sx={{fontSize: 2}} {...props}>
    {title}
    <NavList.TrailingVisual>
      <LinkExternalIcon />
    </NavList.TrailingVisual>
  </NavList.Item>
)

const Navigation = () => {
  const {repositoryUrl} = useSiteMetadata()
  const {pathname} = usePage().location
  const items = getNav.getHierarchy(null, pathname, {hideVariants: true})

  return (
    <>
      <VisuallyHidden as="h3">Site navigation</VisuallyHidden>
      <NavList aria-label="Site">
        <NavItems items={items} path={pathname} />
        <NavList.Divider />
        {headerNavItems.map(item => (
          <Box key={item.title} sx={{display: ['flex', null, null, 'none']}}>
            <ExternalNavItem title={item.title} href={item.url} />
          </Box>
        ))}
        <ExternalNavItem title="GitHub" href={repositoryUrl} />
      </NavList>
    </>
  )
}

export default Navigation
