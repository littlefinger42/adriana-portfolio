import React from "react"
import { style } from '../utils/consts'

const Footer = () => (
  <footer style={{
      maxWidth: style.pageWidth,
      position: 'absolute',
      bottom: 0,
      padding: `1.45rem 1.0875rem`,
    }}>
      drop me a <a href="adrianastout@gmail.com">mail</a>
  </footer>
)

export default Footer
