import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaDataTestimonials {
        site {
          siteMetadata {
            classic
            modern
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
