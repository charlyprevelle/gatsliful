import React from 'react'
import { graphql } from 'gatsby'

// layout
import Container from '../layouts/container'

export default ({ data }) => {
   
   const contentful = data.contentfulPost
   const {
      path,
      title,
      content
   } = contentful

   return(
      <Container>
         <h2>{title}</h2>
         <div dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
      </Container>
   )
}

export const query = graphql`
   query PageQuery($path: String!){ 
      contentfulPost(path: { eq: $path }) {
         title
         content{
            childMarkdownRemark {
               html
            }
         }
         path
      }
   }
`