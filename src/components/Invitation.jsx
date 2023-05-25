import React from "react";
// import data
import { features } from "../data";

const Invitation = () => {
  // destructure features
  const { feature1 } = features;
  // destructure feature1
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature1;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]">
          {/* text */}
          <div className="flex-1">
            <img
              src="https://isinvitation.com/wp-content/uploads/2023/01/MOCKUP-WDP.png"
              alt=""
            />
          </div>
          {/* image */}
          <div className="flex-1">
            <h2 className="mb-2 title lg:mb-5 lg:leading-[42px] lg:text-[35px]">
              {title}{" "}
              <span className="text-secondary lg:leading-[42px] lg:text-[35px]">
                Undangan Digital?
              </span>
            </h2>
            <p className="mb-5 blue lg:mb-10">{subtitle}</p>
            {/* <button className="flex items-center transition-all btn-link gap-x-3 hover:gap-x-5">
              {btnLink} <img src={btnIcon} alt="" />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
