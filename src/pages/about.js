import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        Want to get in touch <Link to="/contact">Contact Me!</Link>
      </p>
    </Layout>
  )
}
