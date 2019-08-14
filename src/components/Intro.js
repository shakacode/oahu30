import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Intro = ({ body }) => (
  <div
    style={{
      padding: "30px",
      border: "3px solid #aeacfc",
      borderRadius: "5px",
      backgroundColor: "#f1f4ff",
      marginBottom: "30px",
    }}
  >
    <MDXRenderer>{body}</MDXRenderer>
  </div>
)

export default Intro
