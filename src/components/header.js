import React from 'react'
import {Box} from '@primer/react'
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

const NpmHeaderBar = styled(Box)`
  height: ${HEADER_BAR}px;
  background-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);
`

function Header() {
  const search = useSearch()

  return (
    <DarkTheme style={{zIndex: Z_INDEX.HEADER}} className={styles.DarkTheme}>
      <NpmHeaderBar />
      <Box as="header" className={styles.headerBox}>
        <Box className={styles.Box}>
          <SiteTitle logo={true} className={styles.SiteTitle} />
          <Box className={styles.searchDesktop}>
            <Search.Desktop {...search} />
          </Box>
        </Box>
        <Box className={styles.Box_1}>
          <Box className={styles.navDesktop}>
            {headerNavItems.map((item, index) => (
              <Link key={index} href={item.url} className={styles.Link}>
                {item.title}
              </Link>
            ))}
          </Box>
          <Box className={styles.navMobile}>
            <Search.Mobile {...search} />
            <NavDrawer />
          </Box>
        </Box>
      </Box>
    </DarkTheme>
  )
}

export default Header
