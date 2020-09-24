import React from 'react';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Membership from './components/membership';
import Testimonial from './components/testimonial';

const App = () => (
  <>
    <Header />
    <div className="main-wrapper" id="main">
      {/* <div className="container">
        <p>Hello World !!!</p>
      </div> */}
      <Introduction />
      <Membership />
      <Testimonial />
    </div>
  </>
);

export default App;
