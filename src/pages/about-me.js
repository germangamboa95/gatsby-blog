import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"

export default props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="About Me" />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
