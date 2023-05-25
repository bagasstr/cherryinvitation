import React from "react";
import { nav } from "../data";

const MobileNav = () => {
  return (
    <div className="w-full bg-[#f7f7f7] ease-in-out duration-500 ">
      <ul className="grid grid-cols-1 divide-y ">
        {nav.map((item, index) => {
          // destructure item
          const { href, name } = item;
          return (
            <li className="p-4 hover:bg-slate-100" key={index}>
              <a
                className="text-xl transition text-300 hover:text-secondary "
                href={href}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
