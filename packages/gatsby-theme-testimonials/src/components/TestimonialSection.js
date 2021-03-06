/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import TestimonialCard from "./TestimonialCard";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: min-content;
  grid-gap: 2em;
  padding: 1em;

  // Desktop
  @media (min-width: 48em) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export default () => {
  const data = useStaticQuery(query);
  const testimonials = data.allTestimonialsJson.edges;

  return (
    <Section>
      {testimonials.map(({ node: testimonial }) => (
        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
      ))}
    </Section>
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
