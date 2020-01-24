export default {
  // this enables the color modes feature
  // and is used as the name for the top-level colors object
  initialColorMode: "light",
  // optionally enable custom properties
  // to help avoid a flash of colors on page load
  useCustomProperties: true,
  colors: {
    // these are the default colors
    text: "#001f3f",
    background: "#E0E5EC"
  },
  fonts: {
    body: "Open Sans",
    heading: "Nunito"
  },
  fontWeights: {
    body: 300,
    heading: 400,
    bold: 700
  },
  lineHeights: {
    body: "110%",
    heading: 1.125
  },
  letterSpacing: {
    body: "2px",
    text: "5px"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  boxShadow: {
    neumorphism:
      "9px 9px 16px rgb(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.6)",
    neumorphismHover:
      "inset 9px 9px 16px rgb(163, 177, 198, 0.4), inset -9px -9px 16px rgba(255, 255, 255, 1)"
  }
};
