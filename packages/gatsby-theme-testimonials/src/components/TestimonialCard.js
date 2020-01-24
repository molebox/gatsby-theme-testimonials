/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import { Quote } from "./Quote";
import { SocialIcon } from "react-social-icons";

const Card = styled.div`
  padding: 2em;
  max-width: 400px;
  border-radius: 0.5em;
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 0 1em;
`;

const Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2.5em;
  font-size: 1em;
`;

const Contact = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Links = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Circle = styled.div`
  grid-column: 3;
  border-radius: 50%;
  margin: 0.5em;
  width: 2em;
  height: 2em;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.7s ease-in-out;
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
                    boxShadow: "neumorphism",
                    ":hover": {
                      boxShadow: "neumorphismHover"
                    }
                  }}
                >
                  <SocialIcon
                    style={{
                      height: 35,
                      width: 35
                    }}
                    network="twitter"
                    bgColor={twitter ? "#E0E5EC" : undefined}
                    fgColor={twitter ? "#001f3f" : undefined}
                  />
                </Circle>
              </a>
            ) : null}
            {!!linkedIn ? (
              <a href={linkedIn}>
                <Circle
                  sx={{
                    backgroundColor: "background",
                    boxShadow: "neumorphism",
                    ":hover": {
                      boxShadow: "neumorphismHover"
                    }
                  }}
                >
                  <SocialIcon
                    style={{
                      height: 35,
                      width: 35
                    }}
                    network="linkedin"
                    bgColor={linkedIn ? "#E0E5EC" : undefined}
                    fgColor={linkedIn ? "#001f3f" : undefined}
                  />
                </Circle>
              </a>
            ) : null}
          </Links>
        </Footer>
      </Content>
    </Card>
  );
};
