/** @jsx jsx */
import { jsx } from "../context";

// https://www.florin-pop.com/blog/2019/07/testimonial-card/
export default ({ testimonial }) => {
  const { name, company, blurb } = testimonial;
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        width: "400px",
        justifyContent: "center",
        borderRadius: "20px",
        border: "solid 1px",
        borderColor: "cream",
        overflow: "hidden",
        backgroundColor: "cream",
        padding: "1em"
      }}
    >
      <p
        sx={{
          fontFamily: "heading",
          letterSpacing: "body",
          fontWeight: "bold",
          fontSize: [2],
          color: "decoRed"
        }}
      >
        {blurb}
      </p>
      <h3
        sx={{
          fontFamily: "body",
          fontWeight: "body",
          fontSize: [1],
          alignSelf: "center"
        }}
      >
        {name}
      </h3>
      <h4
        sx={{
          fontFamily: "body",
          fontWeight: "body",
          fontSize: [1],
          alignSelf: "center"
        }}
      >
        {company}
      </h4>
    </div>
  );
};
