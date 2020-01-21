/** @jsx jsx */
import { jsx } from "../context";
import TestimonialCard from "../components/TestimonialCard";
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
        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
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
        }
      }
    }
  }
`;
