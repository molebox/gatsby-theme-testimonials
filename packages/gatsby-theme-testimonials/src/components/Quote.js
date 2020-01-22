import styled from "@emotion/styled";

export const Quote = styled.p`
  font-size: 1em;
  margin: 0 auto;
  quotes: "\\201C""\\201D""\\2018""\\2019";
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
    font-size: 3em;
  }
`;