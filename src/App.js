import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Membership from './components/membership';
import Testimonial from './components/testimonial';
import Members from './components/members';
import Call from './components/call';
import Footer from './components/footer';

const App = () => (
  <>
    <Header />
    <div className="main-wrapper" id="main">
      <Introduction />
      <Membership />
      <Testimonial />
      <Members />
      <Call />
      <Footer />
    </div>
  </>
);

export default App;
