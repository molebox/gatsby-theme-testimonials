/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import { Quote } from "./Quote";
import { SocialIcon } from "react-social-icons";

const Card = styled.div`
  padding: 2em;
  max-width: 100%;
  width: 400px;
  border-raduis: 0.5em;
  margin: 2em;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.6);
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 0 1em 0 1em;
`;

const Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 1.5em;
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
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
`;

const Circle = styled.div`
  grid-column: 3;
  border-radius: 50%;
  // margin-left: auto;
  // margin-right: auto;
  margin: 0.5em;
  width: 2em;
  height: 2em;
  justify-content: center;
  cursor: pointer;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.8);

  &::hover {
    box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 1);
  }
`;

export default ({ testimonial }) => {
  const { name, company, blurb } = testimonial;
  return (
    <Card>
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
            <Circle>
              <SocialIcon
                style={{
                  height: 35,
                  width: 35
                }}
                network="twitter"
                bgColor="#E0E5EC"
                fgColor="#001f3f"
              />
            </Circle>
            <Circle>
              <SocialIcon
                style={{
                  height: 35,
                  width: 35
                }}
                network="linkedin"
                bgColor="#E0E5EC"
                fgColor="#001f3f"
              />
            </Circle>
          </Links>
        </Footer>
      </Content>
    </Card>
  );
};
