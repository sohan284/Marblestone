import brand1 from "../../assets/Company.png";
import brand2 from "../../assets/Agency.png";
import brand3 from "../../assets/Venture.png";
import brand4 from "../../assets/Enterprise.png";
import brand5 from "../../assets/Institute.png";
import brand6 from "../../assets/Application.png";
import React from "react";
import Marquee from "react-fast-marquee";

function SeenOn() {
  return (
    <div data-aos="fade-in" className="mt-20 container mx-auto">
      <h1 className="text-lg text-center text-[#A4A6B0]">
        As seen on :
      </h1>
      <div className="marquee-container" style={{ padding: "40px 0", background: "#f8f8f8" }}>
        <Marquee>
          <img src={brand1} alt="Company" style={{ marginRight: "80px" }} />
          <img src={brand2} alt="Agency" style={{ marginRight: "80px" }} />
          <img src={brand3} alt="Venture" style={{ marginRight: "80px" }} />
          <img src={brand4} alt="Enterprise" style={{ marginRight: "80px" }} />
          <img src={brand5} alt="Institute" style={{ marginRight: "80px" }} />
          <img src={brand6} alt="Application" style={{ marginRight: "80px" }} />
          
        </Marquee>
      </div>
    </div>
  );
}
export default SeenOn;