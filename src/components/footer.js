import React from "react"
import { style } from '../utils/consts'

const Footer = () => (
  <footer>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: style.pageWidth,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
