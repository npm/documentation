import {ChevronDownIcon, ChevronRightIcon} from '@primer/octicons-react'
import TableOfContentsList from './table-of-contents-list'
import cx from '../util/cx'
import styles from './table-of-contents.module.css'

export const Mobile = ({items}) =>
  items ? (
    <div className={styles.tocMobile}>
      <details open className={cx('Details', styles.Details)}>
        <summary className={cx('Button', styles.Button)}>
          <span className="Button-content">
            <span className={cx('Button-visual', 'Button-leadingVisual', styles.chevronOpen)}>
              <ChevronDownIcon />
            </span>
            <span className={cx('Button-visual', 'Button-leadingVisual', styles.chevronClosed)}>
              <ChevronRightIcon />
            </span>
            <span className="Button-label">Table of contents</span>
          </span>
        </summary>
        <TableOfContentsList items={items} className={styles.NavList} />
      </details>
    </div>
  ) : null

export const Desktop = ({items}) =>
  items ? (
    <div className={styles.tocDesktop}>
      <h2 id="toc-heading" className={cx('Heading', styles.Heading)}>
        Table of contents
      </h2>
      <div className={styles.Box}>
        <TableOfContentsList
          aria-labelledby="toc-heading"
          items={items}
          className={cx(styles.NavList, styles.TableOfContents)}
        />
      </div>
    </div>
  ) : null
