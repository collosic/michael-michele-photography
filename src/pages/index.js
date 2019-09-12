import React from 'react';
import Layout from '../components/Layout';
import AboutLink from '../components/AboutLink';
import PhotosLink from '../components/PhotosLink';
import Contact from '../components/ContactLink';

import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-camera"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <AboutLink />
      <PhotosLink />
      <Contact />
    </section>
  </Layout>
);

export default IndexPage;
