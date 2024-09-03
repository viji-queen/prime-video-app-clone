import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          left: "20px",
          zIndex: 10000,
        }}
        onClick={onClick}
      >
        <span style={{ fontSize: "20px" }}>{"<"}</span>
      </div>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "20px",
          zIndex: 1000,
        }}
        onClick={onClick}
      >
        <span style={{ fontSize: "20px" }}>{">"}</span>
      </div>
    );
  };
function CustomSlider({children, settings}) {
    const defaultSettings = {
        dots: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
        ...settings
      };
  return (
  
        <Slider {...defaultSettings}>
        {children}
    </Slider>

  )
}

export default CustomSlider