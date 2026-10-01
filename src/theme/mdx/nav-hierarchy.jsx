import Link from '../components/link'
import * as getNav from '../util/get-nav'
import usePage from '../hooks/use-page'

const HierarchyItem = ({item, maxDepth, depth, hideVariants}) => {
  const hierarchy = getNav.getHierarchy(item, null, {hideVariants})

  return (
    <li key={item.url}>
      <Link key={item.title} to={item.url}>
        {item.title}
      </Link>
      {item.description ? <div className="nav-hierarchy-description">{item.description}</div> : null}
      {hierarchy ? (
        <Hierarchy items={hierarchy} maxDepth={maxDepth} depth={depth + 1} hideVariants={hideVariants} />
      ) : null}
    </li>
  )
}

const Hierarchy = ({items, maxDepth, depth, hideVariants}) => {
  if (maxDepth && depth > maxDepth) {
    return null
  }

  return (
    <ul>
      {items.map(item => (
        <HierarchyItem key={item.url} item={item} maxDepth={maxDepth} depth={depth} hideVariants={hideVariants} />
      ))}
    </ul>
  )
}

/**
 * `<Index />`: the pages below the current one in the navigation.
 */
function NavHierarchy({depth, hideVariants}) {
  const {path} = usePage()
  const hierarchy = getNav.getHierarchy(getNav.getItem(path), null, {hideVariants})

  return <Hierarchy items={hierarchy} maxDepth={Number(depth) || undefined} depth={1} hideVariants={hideVariants} />
}

export default NavHierarchy
