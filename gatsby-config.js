module.exports = {
  siteMetadata: {
    title: `ADL Partnership`,
    description: `Architectural design and planning professionals working together to deliver quality design solution`,
    author: `Ricardo Sawir`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-135085180-5"],
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: ["title", "slug", "categories"],
        resolvers: {
          wordpress__wp_portfolio: {
            title: node => node.title,
            slug: node => node.slug,
          },
        },
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "adminadlpartnership.sawirstudio.com",
        protocol: "https",
        useACF: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/portfolio",
          "**/people",
          "**/people_partner",
        ],
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ADL Partnership`,
        short_name: `ADL`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ADL-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
