import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import SEO from "../components/seo"

// layout
import Container from '../layouts/container'

// css
import '../styles/main.scss'

export default ({ data }) =>
  <Container>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>Salut c'est du texte.</p>
    {data.allMarkdownRemark.edges.map(({ node }, index) => {
      return <h2 key={index}><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h2>
    })}
  </Container>

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
