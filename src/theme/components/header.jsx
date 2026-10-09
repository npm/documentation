import {useEffect} from 'preact/hooks'
import withIsland from '@doc-kit/generator-react/html/ui/islands/withIsland.jsx'
import * as Search from './search'
import NavDrawer from './nav-drawer'
import Link from './link'
import SiteTitle from './site-title'
import useSearch from '../hooks/use-search'
import {SKIP_TO_SEARCH_ID, Z_INDEX} from '../constants'
import headerNavItems from '#theme/header-nav'
import styles from './header.module.css'

/**
 * The sticky site header: the npm gradient bar, the site title, search, and
 * the links to npmjs.com. On narrow screens, search and the navigation open
 * from buttons instead.
 */
function Header({pathname}) {
  const search = useSearch(pathname)

  // "Skip to search" is a link to the search box, which has to be focused
  // explicitly, since it is an input.
  useEffect(() => {
    if (window.location.hash === `#${SKIP_TO_SEARCH_ID}`) {
      document.getElementById(SKIP_TO_SEARCH_ID)?.focus()
    }
  }, [])

  return (
    <div className={styles.stickyHeader} style={{zIndex: Z_INDEX.HEADER}}>
      <div data-color-mode="dark" data-light-theme="light" data-dark-theme="dark_dimmed">
        <div className={styles.NpmHeaderBar} />
        <header className={styles.headerBox}>
          <div className={styles.Box}>
            <SiteTitle logo={true} className={styles.SiteTitle} />
            <div className={styles.searchDesktop}>
              <Search.Desktop {...search} />
            </div>
          </div>
          <div className={styles.Box_1}>
            <div className={styles.navDesktop}>
              {headerNavItems.map(item => (
                <Link key={item.url} href={item.url} className={styles.Link}>
                  {item.title}
                </Link>
              ))}
            </div>
            <div className={styles.navMobile}>
              <Search.Mobile {...search} />
              <NavDrawer pathname={pathname} />
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default withIsland(Header, {name: 'Header', on: {idle: true}})
