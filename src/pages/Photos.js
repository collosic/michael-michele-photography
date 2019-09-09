import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';

import Layout from '../components/Layout';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(filter: { title: { glob: "_*" } }) {
        edges {
          node {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `);

  const images = data.allContentfulAsset.edges.map(edge => (
    <div className="col-3-xlarge col-4-large col-6-medium">
      <span className="image fit">
        <Img sizes={{ ...edge.node.fluid, aspectRatio: 16 / 9 }} />
      </span>
    </div>
  ));

  return (
    <Layout fullMenu>
      <section id="wrapper">
        <header>
          <div className="inner">
            <h2>Photos</h2>
            <p>My photography portfolio</p>
          </div>
        </header>
        <div className="wrapper">
          <div className="inner">
            <div className="box alt">
              <div className="row gtr-uniform">{images}</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
