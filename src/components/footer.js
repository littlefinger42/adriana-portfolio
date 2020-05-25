import React from "react"
import { Fade } from 'react-awesome-reveal';
import { style } from '../utils/consts'

const Footer = () => (
  <footer style={{
      width: '100%',
      position: 'absolute',
      bottom: 0,
    }}>
      <Fade duration={2000}>
        <div style={{margin: '0 auto', maxWidth: style.pageWidth, padding: `1.45rem 1.0875rem`,}}>
          drop me a <a href="adrianastout@gmail.com">mail</a>
        </div>
      </Fade>
  </footer>
)

export default Footer
