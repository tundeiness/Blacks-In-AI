import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Membership from './components/membership';
import Testimonial from './components/testimonial';
import Members from './components/members';

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
      <Members />
    </div>
  </>
);

export default App;
