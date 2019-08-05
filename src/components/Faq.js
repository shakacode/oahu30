import React, { useReducer } from "react"
import { Link, graphql } from "gatsby"

import Layout from "./_Layout"
import SEO from "./_Seo"
import QA from "./QA"
import { rhythm, scale } from "../utils/typography"

class Faq extends React.Component {
  render() {
    const { title, heading, description, questions, body } = this.props


    

    return (
      <Layout heading={heading}>
        <SEO title={title} description={description} questions={questions} />
        {questions.map(elem => (
          <QA question={elem.question} answer={elem.answer} />
        ))}
      </Layout>
    )
  }
}

export default Faq
