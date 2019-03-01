import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../utils/seo"

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
        // console.log(data)
        data.allContentfulPost.edges.map(({ node }, index) => {
          return <Article key={index} {...node} /> 
        })
      }
   </Container>


export const query = graphql`
  query IndexQuery {
    allContentfulPost {
      edges {
        node {
            title
            content{
               childMarkdownRemark {
                  internal {
                     content
                  }
               }
            }
            path
        }
      }
    }
  }
`
