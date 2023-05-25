import React, { useState } from "react";
// import data
import { product } from "../data";
// import images
import ArrowImg from "../assets/image/arrow-right.svg";

const Cards = () => {
  // index state
  const [index, setIndex] = useState(1);
  // destructure product data
  const { cards } = product;
  return (
    <>
      {/* cards */}
      <div className="grid grid-rows-3 gap-3 lg:gap-24 lg:grid-cols-3 md:grid-cols-2 ">
        {cards.map((card, cardIndex) => {
          // destructure card
          const { icon, title, subtitle, delay } = card;
          return (
            <div
              key={cardIndex}
              data-aos="zoom-out"
              data-aos-offset="100"
              data-aos-delay="delay"
            >
              <div
                onClick={() => setIndex(cardIndex)}
                className={`${
                  index === cardIndex && "bg-primary shadow-2xl"
                }  lg:w-[392px] lg:h-[192px] flex flex-col justify-center items-center   text-center rounded-[12px] cursor-pointer transition-all`}
              >
                {/* card icon */}
                <div className="mb-6">
                  <img src={icon} alt="" />
                </div>
                {/* card title */}
                <div className="mb-3 text-[30px] font-medium">{title}</div>
                {/* card subtitle */}
                <p className="mb-6 text-light">{subtitle}</p>
                {/* arrow img */}
                {index === cardIndex && <img src={ArrowImg} />}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;

// flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]
