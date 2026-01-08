import React from 'react'
import {Box} from '@primer/react'
import Link from './link'
import useSiteMetadata from '../hooks/use-site-metadata'

import * as styles from './site-title.module.css'
import {clsx} from 'clsx'

const NpmLogo = ({size, className}) => (
  <Box className={clsx(styles.Box, className)}>
    <svg height={size} width={size} viewBox="0 0 700 700" fill="currentColor" aria-hidden="true">
      <polygon fill="currentColor" points="0,700 700,700 700,0 0,0" />
      <polygon fill="#ffffff" points="150,550 350,550 350,250 450,250 450,550 550,550 550,150 150,150 " />
    </svg>
  </Box>
)

const SiteTitle = ({logo, className}) => {
  const siteMetadata = useSiteMetadata()

  return (
    <Link to="/" className={clsx(styles.Link, className)}>
      {logo ? <NpmLogo size="32" className={styles.NpmLogo} /> : null}
      {siteMetadata.title}
    </Link>
  )
}

export default SiteTitle
