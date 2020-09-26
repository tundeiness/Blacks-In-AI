/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome';

const Footer = () => (
  <div className="container-fluid footer-wrapper">
    <div className="container">
      <div className="row footer-row-details">
        <div className="col-lg-4 footer-col-1">
          <h4>BLACK IN AI</h4>
          <p className="footer-introduction">Short sentence stating the nature of the organization e.g. tax-exempt, non-profit and possibly registration number.</p>
          <a href="#" className="donate-button">Donate</a>
        </div>
        <div className="col-lg-2 footer-col-2">
          <h6>Contact us</h6>
          <p>Physical address, if available will go right here.</p>
          <p>abc@blackinai.org</p>
          <div className="footer-socials">
            <a target="_blank" rel="noreferrer" href="facebook.com" className="icon footer-brands fa-facebook">
              <FontAwesomeIcon className="footer-icon" icon={['fab', 'facebook']} size="lg" />
            </a>
            <a target="_blank" rel="noreferrer" href="twitter.com" className="icon footer-brands fa-twitter">
              <FontAwesomeIcon className="footer-icon" icon={['fab', 'twitter']} size="lg" />
            </a>
          </div>
        </div>

        <div className="col-lg-2 footer-col-2 d-flex flex-column">
          <h6>Links</h6>
          <a href="#" className="footer-about">About us</a>
          <a href="#" className="footer-program">Programs</a>
          <a href="#" className="footer-member">Membership</a>
          <a href="#" className="footer-partner">Partership</a>
        </div>
        <div className="col-lg-4 footer-col-1 update">
          <h6>Get updates</h6>
          <p>Sign up for our newletter to get updates on our work.</p>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Your email address" aria-label="Sender's Email" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn " type="button">Subscribe</button>
            </div>
          </div>
        </div>

      </div>

    </div>
    <div className="row footer-row-copyright">
      <p>copyright 2020 Black in AI</p>
    </div>
  </div>

);

export default Footer;
