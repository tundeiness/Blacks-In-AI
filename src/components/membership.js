/* eslint-disable max-len */
import React from 'react';

const Membership = () => (
  <div className="container-fluid member-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 member-col-left">
          <div className="left-matter">
            <h2>Here goes a bold header about becoming a member.</h2>
            <a href="/apply" className="button">Apply to Join</a>
          </div>
        </div>
        <div className="col-lg-6 member-col-right">
          <div className="listing-one">
            <h4>A benefit of membership</h4>
            <p>This is dummy copy. It is not meant to be read. It has been placed here  soley to demonstrate the look and feel of finished, typeset text. Only   for show. He who searches for meaning here will be sorely disappointed.</p>
          </div>
          <div className="listing-two">
            <h4>Another benefit of membership</h4>
            <p>This is dummy copy. It is not meant to be read. It has been placed here  soley to demonstrate the look and feel of finished, typeset text. Only   for show. He who searches for meaning here will be sorely disappointed.</p>
          </div>
          <div className="listing-three">
            <h4>Yet Another benefit of membership</h4>
            <p>This is dummy copy. It is not meant to be read. It has been placed here  soley to demonstrate the look and feel of finished, typeset text. Only   for show. He who searches for meaning here will be sorely disappointed.</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="row statistics">
        <div className="col-lg-3 stats-one">
          <h4>5999</h4>
          <p>We've grown from this number to that number of members over this period of time.</p>
        </div>
        <div className="col-lg-3 stats-two">
          <h4>24+</h4>
          <p>Total number of countries with members in BAI.</p>
        </div>
        <div className="col-lg-3 stats-three">
          <h4>50+</h4>
          <p>Total number of universities around the world with members in BAI.</p>
        </div>
        <div className="col-lg-3 stats-four">
          <h4>100+</h4>
          <p>Another metric that showcases an interesting aspect of membership to get people to join.</p>
        </div>
      </div>
    </div>
  </div>

);

export default Membership;
