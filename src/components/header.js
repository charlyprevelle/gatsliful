import React from 'react'
import Link from 'gatsby-link'
import { StaticQuery, graphql } from 'gatsby'

// semantic ui

export default () => (
  
  <StaticQuery
    query={ graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <div>
          <h1>{data.site.siteMetadata.title}</h1>
          <ul style={{listStyle:`none`}}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about/'>About</Link></li>
          </ul>
      </div>
    )}
  />
)