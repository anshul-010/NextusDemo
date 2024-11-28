import React from "react";
import Slider from "react-slick";

const ProductSlider = () => {
  const mainSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    lazyLoad: "ondemand",
    autoplaySpeed: 3000,
    asNavFor: ".product__slider-thmb",
    fade: true,
  };

  const thumbnailSliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product__slider-main",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    lazyLoad: "ondemand",
  };

  return (
    <div className="product-slider-wrapper">
      <div className="product__slider-main">
        <Slider {...mainSliderSettings}>
          <div className="slide">
            <img
              src="http://dummyimage.com/300"
              alt="Main Slide 1"
              className="img-responsive"
            />
          </div>
          <div className="slide">
            <img
              src="http://dummyimage.com/300"
              alt="Main Slide 2"
              className="img-responsive"
            />
          </div>
          <div className="slide">
            <img
              src="http://dummyimage.com/300"
              alt="Main Slide 3"
              className="img-responsive"
            />
          </div>
          <div className="slide">
            <img
              src="http://dummyimage.com/300"
              alt="Main Slide 4"
              className="img-responsive"
            />
          </div>
        </Slider>
      </div>

      <div className="product__slider-thmb">
        <Slider {...thumbnailSliderSettings}>
          <div className="slide">
            <img
              src="http://dummyimage.com/300"
              alt="Thumbnail 1"
              className="img-responsive"
            />
          </div>
          <div className="slide">
            <img
              src="http://dummyimage.com/300"
              alt="Thumbnail 2"
              className="img-responsive"
            />
          </div>
          <div className="slide">
            <img
              src="http://dummyimage.com/300"
              alt="Thumbnail 3"
              className="img-responsive"
            />
          </div>
          <div className="slide">
            <img
              src="http://dummyimage.com/300"
              alt="Thumbnail 4"
              className="img-responsive"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
