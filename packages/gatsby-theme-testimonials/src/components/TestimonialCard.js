/** @jsx jsx */
import { jsx } from "../context";

export default ({ testimonial }) => {
  const { name, company, blurb } = testimonial;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{company}</h2>
      <p>{blurb}</p>
    </div>
  );
};
