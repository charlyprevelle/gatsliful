module.exports = {
  siteMetadata: {
    title: 'Gatslify',
    description: ``,
    author: ``,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass'
  ]
}
