import gql from 'graphql-tag';

const section = gql`
  query Sections($title: String) {
    contentfulSections(title: $title }) {
      body
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export { section };
