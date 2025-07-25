
// import React from "react";

// const ContactCard = ({
//   icon,
//   heading,
//   bodyText,
//   links = [], // Accept an array of links for the "LinkText" section
//   iconBgColor = "",
// }) => {
//   return (
//     <div className="flex flex-col items-start bg-[#F4F4F466] gap-4 text-start w-full p-6 max-w-[413px] h-auto max-h-[180px]  transition-all duration-300">
//       {/* Icon Container */}
//       <div className="flex gap-3">
//         <div
//           className={` ${iconBgColor} flex items-center justify-center transition-all duration-0`}
//         >
//           {icon}
//         </div>

//         {/* Heading */}
//         <h3 className="text-[20px] text-headingText font-medium font-montserrat">
//           {heading}
//         </h3>
//       </div>

//       {/* Body Text */}
//       <p className="text-[16px] text-bodyText font-montserrat font-regular">
//         {bodyText}
//       </p>

//       {/* Links */}
//       <div className="text-[16px] text-headingText font-montserrat font-regular flex flex-wrap gap-2">
//         {links.map((link, index) => (
//           <a
//             key={index}
//             href={link.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-primary font-montserrat font-medium hover:underline"
//           >
//             {link.text}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ContactCard;

































// "use client";
// import React from "react";

// const ContactCard = ({
//   icon,
//   heading,
//   bodyText,
//   links = [],
//   hoverColor = "#004AAD", // default hover color
// }) => {
//   return (
//     <div
//       className="group flex flex-col items-start bg-[#F4F4F466] gap-4 text-start w-full p-6 max-w-[413px] h-auto max-h-[180px] transition-all duration-300 rounded-md border border-transparent hover:shadow-lg"
//       style={{ borderColor: hoverColor }}
//     >
//       {/* Icon + Heading */}
//       <div className="flex gap-3 items-center">
//         <div
//           className={`flex items-center justify-center w-[40px] h-[40px] rounded-full transition-all duration-300`}
//           style={{ backgroundColor: `${hoverColor}20` }} // light background
//         >
//           <div
//             className="transition-all duration-300 text-[20px]"
//             style={{ color: hoverColor }}
//           >
//             {icon}
//           </div>
//         </div>

//         <h3
//           className="text-[20px] text-headingText font-medium font-montserrat transition-all duration-300"
//           style={{ color: hoverColor }}
//         >
//           {heading}
//         </h3>
//       </div>

//       {/* Body Text */}
//       <p className="text-[16px] text-bodyText font-montserrat font-regular transition-all duration-300 group-hover:text-white">
//         {bodyText}
//       </p>

//       {/* Links */}
//       <div className="text-[16px] font-montserrat font-medium flex flex-wrap gap-2">
//         {links.map((link, index) => (
//           <a
//             key={index}
//             href={link.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="transition-colors duration-300 hover:underline"
//             style={{
//               color: hoverColor,
//             }}
//           >
//             {link.text}
//           </a>
//         ))}
//       </div>

//       {/* Hover styling using JSX */}
//       <style jsx>{`
//         .group:hover {
//           background-color: ${hoverColor};
//         }
//         .group:hover h3,
//         .group:hover a,
//         .group:hover div > div {
//           color: white !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ContactCard;
































"use client";

import React from "react";

const ContactCard = ({
  icon,
  heading,
  bodyText,
  links = [],
  iconBgColor = "",
  hoverColor = "#004AAD",
}) => {
  return (
    <div
      className={`group flex flex-col items-start gap-4 text-start w-full p-6 max-w-[413px] h-auto max-h-[180px] transition-all duration-300 cursor-pointer border`}
      style={{ borderColor: hoverColor }}
    >
      {/* Icon + Heading */}
      <div className="flex gap-3 items-center">
        <div
          className={`p-3 rounded-full transition-all duration-300`}
          style={{ backgroundColor: `${hoverColor}20` }}
        >
          <div className="transition-colors duration-300 group-hover:text-white" style={{ color: hoverColor }}>
            {icon}
          </div>
        </div>
        <h3 className="text-[20px] font-medium font-montserrat transition-colors duration-300 group-hover:text-white text-headingText">
          {heading}
        </h3>
      </div>

      {/* Body Text */}
      <p className="text-[16px] text-bodyText font-montserrat font-regular transition-colors duration-300 group-hover:text-white">
        {bodyText}
      </p>

      {/* Links */}
      <div className="text-[16px] text-headingText font-montserrat font-regular flex flex-wrap gap-2 transition-colors duration-300 group-hover:text-white">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all duration-300 group-hover:text-white text-primary"
          >
            {link.text}
          </a>
        ))}
      </div>

      {/* Inline Style for Background Hover */}
      <style jsx>{`
        .group:hover {
          background-color: ${hoverColor};
        }
      `}</style>
    </div>
  );
};

export default ContactCard;






























// "use client";

// import React from "react";

// const ContactCard = ({
//   icon,
//   heading,
//   bodyText,
//   links = [],
//   hoverColor = "",
// }) => {
//   return (
//     <div
//       className="group flex flex-col items-start gap-4 text-start w-full p-6 max-w-[413px] h-auto max-h-[180px] transition-all duration-300 cursor-pointer border rounded-lg"
//       style={{
//         borderColor: hoverColor,
//       }}
//     >
//       {/* Icon + Heading */}
//       <div className="flex gap-3 items-center">
//         <div
//           className="p-3 rounded-full transition-all duration-300"
//           style={{ backgroundColor: `${hoverColor}20` }}
//         >
//           {/* Wrap icon in span to allow color change */}
//           <span className="transition-colors duration-300 group-hover:text-white" style={{ color: hoverColor }}>
//             {icon}
//           </span>
//         </div>
//         <h3 className="text-[20px] font-medium font-montserrat transition-colors duration-300 group-hover:text-white text-headingText">
//           {heading}
//         </h3>
//       </div>

//       {/* Body Text */}
//       <p className="text-[16px] text-bodyText font-montserrat font-regular transition-colors duration-300 group-hover:text-white">
//         {bodyText}
//       </p>

//       {/* Links */}
//       <div className="text-[16px] font-montserrat font-regular flex flex-wrap gap-2 transition-colors duration-300 group-hover:text-white">
//         {links.map((link, index) => (
//           <a
//             key={index}
//             href={link.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:underline transition-all duration-300 group-hover:text-white text-primary"
//           >
//             {link.text}
//           </a>
//         ))}
//       </div>

//       {/* Inline Hover Background */}
//       <style jsx>{`
//         .group:hover {
//           background-color: ${hoverColor};
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ContactCard;
