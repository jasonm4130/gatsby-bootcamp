import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 1rem 0 3rem;

  .title {
    color: #000;
    font-size: 3rem;
    text-decoration: none;
  }

  .nav-list {
    display: flex;
    list-style-type: none;
    margin: 0;
  }

  .nav-item {
    color: #999;
    font-size: 0.9rem;
    margin-right: 1.3rem;
    text-decoration: none;
  }

  .nav-item:hover {
    color: #666;
  }

  .active-nav-item {
    color: #333;
  }
`

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <h1>
        <Link className="title" to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className="nav-list">
          <li>
            <Link className="nav-item" activeClassName="active-nav-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              activeClassName="active-nav-item"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              activeClassName="active-nav-item"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              activeClassName="active-nav-item"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}
