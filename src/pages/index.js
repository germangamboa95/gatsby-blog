import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Introduction" />
        <section>
          <p
            style={{
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            A simple creature that goes by the name German. He is fueled by
            copious amounts of caffeine. Most of the time he can be found
            developing solutions on the web. This creature is by nature a
            problem solver. Thus it is only natural that he would also be a
            Developer. German currently specializes in the Web Technologies. He
            can be found using HTML, CSS, JavaScipt, and PHP... in the same
            manner that primates use rocks to crack nuts.
          </p>
        </section>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
