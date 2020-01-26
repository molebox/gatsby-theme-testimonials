import styled from "@emotion/styled";

export const Quote = styled.p`
  font-size: 0.7em;
  margin: 0 auto;
  quotes: "\\201C""\\201D""\\2018""\\2019";
  padding-top: 1.3em;
  line-height: 1.4;

  &::before {
    content: open-quote;
    display: inline;
    height: 0;
    line-height: 0;
    left: -10px;
    position: relative;
    top: 15px;
    font-size: 3em;
  }

  &::after {
    content: close-quote;
    display: inline;
    height: 0;
    line-height: 0;
    left: 5px;
    position: relative;
    top: 22px;
    font-size: 3em;
  }

  // Desktop
  @media (min-width: 48em) {
    font-size: 0.8em;

    &::before {
      content: open-quote;
      display: inline;
      height: 0;
      line-height: 0;
      left: -5px;
      position: relative;
      top: 12px;
      font-size: 3em;
    }

    &::after {
      content: close-quote;
      display: inline;
      height: 0;
      line-height: 0;
      left: 10px;
      position: relative;
      top: 27px;
      font-size: 3em;
    }
  }
`;
