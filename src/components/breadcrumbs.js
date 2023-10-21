import React from 'react'
import {Breadcrumbs as PrimerBreadcrumbs} from '@primer/react'
import {Link as GatsbyLink} from 'gatsby'
import * as getNav from '../util/get-nav'
import usePage from '../hooks/use-page'

const BreadcrumbItem = ({item, path}) => {
  const selected = getNav.isPathForItem(path, getNav.getItem(item.url))

  return (
    <PrimerBreadcrumbs.Item as={GatsbyLink} to={item.url} {...(selected ? {selected} : {})}>
      {item.shortName || item.title}
    </PrimerBreadcrumbs.Item>
  )
}

const Breadcrumbs = () => {
  const {pathname} = usePage().location
  const items = getNav.getItemBreadcrumbs(pathname, {hideVariants: true})

  if (items.length <= 1) {
    return null
  }

  return (
    <PrimerBreadcrumbs sx={{mb: 4}}>
      {items.map(item => (
        <BreadcrumbItem key={item.url} item={item} path={pathname} />
      ))}
    </PrimerBreadcrumbs>
  )
}

export default Breadcrumbs
