import data from "../../data/data";
import "./testimonials.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// slick slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  let settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="testimonials container">
      <div className="testimonials-header flexColCenter">
        <p className="sectionText">testimonials</p>
        <p className="categories-sub-header text-cap">what our client say</p>
      </div>
      <div className="testimonials-content text__center">
        <Slider {...settings}>
          {
            data.testimonials.map((testimonial, index) => {
              return (
                <div className="testimonials-item" key={index}>
                  <p className="text">
                    <span><FaQuoteLeft /></span>
                    &nbsp;
                    {testimonial.text} <span>&nbsp; <FaQuoteRight /></span>
                  </p>
                  <p className="text-upper testimonial-name">{testimonial.name}</p>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials;