/** @jsx jsx */
import { jsx } from "../context";
import Classic from "../components/Classic";
import { graphql } from "gatsby";

export default ({ data }) => {
  const { edges } = data.allTestimonialsJson;
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {edges.map(({ node: testimonial }) => (
        <Classic key={testimonial.name} testimonial={testimonial} />
      ))}
    </div>
  );
};

export const query = graphql`
  {
    allTestimonialsJson {
      edges {
        node {
          name
          company
          blurb
          twitter
          linkedIn
        }
      }
    }
  }
`;
