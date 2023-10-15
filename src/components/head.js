import React from 'react'
import {Helmet} from 'react-helmet'
import useSiteMetdata from '../hooks/use-site-metadata'
import {useFrontmatter} from '../layout'

function Head() {
  const fm = useFrontmatter()
  const siteMetadata = useSiteMetdata()

  const title = [fm.title, siteMetadata.title].filter(Boolean).join(' | ')
  const description = fm.description || siteMetadata.description
  const lang = fm.lang || siteMetadata.lang

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteMetadata.imageUrl} />
      <meta property="twitter:card" content="summary_large_image" />
      <html lang={lang} />
    </Helmet>
  )
}

export default Head
