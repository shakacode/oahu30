import React from "react"
import { graphql } from "gatsby"

import Faq from "../components/Faq"

import { getQuesions } from "../utils/faqParser"

class FaqForBusinesses extends React.Component {
  render() {
    const { body } = this.props.data.faq
    const introBody = this.props.data.intro.body
    const { title, heading } = this.props.data.faq.frontmatter

    return (
      <Faq
        title={title}
        heading={heading}
        questions={getQuesions(this.props.data.faq.mdxAST.children)}
        body={body}
        introBody={introBody}
      />
    )
  }
}

export default FaqForBusinesses

export const pageQuery = graphql`
  query {
    faq: mdx(frontmatter: { slug: { eq: "faq-for-businesses" } }) {
      id
      body
      mdxAST
      frontmatter {
        title
        heading
      }
    }
    intro: mdx(frontmatter: { slug: { eq: "intro" } }) {
      body
    }
  }
`
