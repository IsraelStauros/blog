
require("dotenv").config()

const queries = require ('./src/utils/algolia_queries')
const path = require('path'); require('dotenv').config({ path: path.resolve(__dirname, '.env') });


module.exports = {
  siteMetadata: {
    title: `Israel`,
    position: `Estudante`,
    description: `Esse é um blog construído com Gatsby, Graphql e outras coisas mais.`,
    author: `Israel`,
    siteUrl:`https://staurosdevelopment.tk` ,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
 
      {
        resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
    },
  },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-staurosdevelopment-tk`
    }
    },
    {
      resolve: "gatsby-plugin-social9-socialshare",
      options: {
        content:  "d58dc743e0da497da2cfcfcbdf77fd75",
        async: true,
        defer: true
      }
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images-v2",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    
      {
        resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true,
        },
      },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stauros`,
        short_name: `Stauros`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,
     `gatsby-plugin-netlify-cms`,
  ],
}
