module.exports = (options) => {
    const {} = options;

    return {
        plugins: [
            {
                resolve: 'gatsby-plugin-google-fonts',
                options: {
                  fonts: [
                    'Poiret One',
                    'Open Sans',
                    'source sans pro\:300,400,400i,700' 
                  ]
                }
            },
            {
              resolve: 'gatsby-plugin-page-creator',
              options: {
                  path: `${__dirname}/src/pages`
              }
          },
            'gatsby-transformer-json',
            {
              resolve: 'gatsby-source-filesystem',
              options: {
                path: 'testimonials',
                name: 'testimonials'
              },
            },
            'gatsby-plugin-emotion',
            'gatsby-plugin-sharp',
            'gatsby-transformer-sharp',
            'gatsby-image',
            'gatsby-plugin-sitemap',
            'gatsby-plugin-robots-txt'
        ]
    }

}