import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "./Layout"
import SEO from "./Seo"

class Faq extends React.Component {
  render() {
    const { title, heading, description, questions, body } = this.props

    return (
      <Layout heading={heading}>
        <SEO title={title} description={description} questions={questions} />
        <MDXRenderer>{body}</MDXRenderer>
      </Layout>
    )
  }
}

export default Faq
