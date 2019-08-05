import React from "react"
import { Link, graphql } from "gatsby"

import Faq from "../components/Faq"

import questions from '../../content/guests.json';

class FaqForGuests extends React.Component {
  render() {
    return (
      <Faq
        title={`FAQ for Guests`}
        heading={`OAHU Bill 89 impact on visitors FAQ`}
        questions={questions}
      />
    )
  }
}

export default FaqForGuests
