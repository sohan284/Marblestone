import brand1 from "../../assets/Company.png";
import brand2 from "../../assets/Agency.png";
import brand3 from "../../assets/Venture.png";
import brand4 from "../../assets/Enterprise.png";
import brand5 from "../../assets/Institute.png";
import brand6 from "../../assets/Application.png";
import React from "react";
import Slider from "react-slick";

function SeenOn() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div data-aos="fade-in" className="mt-20 container mx-auto">
      <h1 className="text-lg text-center text-[#A4A6B0]">
        As seen on :
      </h1>
      <div className="slider-container mt-5">
        <Slider {...settings}>
          <div>
            <img src={brand1} alt="" />
          </div>
          <div>
            <img src={brand2} alt="" />

          </div>
          <div>
            <img src={brand3} alt="" />

          </div>
          <div>
            <img src={brand4} alt="" />

          </div>
          <div>
            <img src={brand5} alt="" />

          </div>
          <div>
            <img src={brand6} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default SeenOn;