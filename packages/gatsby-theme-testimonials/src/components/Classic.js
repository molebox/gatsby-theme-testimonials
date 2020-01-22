/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import { Quote } from "./Quote";

const Card = styled.div`
  max-width: 100%;
  width: 400px;
  padding: 1em;
  margin: 1em;
  border-radius: 20px;
  border: solid 1px;
`;

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr
  margin: 0;
  text-align: right;
  font-size: 1.3em;
  font-style: italic;
`;

export default ({ testimonial }) => {
  const { name, company, blurb, twitter, linkedIn } = testimonial;
  return (
    <Card
      sx={{
        borderColor: "border",
        backgroundColor: 'cream'
      }}
    >
      <blockquote>
        <Quote sx={{
          fontFamily: "heading",
          letterSpacing: "body",
          fontWeight: "bold",
          color: "decoRed",
        }}>
          {blurb}
        </Quote>
      </blockquote>
      <Footer>
        {twitter ? (
          <p sx={{
            gridColumn: 1,
            margin: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>{twitter}</p>
        ) : null}
        {linkedIn ? (
          <p sx={{
            gridColumn: 2,
            margin: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>{linkedIn}</p>
        ) : null}
        <div sx={{
          gridColumn: 3
        }}>
          <h3
            sx={{
              fontFamily: "heading",
              fontWeight: "bold",
              marginBottom: 0
              // fontSize: [1],
              // alignSelf: "center"
            }}
          >
            {name}
          </h3>
          <h4
            sx={{
              fontFamily: "heading",
              fontWeight: "bold",
              marginBottom: 0
              // fontSize: [1],
              // alignSelf: "center"
            }}
          >
            {company}
          </h4>
        </div>
      </Footer>
    </Card>
  );
};
