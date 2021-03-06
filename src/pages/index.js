import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello.</h1>
    <h2>I'm Jason a full-stack developer from Brisbane</h2>
    <p>
      Need a developer <Link to="/contact">Contact Me</Link>
    </p>
  </Layout>
)

export default IndexPage
