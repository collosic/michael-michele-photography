import React, { useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import pic1 from '../assets/images/pic01.jpg';

const PageLink = ({ title, cssId, styleType, isAlt }) => {
  const [state, setState] = useState();
  const data = useStaticQuery(graphql`
    query {
      contentfulSections(title: { eq: "About Link" }) {
        body
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `);

  return (
    <section id="one" className={`wrapper spotlight style1`}>
      <div className="inner">
        <Link to="/About" className="image">
          <Img fluid={data.contentfulSections.image.fluid} />
        </Link>
        <div className="content">
          <h2 className="major">
            <Link to="/About">About Me</Link>
          </h2>
          <p>{data.contentfulSections.body}</p>
        </div>
      </div>
    </section>
  );
};

export default PageLink;
