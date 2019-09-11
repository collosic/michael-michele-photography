import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Gallery from 'react-grid-gallery';

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

  const images = data.allContentfulAsset.edges.map(edge => {
    return {
      src: edge.node.fluid.src,
      thumbnail: edge.node.fluid.src,
      thumbnailWidth: 160,
      thumbnalHeight: 90,
    };
  });

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
              <div className="row gtr-uniform">
                <Gallery
                  images={images}
                  enableImageSelection={false}
                  backdropClosesModal={true}
                  margin={8}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
