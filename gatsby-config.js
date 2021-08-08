module.exports = {
  siteMetadata: {
    title: `ADL Partnership`,
    description: `Architectural design and planning professionals working together to deliver quality design solution`,
    author: `Ricardo Sawir`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
          all__wp_portfolio: {
            title: node => node.title,
            slug: node => node.slug,
          },
        },
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url:
          (process.env.WP_URL
            ? process.env.WP_URL
            : "http://adlpartnership-wp.test") + "/graphql",
        type: {
          __all: {
            limit: process.env.NODE_ENV === `development` ? 50 : null,
          },
          MediaItem: {
            localFile: {
              requestConcurrency: 5, // i cant remember if this was a fix or not, but i just killed all concurrency which the command line probably overrode
              maxFileSizeBytes: 100000000, // large images would die if they were larger than.. like, 5mb by default? undocumented and threw no warnings, just died.
            },
          },
        },
        schema: {
          requestConcurrency: 5, // i cant remember if this was a fix or not, but i just killed all concurrency which the command line probably overrode
          timeout: 90000, // i cant remember if this was a fix or not, or just an attempt at killing the bug in this thread
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
