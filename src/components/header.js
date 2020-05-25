import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { style } from '../utils/consts'

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      position: 'absolute',
      top: 0,
      width: '100%',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: style.pageWidth,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>our health is our most precious possession</h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
