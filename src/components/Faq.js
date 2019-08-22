import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "./Layout"
import SEO from "./Seo"
import NewsletterForm from "./NewsletterForm"

class Faq extends React.Component {
  render() {
    const {
      title,
      heading,
      description,
      questions,
      body,
      introBody,
    } = this.props

    return (
      <Layout heading={heading}>
        <SEO title={title} description={description} questions={questions} />
        <div
          style={{
            float: "right",
            width: "50%",
            margin: "0 0 15px 15px",
          }}
        >
          <NewsletterForm />
        </div>
        <MDXRenderer>{body}</MDXRenderer>
        <div
          style={{
            padding: "30px",
            border: "3px solid #aeacfc",
            borderRadius: "5px",
            backgroundColor: "#f1f4ff",
            marginBottom: "30px",
          }}
        >
          <MDXRenderer>{introBody}</MDXRenderer>
        </div>
      </Layout>
    )
  }
}

export default Faq
