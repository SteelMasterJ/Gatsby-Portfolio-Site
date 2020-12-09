import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
      <Layout>
        <Head title="Home"/>
        <h1>Hiya.</h1>
        <h2>H2 line</h2>
        <p>Need a Web Developer? <Link to='/contact'>Contact Me!</Link></p>
      </Layout>
  )
}

export default IndexPage