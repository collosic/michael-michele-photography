import React from 'react';

import Layout from '../components/Layout';
import config from '../../config';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Contact Information</h2>
        </div>
      </header>
      <section id="contact-container" className="inner wrapper alt style1">
        <div className="inner">
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
