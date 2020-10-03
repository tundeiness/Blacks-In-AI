import React from 'react';

const Call = () => (
  <div className="container-fluid call-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6 d-flex justify-content-sm-center justify-content-center  justify-content-md-start justify-content-lg-start">
          <p className="d-inline-block">Become a member</p>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 d-flex justify-content-sm-center justify-content-center justify-content-sm-end  justify-content-md-end justify-content-lg-end">
          <a href="/join-us" className="cta-button my-auto h-25 pt-2 pb-4 pl-3 pr-3">Apply to Join</a>
        </div>
      </div>
    </div>
  </div>
);

export default Call;
