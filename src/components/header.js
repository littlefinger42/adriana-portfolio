import { Link } from "gatsby"
import { Fade } from 'react-awesome-reveal';
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
      <Fade duration={2000}>
        <h1 style={{ margin: 0 }}>our health is our most precious possession</h1>
      </Fade>
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
