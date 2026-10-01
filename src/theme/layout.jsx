import {PageProvider} from './hooks/use-page'
import {SKIP_TO_CONTENT_ID, SKIP_TO_SEARCH_ID} from './constants'
import site from '#theme/site'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Breadcrumbs from './components/breadcrumbs'
import VariantSelect from './components/variant-select'
import PageFooter from './components/page-footer'
import * as TableOfContents from './components/table-of-contents'
import {SkipBox, SkipLink, SkipNav} from './components/skip-nav'
import cx from './util/cx'
import styles from './layout.module.css'

const HeroLayout = ({children}) => (
  <main className={styles.Hero}>
    <div data-color-mode="dark" data-light-theme="light" data-dark-theme="dark_dimmed" className={styles.DarkTheme}>
      <div className={cx(styles.Container, styles.HeroContainer)}>
        <h1 className={cx('Heading', styles.Heading)}>{site.title}</h1>
        <p className={styles.Text}>{site.description}</p>
      </div>
    </div>
    <div className={cx(styles.Container, styles.HeroContainer)}>
      <SkipNav />
      <div className="markdown">{children}</div>
    </div>
  </main>
)

const DefaultLayout = ({metadata, children}) => (
  <div className={styles.Default}>
    <main className={styles.Container}>
      <div className={styles.titleBox}>
        <Breadcrumbs />
        <h1 className="page-title">{metadata.title}</h1>
        {metadata.description ? <div className={styles.description}>{metadata.description}</div> : null}
      </div>
      <SkipNav />
      <VariantSelect pathname={metadata.url} />
      <TableOfContents.Mobile items={metadata.tableOfContents} />
      <div className="markdown">{children}</div>
      <PageFooter />
    </main>
    <TableOfContents.Desktop items={metadata.tableOfContents} />
  </div>
)

/**
 * The page, as the previous site rendered it: skip links, the sticky header,
 * the sidebar, and the content with its table of contents.
 *
 * `metadata` is the page's frontmatter plus what the `npm` generator adds:
 * `url`, `tableOfContents`, `editUrl`, and the contributors.
 *
 * @param {{ metadata: object, children: import('preact').ComponentChildren }} props
 */
export default function Layout({metadata, children}) {
  const path = metadata.url ?? '/'

  return (
    <PageProvider value={{path, metadata}}>
      <div data-color-mode="light" data-light-theme="light" data-dark-theme="dark" className={styles.Box}>
        <SkipBox>
          <SkipLink href={`#${SKIP_TO_SEARCH_ID}`}>Skip to search</SkipLink>
          <SkipLink href={`#${SKIP_TO_CONTENT_ID}`}>Skip to content</SkipLink>
        </SkipBox>
        <Header pathname={path} />
        <div className={styles.Box_1}>
          <div className={styles.sidebarContainer}>
            <Sidebar pathname={path} />
          </div>
          {path === '/' ? (
            <HeroLayout>{children}</HeroLayout>
          ) : (
            <DefaultLayout metadata={metadata}>{children}</DefaultLayout>
          )}
        </div>
      </div>
    </PageProvider>
  )
}
