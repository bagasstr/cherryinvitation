import React from "react";
import { options } from "../data";
import { HiOutlineChevronDown } from "react-icons/hi";

const Options = () => {
  // destructure options
  const { title, subtitle, icon, name, subname, delay } = options;

  return (
    <section className="section ">
      <div className="container mx-auto ">
        {/* title */}
        <h2
          className="mb-10 text-center h3 lg:mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}
        </h2>
        <p
          className="mb-10 text-center blue lg:mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subtitle}
        </p>
        {/* grid */}
        <div data-aos="fade-up" data-aos-delay={delay} data-aos-offset="300">
          <div className="items-center justify-between grid-cols-2 gap-6 mx-auto lg:grid ">
            <div className="flex py-3 ">
              <div className="p-4">
                <img src={icon} alt="" width={60} />
              </div>
              <div>
                <h4 className="h4">{name}</h4>
                <p className="blue">{subname}</p>
              </div>
            </div>
            <div className="flex py-3 ">
              <div className="p-4">
                <img src={icon} alt="" width={60} />
              </div>
              <div>
                <h4 className="h4">{name}</h4>
                <p className="blue">{subname}</p>
              </div>
            </div>
            <div className="flex py-3 ">
              <div className="p-4">
                <img src={icon} alt="" width={60} />
              </div>
              <div>
                <h4 className="h4">{name}</h4>
                <p className="blue">{subname}</p>
              </div>
            </div>
            <div className="flex py-3 ">
              <div className="p-4">
                <img src={icon} alt="" width={60} />
              </div>
              <div>
                <h4 className="h4">{name}</h4>
                <p className="blue">{subname}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Options;
