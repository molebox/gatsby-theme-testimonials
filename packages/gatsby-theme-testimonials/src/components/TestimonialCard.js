/** @jsx jsx */
import { jsx } from "../context";
import styled from '@emotion/styled';

const Card = styled.div`
  max-width: 100%;
  width: 400px;
  padding: 1em;
  margin: 1em;
  border-radius: 20px;
  border: solid 1px;
`;

const Quote = styled.blockquote`
  quotes: "\201C""\201D""\2018""\2019";
  // padding: 10px 20px;
  line-height: 1.4;
  font-size: 30px;

  &::before {
    content: open-quote;

    display: inline;
    height: 0;
    line-height: 0;
    left: -10px;
    position: relative;
    top: 30px;
    color: blue;
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
    color: #000000;
    font-size: 3em;
  }
`;

const Footer = styled.footer`
  margin:0;
  text-align: right;
  font-size: 1.3em;
  font-style: italic;
`;

// https://www.florin-pop.com/blog/2019/07/testimonial-card/
export default ({ testimonial }) => {
  const { name, company, blurb } = testimonial;
  return (
    <Card sx={{
      borderColor: 'border'
    }}>
      <Quote
        // sx={{
        //   fontFamily: "heading",
        //   letterSpacing: "body",
        //   fontWeight: "bold",
        //   // fontSize: [2],
        //   color: "decoRed"
        // }}
      >
        {blurb}
      </Quote>
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
