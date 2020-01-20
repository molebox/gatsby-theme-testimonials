/** @jsx jsx */
import { jsx } from "../context";
import TestimonialCard from "../components/TestimonialCard";
import { graphql } from "gatsby";

export default ({ data }) => {
  console.log({ data });
  const { edges } = data.allTestimonialsJson;
  return (
    <div sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {edges.map(({ node: testimonial }) => (
        <TestimonialCard testimonial={testimonial} />
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
