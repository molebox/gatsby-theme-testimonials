/** @jsx jsx */
import { jsx } from "../context";
import Classic from "../components/Classic";
import { graphql } from "gatsby";
import TestimonialCard from "../components/TestimonialCard";

export default ({ data }) => {
  const { edges } = data.allTestimonialsJson;
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E0E5EC",
        height: "100vh"
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
          twitter
          linkedIn
        }
      }
    }
  }
`;
