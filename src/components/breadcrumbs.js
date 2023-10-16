import React from 'react'
import {Breadcrumbs as PrimerBreadcrumbs} from '@primer/react'
import {withPrefix} from 'gatsby'
import * as getNav from '../util/get-nav'
import {useLocation} from '../layout'

const Breadcrumbs = () => {
  const {pathname} = useLocation()
  const items = getNav.getItemBreadcrumbs(pathname)

  if (items.length <= 1) {
    return null
  }

  return (
    <PrimerBreadcrumbs sx={{mb: 4}}>
      {items.map(item => (
        <PrimerBreadcrumbs.Item
          key={item.url}
          href={withPrefix(item.url)}
          selected={getNav.isActiveUrl(pathname, item.url)}
        >
          {item.title}
        </PrimerBreadcrumbs.Item>
      ))}
    </PrimerBreadcrumbs>
  )
}

export default Breadcrumbs
