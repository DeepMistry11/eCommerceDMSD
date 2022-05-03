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
          <img src="https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb" />
        </div>
        <div className="wrap">
          <img src="https://www.thoughtco.com/thmb/NRuMaaVBhsrz3AyDBweiPAZpYfw=/1500x844/smart/filters:no_upscale()/GettyImages-909076272-5c48c8c146e0fb0001891c02.jpg" />
        </div>
        <div className="wrap">
          <img src="https://i.pcmag.com/imagery/reviews/06N1XVGlhSx56RLTrHKjueu-1.fit_lim.size_625x365.v1618239573.jpg" />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
