import React from 'react';

import Layout from '../components/Layout';
import { Link } from 'gatsby';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

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
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">
              <Link to="/Gallery">Photos</Link>
            </h2>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">About</h2>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic7} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Blog</h2>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Contact Info</h2>
          <p>
            If you would like more information regarding my photos or if you are
            interested in booking please use the following to assist you.
          </p>
          <div style={{ display: 'flex' }}>
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
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
