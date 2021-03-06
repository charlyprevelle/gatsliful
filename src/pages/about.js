import React from 'react'
import { graphql } from 'gatsby'

// layout
import Container from '../layouts/container'

export default ({ data }) =>
  <Container>
    <h2>About</h2>
    <p>{data.allFile.edges[0].node.prettySize}</p>
  </Container>

export const query = graphql`
  query AboutQuery {
    allFile {
      edges {
        node {
          size
          prettySize
        }
      }
    }
  }
`
