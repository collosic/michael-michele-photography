import React from 'react';
import Layout from '../components/Layout';
import AboutLink from '../components/AboutLink';
import PhotosLink from '../components/PhotosLink';
import Blog from '../components/BlogLink';

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
      <Blog />
      <section id="contact-container" className="inner wrapper alt style1">
        <div className="inner">
          <h2 className="major">Contact Info</h2>
          <p>
            If you would like more information regarding my photos or if you are
            interested in booking please use the following to assist you.
          </p>
          <form method="post" action="/#">
            <div className="fields">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
          <ul className="contact">
            <li className="fa-home">{config.address}</li>

            <li className="fa-phone">{config.phone}</li>

            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <li className={`${icon}`} key={url}>
                  <a href={url}>{url}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
