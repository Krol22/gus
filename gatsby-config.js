module.exports = {
  siteMetadata: {
    title: `Gatsby Ultimate Starter`,
    description: `Description`,
    author: {
      name: 'Karol Toruń',
      summary: 'krol22ee@gmail.com',
    },
    siteUrl: 'https://ultimate-page.pl',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
