/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const Card = styled.div`
  max-width: 100%;
  width: 400px;
  padding: 1em;
  margin: 1em;
  border-radius: 20px;
  border: solid 1px;
`;

const Quote = styled.p`
  font-size: 30px;
  //margin: 0 auto;
  quotes: "\201C""\201D""\2018""\2019";
  padding: 10px 20px;
  line-height: 1.4;

  &::before {
    content: open-quote;
    display: inline;
    height: 0;
    line-height: 0;
    left: -10px;
    position: relative;
    top: 30px;
    color: #ccc;
    font-size: 3em;
  }

  &::after {
    content: close-quote;
    display: inline;
    height: 0;
    line-height: 0;
    left: 10px;
    position: relative;
    top: 35px;
    color: #ccc;
    font-size: 3em;
  }
`;

const Footer = styled.footer`
  margin: 0;
  text-align: right;
  font-size: 1.3em;
  font-style: italic;
`;

export default ({ testimonial }) => {
  const { name, company, blurb } = testimonial;
  return (
    <Card
      sx={{
        borderColor: "border"
      }}
    >
      <blockquote>
        <p
          sx={{
            fontFamily: "heading",
            letterSpacing: "body",
            fontWeight: "bold",
            fontSize: [2],
            color: "decoRed",
            lineHeight: "1.4",
            padding: "10px 20px",
            quotes: '"\201C""\201D""\2018""\2019"',
            "::before": {
              content: "open-quote",
              display: "inline",
              position: "relative",
              height: 0,
              fontSize: "3em",
              left: "-10px",
              lineHeight: 0,
              color: "decoRed",
              top: "30px"
            },
            "::after": {
              content: "close-quote",
              display: "inline",
              position: "relative",
              height: 0,
              fontSize: "3em",
              left: "10px",
              lineHeight: 0,
              color: "decoRed",
              top: "35px"
            }
          }}
        >
          {blurb}
        </p>
      </blockquote>
      <Footer>
        <h3
          sx={{
            fontFamily: "heading",
            fontWeight: "bold",
            // fontSize: [1],
            alignSelf: "center"
          }}
        >
          {name}
        </h3>
        <h4
          sx={{
            fontFamily: "heading",
            fontWeight: "bold",
            // fontSize: [1],
            alignSelf: "center"
          }}
        >
          {company}
        </h4>
      </Footer>
    </Card>
  );
};
