import React from 'react';

const Header = () => (
  <nav className="navbar navbar-default navbar-static-top" id="nav">
    <div className="container" id="header-container">
      <div className="row">
        <div className="col-lg-2">
          <img className="img-fluid" alt="Brand" src="https://user-images.githubusercontent.com/25479050/93932439-1dd8a080-fd18-11ea-93fd-5cbf5e1faa1a.png" />
        </div>
        <div className="col-lg-4" />
        <div className="col-lg-6">
          <ul className="d-flex flex-row justify-content-between sub-container">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another </a></li>
            <li><a href="#">Something </a></li>
            <li><a href="#">Separated </a></li>
            <li><a href="#">Donate</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
