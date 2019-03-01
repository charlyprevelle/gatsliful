const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.createPages = ({ graphql, actions }) => { 
   const { createPage } = actions 
   return graphql(`
      {
         allContentfulPost {
            edges {
               node {
                  path
               }
            }
         }
      }
   `)
   .then(res => { 
      if (res.errors) {
         throw res.errors
      }

      res.data.allContentfulPost.edges.map(({ node }) => {
         createPage({ 
            path: node.path, 
            component: path.resolve('./src/templates/page.js'),
            context: { 
               path: node.path
            }
         })
      })
   })
}
