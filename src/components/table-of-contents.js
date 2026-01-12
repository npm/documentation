import React from 'react'
import {Heading, Details, useDetails, Button, NavList} from '@primer/react'
import {ChevronDownIcon, ChevronRightIcon} from '@primer/octicons-react'
import usePage from '../hooks/use-page'

import * as styles from './table-of-contents.module.css'
import {clsx} from 'clsx'

const TableOfContentsItems = ({items, depth}) => (
  <>
    {items.map((item, index) => (
      <React.Fragment key={item.title}>
        <NavList.Item
          href={item.url}
          aria-label={`${item.title}, ${index + 1} of ${items.length}`}
          aria-labelledby={null}
        >
          {item.title}
          {item.items ? (
            <NavList.SubNav>
              <TableOfContentsItems items={item.items} depth={depth + 1} />
            </NavList.SubNav>
          ) : null}
        </NavList.Item>
      </React.Fragment>
    ))}
  </>
)

const TableOfContents = ({'aria-labelledby': ariaLabelledBy, items, depth = 1, className, ...props}) => (
  <NavList aria-labelledby={ariaLabelledBy} {...props} className={clsx(styles.NavList, className)}>
    <TableOfContentsItems items={items} depth={depth} />
  </NavList>
)

const withTableOfContents = Component => {
  const WithTableOfContents = props => {
    const {tableOfContents} = usePage().pageContext
    return tableOfContents ? <Component {...props} items={tableOfContents} /> : null
  }
  return WithTableOfContents
}

export const Mobile = withTableOfContents(({items}) => {
  const {getDetailsProps, open} = useDetails({defaultOpen: true})
  return (
    <div className={styles.tocMobile}>
      <Details {...getDetailsProps()} className={styles.Details}>
        <Button
          as="summary"
          leadingIcon={open ? ChevronDownIcon : ChevronRightIcon}
          className={`${styles.Button} ${open ? styles.buttonOpen : styles.buttonClosed}`}
        >
          Table of contents
        </Button>
        <TableOfContents items={items} />
      </Details>
    </div>
  )
})

export const Desktop = withTableOfContents(({items}) => (
  <div className={styles.tocDesktop}>
    <Heading as="h2" id="toc-heading" className={styles.Heading}>
      Table of contents
    </Heading>
    <div className={styles.Box}>
      <TableOfContents aria-labelledby="toc-heading" items={items} className={styles.TableOfContents} />
    </div>
  </div>
))
