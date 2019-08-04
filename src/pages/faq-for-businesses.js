import React from "react"
import { Link, graphql } from "gatsby"

import Faq from "../components/Faq"

class FaqForBusinesses extends React.Component {
  render() {
    const { body } = this.props.data.faq;
    const { title, heading } = this.props.data.faq.frontmatter;

    return (
      <Faq
        title={title}
        heading={heading}
        // description={description}
        // questions={questions}
        body={body}
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
      frontmatter {
        title
        heading
      }
    }
  }
`
