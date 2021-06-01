import React from "react"
import {Helmet} from "react-helmet"
import {useStaticQuery, graphql} from "gatsby"

export default function SEO({children, location, description, title, image}) {
  const {site} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Helmet>
      <html lang="pl" />
      <title>{site.siteMetadata.title}</title>

      {/* #TODO add icon */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <meta charset="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />

      {/* OG */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || "/logo.svg"} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
      {children}
    </Helmet>
  )
}
