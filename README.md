# gatsby-theme-testimonials

This is Gatsby theme to add customer testimonials to your website. The testimonial cards are exported as a section to just insert into your JSX. You add the data to be displayed via json files located in a testimonials folder at your projects root. This file will be created for you when you install the theme if you don't add it yourself.

## Setup

Install the theme with either yarn `yarn add gatsby-theme-testimonials` or npm `npm i gatsby-theme-testimonials`

Add it to your `gatsby-config.js`

```js
module.exports = {
    plugins: [
        'gatsby-theme-testimonials'
    ]
}
```

As mentioned above, the testimonials folder will be created at your projects root on first run, but otherwise you can create that folder.

The expected json format for each file is like this: 

```json
{
    "name": "John Doe",
    "company": "Doe Web Design",
    "blurb": "Tempor ipsum mollit eiusmod deserunt culpa Lorem incididunt est fugiat anim ea quis adipisicing. Officia deserunt sunt enim voluptate sit ut reprehenderit labore elit. Est quis duis exercitation et culpa magna excepteur exercitation ad ipsum amet nulla labore ullamco. Voluptate proident in minim enim sit cupidatat sunt adipisicing.",
    "twitter": "https://twitter.com/studio_hungry",
    "linkedIn": "https://www.linkedin.com/in/richard-haines-578464176/"
}
```

The naming of the file is up to you, i suggest naming them after the author of the testimonial.

The twitter and linkedIn links can be skipped if none are supplied by the testimonial author, the cards will render both, one or none depending on if you set them in the json file.


## Built With

- [Gatsby](https://www.gatsbyjs.org/)
- [Emotion](https://emotion.sh/docs/introduction)
- [Theme-UI](https://theme-ui.com/)

## Authors

- **Rich Haines** - _Hungry Bear Studio_

## License

This project is licensed under the MIT License