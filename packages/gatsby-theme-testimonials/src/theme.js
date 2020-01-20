export default {
  // this enables the color modes feature
  // and is used as the name for the top-level colors object
  initialColorMode: "light",
  // optionally enable custom properties
  // to help avoid a flash of colors on page load
  useCustomProperties: true,
  colors: {
    // these are the default colors
    // http://portfolios.aiga.org/gallery/32818111/Art-Deco-Playing-Card
    text: "#000000",
    background: "#D6AF82",
    decoRed: "#9F1E23",
    decoGreenDark: "#2E4542",
    decoGreen: "#3C5A54",
    cream: "#EFEDD8",
    border: '#949494'

    // modes: {
    // 	// this is the dark color mode colors
    // 	dark: {
    // 		text: "#f46049",
    // 		background: "#202020",
    // 	},
    // },
  },
  fonts: {
    body: "Open Sans",
    heading: "Poiret One"
  },
  fontWeights: {
    body: 300,
    heading: 400,
    bold: 700
  },
  lineHeights: {
    body: "110%",
    heading: 1.125,
    logo: "82px"
  },
  letterSpacing: {
    body: "2px",
    text: "5px"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
