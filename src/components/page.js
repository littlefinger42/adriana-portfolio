import React from "react"
import { style } from '../utils/consts'

export default ({ children }) =>  (<main style={{
        width: '100%',
        margin: '0 auto',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: style.pageWidth,
        padding: `0 1.0875rem 1.45rem`,
    }}>
        {children}
    </main>)