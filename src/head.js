import React from 'react'
import useSiteMetdata from './hooks/use-site-metadata'

const buildTitle = (...parts) => [...new Set(parts.filter(Boolean))].join(' | ')

export const Head = ({pageContext: {frontmatter = {}}}) => {
  const siteMetadata = useSiteMetdata()

  const title = buildTitle(frontmatter.title, siteMetadata.title)
  const description = frontmatter.description || siteMetadata.description

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteMetadata.imageUrl} />
      <meta property="twitter:card" content="summary_large_image" />
      <html lang={siteMetadata.lang} />
    </>
  )
}

const PassThrough = ({children}) => children

export default PassThrough
