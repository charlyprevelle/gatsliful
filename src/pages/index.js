import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"

// layout
import Container from '../layouts/container'

// components
import Article from "../components/article"

// css
import '../styles/main.scss'


export default ({ data }) =>
   <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h2>Some weird news</h2>
      { 
         data.allMarkdownRemark.edges.map(({ node }, index) => {
            return <Article key={index} {...node} /> 
         }) 
      }
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
