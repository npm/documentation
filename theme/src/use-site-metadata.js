import { useStaticQuery, graphql } from 'gatsby'

function useSiteMetadata () {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          shortName
          description
          lang
          imageUrl
        }
      }
    }
  `)
  return data.site.siteMetadata
}

export default useSiteMetadata
