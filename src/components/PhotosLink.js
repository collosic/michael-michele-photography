import React, { useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import pic2 from '../assets/images/pic02.jpg';

const Photos = () => {
  const [state, setState] = useState();
  const data = useStaticQuery(graphql`
    query {
      contentfulSections(title: { eq: "Photos Link" }) {
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
    <section id="two" className="wrapper alt spotlight style2">
      <div className="inner">
        <Link to="/Photos" className="image">
          <Img fluid={data.contentfulSections.image.fluid} />
        </Link>
        <div className="content">
          <h2 className="major">
            <Link to="/Photos">Photos</Link>
          </h2>
          <p>{data.contentfulSections.body}</p>
        </div>
      </div>
    </section>
  );
};

export default Photos;
