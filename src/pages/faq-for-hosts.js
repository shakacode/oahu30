import React from "react"
import { Link, graphql } from "gatsby"

import Faq from "../components/Faq"

import questions from "../../content/hosts.json"

class FaqForHosts extends React.Component {
  render() {
    return (
      <Faq
        title={`FAQ for Hosts`}
        heading={`OAHU Vacation Rental regulations Bill 89 FAQ`}
        questions={questions}
      />
    )
  }
}

export default FaqForHosts
