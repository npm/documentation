import React from 'react'
import {Link as GatsbyLink} from 'gatsby'
import {NavList} from '@primer/react/drafts'
import {LinkExternalIcon} from '@primer/octicons-react'
import * as getNav from '../util/get-nav'
import {useLocation, usePageContext} from '../layout'
import VisuallyHidden from './visually-hidden'

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
        <NavList.Item href={repositoryUrl}>
          GitHub
          <NavList.TrailingVisual>
            <LinkExternalIcon />
          </NavList.TrailingVisual>
        </NavList.Item>
      </NavList>
    </>
  )
}

export default Navigation
