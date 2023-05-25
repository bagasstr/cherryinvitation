import React from "react";
// import data
import { features } from "../data";

const Invitation3 = () => {
  // destructure features
  const { feature3 } = features;
  // destructure feature3
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature3;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]">
          {/* text */}
          <div className="flex-1" data-aos="fade-right" data-aos-offset="400">
            <div className="pretitle">{pretitle}</div>
            <h4 className="h4">{title}</h4>
            <p className="blue">{subtitle}</p>
            <button className="flex items-center transition-all btn-link gap-x-3 hover:gap-x-5">
              {btnLink} <img src={btnIcon} alt="" />
            </button>
          </div>
          {/* image */}
          <div className="flex-1">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation3;
