import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hiya.</h1>
      <h2>H2 line</h2>
      <p>Need a Web Developer? <Link to='/contact'>Contact Me!</Link></p>
      <Footer />
    </div>
  )
}

export default IndexPage