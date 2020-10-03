import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import image1 from '../assets/img/testimonial.png';
import image2 from '../assets/img/testimonial.png';
import image3 from '../assets/img/testimonial.png';

const Testimonial = () => (
  <div className="container-fluid testimony-wrapper">
    <div className="container testimony-card">
      <div className="row carousel-container">
        <AliceCarousel autoPlay autoPlayInterval="3000" className="carousel">
          <img src={image1} alt="testimonials" className="img-fluid sliderimg" />
          <img src={image2} alt="testimonials" className="img-fluid sliderimg" />
          <img src={image3} alt="testimonials" className="img-fluid sliderimg" />
        </AliceCarousel>
      </div>
    </div>
  </div>
);

export default Testimonial;
