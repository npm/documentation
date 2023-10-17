import React from 'react'
import {Box} from '@primer/react'
import {Link as GatsbyLink} from 'gatsby'
import {NavList} from '@primer/react/drafts'
import {LinkExternalIcon} from '@primer/octicons-react'
import * as getNav from '../util/get-nav'
import {useLocation, usePageContext} from '../layout'
import VisuallyHidden from './visually-hidden'
import headerNavItems from '../../content/header-nav.yml'

const NavItem = ({item, path}) => {
  const href = getNav.getLocation(item.url)
  const isCurrent = getNav.isActiveUrl(path, href)
  const items = getNav.getHierarchy(item, {path: item.url, hideVariants: true})

  return (
    <NavList.Item as={GatsbyLink} to={href} defaultOpen={items && isCurrent} aria-current={isCurrent ? 'page' : null}>
      {item.title}
      {items ? (
        <NavList.SubNav>
          <NavItems items={items} path={path} />
        </NavList.SubNav>
      ) : null}
    </NavList.Item>
  )
}

const NavItems = ({items, path}) => (
  <>
    {items.map(item => (
      <NavItem key={item.title} item={item} path={path} />
    ))}
  </>
)

const ExternalNavItem = ({title, href, ...props}) => (
  <NavList.Item {...props}>
    {title}
    <NavList.TrailingVisual>
      <LinkExternalIcon />
    </NavList.TrailingVisual>
  </NavList.Item>
)

const Navigation = () => {
  const location = useLocation()
  const {repositoryUrl} = usePageContext()
  const path = getNav.getLocation(location.pathname)
  const items = getNav.getHierarchy(null, {path, hideVariants: true})

  return (
    <>
      <VisuallyHidden>
        <h3>Site navigation</h3>
      </VisuallyHidden>
      <NavList aria-label="Site">
        <NavItems items={items} path={path} />
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
