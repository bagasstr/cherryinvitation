// import React from "react";
// // import data
// import { footer } from "../data";
// // import components
// // import Copyright from "./Copyright";

// const Footer = () => {
//   // destructure footer data
//   const { logo, links, legal, newsletter, form } = footer;
//   return (
//     <footer>
//       <div className="container mx-auto">
//         {/* logo */}
//         <div>
//           <img src={logo} alt="" className="w-[200px]" />
//         </div>
//         {/* list 1 */}
//         <div>
//           <div>Links</div>
//           <ul>
//             {links.map((item, index) => {
//               // destructure item
//               const { href, name } = item;
//               return (
//                 <li key={index}>
//                   <a href={href}>{name}</a>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };
// export default Footer;
import React from "react";

const Footer = () => {
  return <div>Footer</div>;
};

export default Footer;
