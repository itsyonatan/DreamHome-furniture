import React from "react";
import images from "../../data/images";
import "./gallery.css";
// slick slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {
  let settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
              images.gallery.map((image, index) => (
                  <div className="gallery-item" key={index}>
                    <img src={image} alt="gallery-image" />
                  </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}