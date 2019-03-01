module.exports = {
  siteMetadata: {
    title: 'Gatsliful : Gatsby + Contentful + Netlify',
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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `dyxvczc5yvm3`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "c2bdf144d4f94e2f03770b6ddc1c10d300c6100da86489b2b95c22461b28e295",
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass'
  ]
}
