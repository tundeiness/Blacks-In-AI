import React from 'react';

const Header = () => (
  <nav className="navbar navbar-expand-md navbar-static-top" id="nav">
    <div className="container" id="header-container">

      <a className="navbar-brand" href="#">
        <img className="img-fluid" alt="Brand" src="https://user-images.githubusercontent.com/25479050/93932439-1dd8a080-fd18-11ea-93fd-5cbf5e1faa1a.png" width="130" height="40" />
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav sub-container">
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Programs </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Membership</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Partnership </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Donate</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

);

export default Header;
