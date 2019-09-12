import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulSections(title: { eq: "Contact Link" }) {
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
    <section id="three" className="wrapper spotlight style3">
      <div className="inner">
        <Link to="/Contact" className="image">
          <Img fluid={data.contentfulSections.image.fluid} />
        </Link>
        <div className="content">
          <h2 className="major">
            <Link to="/Contact">Contact</Link>
          </h2>
          <p>{data.contentfulSections.body}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
