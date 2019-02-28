import React from 'react'
import { graphql } from 'gatsby'

// layout
import Container from '../layouts/container'

export default ({ data }) => {
   const content = data.markdownRemark

   return(
      <Container>
         <h2>{content.frontmatter.title}</h2>
         <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </Container>
   )
}

export const query = graphql`
   query PageQuery($slug: String!) { 
      markdownRemark(fields: { slug: { eq: $slug } }) {
         html
         frontmatter{
            title
         }
         internal {
            content
         }
      }
   }
`