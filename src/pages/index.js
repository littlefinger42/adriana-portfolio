import React from "react"
import { Link } from "gatsby"

import "./main.css"

import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import Scrolldown from "../components/scrolldown"
import Page from "../components/page"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Page>
      <Header/>
      <div style={{flexBasis: '50%'}}>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, }}>
          <img src="https://www.fillmurray.com/640/640"></img>
          {/* <Image /> */}
        </div>
      </div>
      <div style={{flexBasis: '50%'}}>
        <h1>Adriana Valente Stout</h1>
        <h2>Sustainable Innovater</h2>
      </div>
      <div style={{position: 'absolute', bottom: '10%'}}>
        <Scrolldown/>
      </div>
      <Footer/>
    </Page>
    <Page>
      <div>Other content</div>
      <div>Other content</div>
    </Page>
  </Layout>
)

export default IndexPage
