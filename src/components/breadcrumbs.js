import React from 'react'
import {Breadcrumbs as PrimerBreadcrumbs} from '@primer/react'
import {Link as GatsbyLink} from 'gatsby'
import * as getNav from '../util/get-nav'
import {useLocation} from '../layout'

const BreadcrumbItem = ({item, path}) => {
  // TODO: hide variant name
  const href = getNav.getLocation(item.url)
  const selected = getNav.isPathForItem(path, getNav.getItem(href))

  return (
    <PrimerBreadcrumbs.Item as={GatsbyLink} to={href} {...(selected ? {selected} : {})}>
      {item.title}
    </PrimerBreadcrumbs.Item>
  )
}

const Breadcrumbs = () => {
  const location = useLocation()
  const path = getNav.getLocation(location.pathname)
  const items = getNav.getItemBreadcrumbs(location.pathname)

  if (!items || items.length <= 1) {
    return null
  }

  return (
    <PrimerBreadcrumbs sx={{mb: 4}}>
      {items.map(item => (
        <BreadcrumbItem key={item.url} item={item} path={path} />
      ))}
    </PrimerBreadcrumbs>
  )
}

export default Breadcrumbs
