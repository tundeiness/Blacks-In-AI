import React from 'react';

const Membership = () => (
  <div className="container-fluid member-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 member-col-left">
          <div className="left-matter">
            <h2>Here goes a bold header about becoming a member.</h2>
            <a href="#" className="button">Apply to Join</a>
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
        <div className="col-lg-3 stats-one">Stats-1</div>
        <div className="col-lg-3 stats-one">Stats-2</div>
        <div className="col-lg-3 stats-one">Stats-3</div>
        <div className="col-lg-3 stats-one">Stats-4</div>
      </div>
    </div>
  </div>

);

export default Membership;
