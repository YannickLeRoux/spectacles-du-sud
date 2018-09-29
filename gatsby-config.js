module.exports = {
  siteMetadata: {
    title: 'Les Spectacles Du Sud',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: 'https://api-euwest.graphcms.com/v1/cjmmkwjja1su801avvs0wo6j1/master',
        query: require("./src/queries/configQuery"),
      }
    }
  ],
}
