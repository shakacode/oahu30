import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Intro from "../components/Intro"
import NewsletterForm from "../components/NewsletterForm"

class Index extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const introBody = this.props.data.intro.body

    return (
      <Layout isHome heading={siteTitle}>
        <SEO title={siteTitle} description={`todo`} />
        <div
          style={{
            display: "flex"
          }}
        >
          <ul
            style={{
              flex: "0 1 100%"
            }}
          >
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
          <div
            style={{
              flex: "0 1 100%"
            }}
          >
            <NewsletterForm />
          </div>
        </div>
        <Intro body={introBody} />
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
    intro: mdx(frontmatter: { slug: { eq: "intro" } }) {
      body
    }
  }
`
