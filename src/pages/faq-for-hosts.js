import React from "react"
import { Link, graphql } from "gatsby"

import Faq from "../components/Faq"

import { getQuesions } from "../utils/faqParser"

class FaqForHosts extends React.Component {
  render() {
    const { body } = this.props.data.faq;
    const { title, heading } = this.props.data.faq.frontmatter;

    return (
      <Faq
        title={title}
        heading={heading}
        questions={getQuesions(this.props.data.faq.mdxAST.children)}
        body={body}
      />
    )
  }
}

export default FaqForHosts

export const pageQuery = graphql`
  query {
    faq: mdx(frontmatter: { slug: { eq: "faq-for-hosts" } }) {
      id
      body
      mdxAST
      frontmatter {
        title
        heading
      }
    }
  }
`