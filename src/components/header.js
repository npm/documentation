import React from 'react'
import styled from 'styled-components'
import * as Search from './search'
import NavDrawer from './nav-drawer'
import Link from './link'
import useSearch from '../hooks/use-search'
import {HEADER_BAR, Z_INDEX} from '../constants'
import headerNavItems from '../../content/header-nav.yml'
import {DarkTheme} from '../theme'
import SiteTitle from './site-title'

import * as styles from './header.module.css'

const NpmHeaderBar = styled.div`
  height: ${HEADER_BAR}px;
  background-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);
`

function Header() {
  const search = useSearch()

  return (
    <div className={styles.stickyHeader} style={{zIndex: Z_INDEX.HEADER}}>
      <DarkTheme>
        <NpmHeaderBar />
        <header className={styles.headerBox}>
          <div className={styles.Box}>
            <SiteTitle logo={true} className={styles.SiteTitle} />
            <div className={styles.searchDesktop}>
              <Search.Desktop {...search} />
            </div>
          </div>
          <div className={styles.Box_1}>
            <div className={styles.navDesktop}>
              {headerNavItems.map((item, index) => (
                <Link key={index} href={item.url} className={styles.Link}>
                  {item.title}
                </Link>
              ))}
            </div>
            <div className={styles.navMobile}>
              <Search.Mobile {...search} />
              <NavDrawer />
            </div>
          </div>
        </header>
      </DarkTheme>
    </div>
  )
}

export default Header
