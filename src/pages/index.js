import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

class Index extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout isHome heading={siteTitle}>
        <SEO title={siteTitle} description={`todo`} />
        <ul>
          <li>
            <Link to="/faq-for-hosts">FAQ for Hosts</Link>
          </li>
          <li>
            <Link to="/faq-for-guests">FAQ for Guests</Link>
          </li>
          <li>
            <Link to="/faq-for-businesses">FAQ for Businesses</Link>
          </li>
        </ul>
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
