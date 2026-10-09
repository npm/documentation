import {useState} from 'preact/hooks'
import {LinkExternalIcon} from '@primer/octicons-react'
import * as getNav from '../util/get-nav'
import headerNavItems from '#theme/header-nav'
import site from '#theme/site'
import {ActionList, Divider, Group, Item, ItemWithSubNav} from './action-list'
import styles from './nav-items.module.css'

const toId = url => `nav-${url.replace(/[^a-z0-9]+/gi, '-')}`

const NavItem = ({item, path, depth}) => {
  const isCurrent = getNav.isActiveUrl(path, item.url)
  const items = getNav.getHierarchy(item, item.url, {hideVariants: true})
  const [open, setOpen] = useState(Boolean(items && isCurrent))

  if (items) {
    return (
      <ItemWithSubNav
        active={isCurrent}
        open={open}
        onToggle={() => setOpen(value => !value)}
        depth={depth - 1}
        id={toId(item.url)}
        subNav={<NavItems items={items} path={path} depth={depth + 1} />}
      >
        {item.title}
      </ItemWithSubNav>
    )
  }

  return (
    <Item href={item.url} active={isCurrent} aria-current={isCurrent ? 'page' : undefined} depth={depth - 1}>
      {item.title}
    </Item>
  )
}

const NavItems = ({items, path, depth}) =>
  items.map(item => <NavItem key={item.title} item={item} path={path} depth={depth} />)

const ExternalNavItem = ({title, ...props}) => (
  <Item trailingVisual={<LinkExternalIcon />} {...props}>
    {title}
  </Item>
)

/**
 * The site navigation, from `content/nav.yml`.
 */
const Navigation = ({pathname}) => {
  const items = getNav.getHierarchy(null, pathname, {hideVariants: true})

  return (
    <>
      <h3 className="visually-hidden">Site navigation</h3>
      <nav aria-label="Site">
        <ActionList>
          {items.map(item => (
            <Group key={item.title}>
              <NavItem item={item} path={pathname} depth={1} />
            </Group>
          ))}
          <Divider />
          {headerNavItems.map(item => (
            <div key={item.title} className={styles.headerNavItem}>
              <ExternalNavItem title={item.title} href={item.url} />
            </div>
          ))}
          <ExternalNavItem title="GitHub" href={site.repositoryUrl} />
        </ActionList>
      </nav>
    </>
  )
}

export default Navigation
