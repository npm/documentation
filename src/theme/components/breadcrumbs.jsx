import * as getNav from '../util/get-nav'
import usePage from '../hooks/use-page'
import cx from '../util/cx'
import styles from './breadcrumbs.module.css'

const BreadcrumbItem = ({item, path}) => {
  const selected = getNav.isPathForItem(path, getNav.getItem(item.url))

  return (
    <li className="Breadcrumbs-itemWrapper">
      <a
        href={item.url}
        className={cx('Breadcrumbs-item', selected && 'selected')}
        aria-current={selected ? 'page' : undefined}
      >
        {item.shortName || item.title}
      </a>
    </li>
  )
}

const Breadcrumbs = () => {
  const {path} = usePage()
  const items = getNav.getItemBreadcrumbs(path, {hideVariants: true})

  if (items.length <= 1) {
    return null
  }

  return (
    <nav className={cx('Breadcrumbs', styles.Breadcrumbs)} aria-label="Breadcrumbs">
      <ol className="Breadcrumbs-list">
        {items.map(item => (
          <BreadcrumbItem key={item.url} item={item} path={path} />
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
