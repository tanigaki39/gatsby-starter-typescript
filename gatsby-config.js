module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
    description: `This is the default page description`,
    authors: [
      { name: 'Tori', slug: 'tori' },
      { name: 'Neko', slug: 'neko' },
      { name: 'Inu', slug: 'inu' },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
  ],
}
