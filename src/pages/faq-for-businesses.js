import React from "react"
import { Link, graphql } from "gatsby"

import Faq from "../components/Faq"

import questions from "../../content/businesses.json"

class FaqForBusinesses extends React.Component {
  render() {
    return (
      <Faq
        title={`Oahu FAQ for Businesses`}
        heading={`OAHU Bill 89 economic impact FAQ`}
        questions={questions}
      />
    )
  }
}

export default FaqForBusinesses
