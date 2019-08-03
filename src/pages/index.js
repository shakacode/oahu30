import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class Index extends React.Component {
  render() {
    const faq = this.props.data.faq
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={faq.frontmatter.title}>
        <SEO
          title={faq.frontmatter.title}
          description={faq.frontmatter.description}
        />
        <MDXRenderer>{faq.body}</MDXRenderer>
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
        author
      }
    }
    faq: mdx(frontmatter: { slug: { eq: "faq" } }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
