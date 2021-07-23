module.exports = {
  siteMetadata: {
    title: `Tanmu Project Management Services`,
    description: `Tanmu Project Management Services and Consultancy in Dubai, United Arab Emirates`,
    author: `@DeviousLab`,
    keywords: `tanmu, project, management, services, engineering, construction, handover, consultant, dubai`
  },
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tanmu Project Management Services',
        short_name: 'Tanmu PMS',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ff7b24',
        display: 'standalone',
        icon: 'src/images/logo.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
  ]
};
