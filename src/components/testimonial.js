import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import image1 from '../assets/img/testimonial.png';
import image2 from '../assets/img/testimonial.png';
import image3 from '../assets/img/testimonial.png';

const Testimonial = () => {
  const responsive = {
    0: {
      items: 1,
    },
    320: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1024: {
      items: 1,
    },
  };

  return (
    <div className="container-fluid testimony-wrapper">
      <div className="container testimony-card">
        <div className="row carousel-container">
          <AliceCarousel autoPlay responsive={responsive} autoPlayInterval="3000" className="carousel">
            <img src={image1} alt="testimonials" className=" sliderimg" />
            <img src={image2} alt="testimonials" className=" sliderimg" />
            <img src={image3} alt="testimonials" className=" sliderimg" />
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
