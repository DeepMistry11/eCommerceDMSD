import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="slider__wrapper">
      <Slider {...settings}>
        <div className="wrap">
          <img src="/images/slide1.jpg" />
        </div>
        <div className="wrap">
          <img src="/images/slide2.jpg" />
        </div>
        <div className="wrap">
          <img src="/images/slide3.jpg" />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
