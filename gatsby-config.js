/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'src', path: `${__dirname}/src/` },
    },
    `gatsby-transformer-remark`,
  ],
  siteMetadata: {
    title: 'Full-Stack Bootcamp!',
    author: 'Jason',
  },
}
