module.exports = {
    plugins: [
        'gatsby-theme-testimonials',
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                'Nunito',
                'Open Sans',
                'source sans pro\:300,400,400i,700' 
              ]
            }
        },
        'gatsby-plugin-emotion',
        'gatsby-plugin-theme-ui'
    ]
}