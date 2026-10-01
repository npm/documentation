import {useState} from 'preact/hooks'
import withIsland from '@doc-kit/generator-react/html/ui/islands/withIsland.jsx'
import {ActionList, Item, ItemWithSubNav} from './action-list'
import cx from '../util/cx'

const toId = url => `toc-${url.replace(/[^a-z0-9]+/gi, '-')}`

const TableOfContentsItem = ({item, index, count, depth}) => {
  const [open, setOpen] = useState(false)
  const label = `${item.title}, ${index + 1} of ${count}`

  if (item.items) {
    return (
      <ItemWithSubNav
        open={open}
        onToggle={() => setOpen(value => !value)}
        depth={depth}
        id={toId(item.url)}
        subNav={<TableOfContentsItems items={item.items} depth={depth + 1} />}
      >
        {item.title}
      </ItemWithSubNav>
    )
  }

  return (
    <Item href={item.url} aria-label={label} depth={depth}>
      {item.title}
    </Item>
  )
}

const TableOfContentsItems = ({items, depth}) =>
  items.map((item, index) => (
    <TableOfContentsItem key={item.url} item={item} index={index} count={items.length} depth={depth} />
  ))

/**
 * The list of a page's headings, nested like the headings are. Sections with
 * sub-sections expand on click.
 */
const TableOfContentsList = ({'aria-labelledby': ariaLabelledBy, items, className}) => (
  <nav aria-labelledby={ariaLabelledBy} className={cx('toc-list', className)}>
    <ActionList>
      <TableOfContentsItems items={items} depth={0} />
    </ActionList>
  </nav>
)

export default withIsland(TableOfContentsList, {name: 'TableOfContentsList', on: {idle: true}})
