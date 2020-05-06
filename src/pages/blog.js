import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  const postsList = data.allMarkdownRemark.edges.map(post => {
    const { date, title } = post.node.frontmatter
    return (
      <li>
        <h2>{title}</h2>
        <p>{date}</p>
      </li>
    )
  })

  return (
    <Layout>
      <h1>Blog 1234</h1>
      <ul>{postsList}</ul>
    </Layout>
  )
}

export default BlogPage
