import React from "react";
// import data
import { features } from "../data";

const Invitation2 = () => {
  // destructure features
  const { feature2 } = features;
  // destructure feature2
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature2;
  return (
    <section className="section">
      <div className="container mx-auto bg-blue">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]">
          {/* image */}
          <div className="flex-1 order-2 lg:order-1">
            <img src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="pretitle">{pretitle}</div>
            <h2 className="h4">{title}</h2>
            <p className="blue">{subtitle}</p>
            <button className="flex items-center transition-all btn-link gap-x-3 hover:gap-x-5">
              {btnLink} <img src={btnIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation2;
