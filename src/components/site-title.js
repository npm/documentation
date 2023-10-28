import React from 'react'
import {Box} from '@primer/react'
import Link from './link'
import useSiteMetadata from '../hooks/use-site-metadata'

const NpmLogo = ({size, sx}) => (
  <Box sx={{...sx, color: 'logoBg'}} role="banner">
    <svg height={size} width={size} viewBox="0 0 700 700" fill="currentColor" aria-hidden="true">
      <polygon fill="currentColor" points="0,700 700,700 700,0 0,0" />
      <polygon fill="#ffffff" points="150,550 350,550 350,250 450,250 450,550 550,550 550,150 150,150 " />
    </svg>
  </Box>
)

const SiteTitle = ({logo, sx}) => {
  const siteMetadata = useSiteMetadata()

  return (
    <Link
      to="/"
      sx={{
        fontWeight: 'bold',
        fontSize: 2,
        color: 'fg.default',
        display: 'flex',
        alignItems: 'center',
        ...sx,
      }}
    >
      {logo ? <NpmLogo size="32" sx={{display: 'flex', mr: 3}} /> : null}
      {siteMetadata.title}
    </Link>
  )
}

export default SiteTitle
