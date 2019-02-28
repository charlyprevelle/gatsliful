const { createFilePath } = require('gatsby-source-filesystem')
// gatsby-source-filesystem fourni des données sur nos fichiers, grâce à allFile
// On a aussi besoin de gatsby-transformer-remark pour détecter les fichiers *.md (markdown)

const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => { // On crée un noeud, donc "onCreateNode" = api gatsby
  const { createNodeField } = actions // On va chercher l'action "createNodeField" de Gatsby, qui nous sert plus bas
  if (node.internal.type === 'MarkdownRemark') {

    const slug = createFilePath({ // Fonction fournie par gatsby-source-filesystem
      node, 
      getNode,
      basePath: "markdown" // indique le chemin ou se trouve les *.md (markdown)
    })

    createNodeField({ // on crée un nouveau noeud "slug"
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => { // on crée des pages = gatsby api
  const { createPage } = actions // action "createPage"

  return new Promise((resolve, reject) => { // d'abord, pour chaque fichiers tu vas chercher le slug...
    graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => { // puis tu boucles sur tous les fichiers trouvés...
    res.data.allMarkdownRemark.edges.map(({ node }) => {
      createPage({ // et pour chacun d'eux tu crées une page avec les infos suivantes...
        path: node.fields.slug, // le chemin
        component: path.resolve('./src/templates/page.js'), // le fichier dans lequel les afficher
        context: { // le context
          slug: node.fields.slug
        }
      })
    })
    resolve() // promesse complétée
  })
  })
}
