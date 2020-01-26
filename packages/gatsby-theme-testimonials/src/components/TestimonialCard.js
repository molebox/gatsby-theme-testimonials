/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import { Quote } from "./Quote";
import { FaTwitter, FaLinkedin  } from 'react-icons/fa';

const Card = styled.div`
  padding: 2em;
  max-width: 400px;
  border-radius: 0.5em;
  height: min-content;
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 0 1em;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  font-size: 1em;

  // Desktop
  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2em;
    font-size: 1em;
  }
`;

const Contact = styled.div`
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & > h3,
  h4 {
    font-size: 0.7em;
  }

  // Desktop
  @media (min-width: 48em) {
    grid-column: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    & > h3,
    h4 {
      font-size: 0.8em;
    }
  }
`;

const Links = styled.div`
  grid-row: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1em;

  // Desktop
  @media (min-width: 48em) {
    grid-column: 2;
    grid-row: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1em;
  }
`;

const Circle = styled.div`
  grid-column: 3;
  border-radius: 50%;
  margin: 0.5em;
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  // Desktop
  @media (min-width: 48em) {
    & > h3,
    h4 {
      font-size: 1em;
    }
  }
`;

export default ({ testimonial }) => {
  const { name, company, blurb, twitter, linkedIn } = testimonial;
  return (
    <Card
      sx={{
        backgroundColor: "background",
        boxShadow: "neumorphism"
      }}
    >
      <Content>
        <Quote
          sx={{
            fontFamily: "heading",
            letterSpacing: "body",
            fontWeight: "400",
            color: "text"
          }}
        >
          {blurb}
        </Quote>
        <Footer>
          <Contact>
            <h3
              sx={{
                fontFamily: "heading",
                fontWeight: "400",
                alignSelf: "left",
                color: "text",
                fontStyle: "italic",
                marginBottom: "0.3em"
              }}
            >
              &#x2014; {name}
            </h3>
            <h4
              sx={{
                fontFamily: "heading",
                fontWeight: "400",
                alignSelf: "left",
                color: "text",
                marginTop: "0.2em"
              }}
            >
              {company}
            </h4>
          </Contact>
          <Links>
            {!!twitter ? (
              <a href={twitter}>
              <Circle
                sx={{
                  backgroundColor: "background",
                  color: 'text',
                  boxShadow: "neumorphism",
                  transition: 'box-shadow 0.7s ease-in-out',
                  ":hover": {
                    boxShadow: "neumorphismHover"
                  }
                }}
              >
                <FaTwitter/>
              </Circle>
            </a>
            ) : null}
            {!!linkedIn ? (
              <a href={linkedIn}>
                <Circle
                  sx={{
                    backgroundColor: "background",
                    color: 'text',
                    boxShadow: "neumorphism",
                    transition: 'box-shadow 0.7s ease-in-out',
                    ":hover": {
                      boxShadow: "neumorphismHover"
                    }
                  }}
                >
                  <FaLinkedin/>
                </Circle>
              </a>
            ) : null}
          </Links>
        </Footer>
      </Content>
    </Card>
  );
};
