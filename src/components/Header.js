import React from 'react';

const Header = () => (
  <nav className="navbar navbar-toggleable-md navbar-default navbar-static-top" id="nav">
    <div className="container" id="header-container">
      <a className="navbar-brand" href="https://www.blackinai.org">
        <img src="https://user-images.githubusercontent.com/25479050/93932439-1dd8a080-fd18-11ea-93fd-5cbf5e1faa1a.png" width="130" height="40" className="d-inline-block align-top" alt="" />
      </a>
      <button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              About
              {' '}
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Programs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Membership</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Partnership</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Donate</a>
          </li>
        </ul>
      </div>
      {/* <div className="container" id="header-container">
      <div className="row">
        <div className="col-lg-2">
          <img className="img-fluid" alt="Brand" src="https://user-images.githubusercontent.com/25479050/93932439-1dd8a080-fd18-11ea-93fd-5cbf5e1faa1a.png" width="130" height="40" />
        </div>
        <div className="col-lg-4" />
        <div className="col-lg-6">
          <ul className="d-flex flex-row justify-content-between  sub-container">
            <li><a href="#">About</a></li>
            <li><a href="#">Programs </a></li>
            <li><a href="#">Membership</a></li>
            <li><a href="#">Partnership </a></li>
            <li><a href="#">Donate</a></li>
          </ul>
        </div>
      </div>
    </div> */}
    </div>
  </nav>
);

export default Header;
