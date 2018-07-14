module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            'Lato\:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic'
        ]
      }
    }
  ],
}
