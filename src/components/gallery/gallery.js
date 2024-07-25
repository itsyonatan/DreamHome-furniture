import React from "react";
import images from "../../data/images";
import "./gallery.css";
// slick slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {
  let settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
  };

  return (
    <div className="gallery">
      <div className="gallery-content container lexColCenter">
        <div className="gallery-header flexColCenter">
          <p className="sectionText">our gallery</p>
          <p className="categories-sub-header text-cap">our gallery showcases in your home</p>
        </div>
        <div className="gallery-items">
          <Slider {...settings}>
            {
              images.gallery.map((image, index) => {
                return (
                  <div className="gallery-item" key={index}>
                    <img src={image} alt="gallery-image" />
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}