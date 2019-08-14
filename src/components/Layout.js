import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import "./styles.css"

class Layout extends React.Component {
  render() {
    const { isHome, heading, children } = this.props
    let header

    if (isHome) {
      header = (
        <div>
          <h1
            style={{
              ...scale(1.2),
              marginBottom: rhythm(1),
              marginTop: 0,
            }}
          >
            {heading}
          </h1>
        </div>
      )
    } else {
      header = (
        <div>
          <Link
            to={`/`}
            style={{
              position: "absolute",
              top: "5px",
            }}
          >
            ⟵ to main
          </Link>
          <h1
            style={{
              ...scale(1.2),
              marginBottom: rhythm(1),
              marginTop: 0,
            }}
          >
            {heading}
          </h1>
        </div>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
