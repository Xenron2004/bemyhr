// "use client";
// import React from "react";
// import Image from "next/image";
// import goodWillLogo from "../assets/goodWillLogo.jpg";
// const OurParteners = () => {
//     return (
//     <div className="text-center">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">
//           Our Training Partners
//         </h1>
//         <div className="flex justify-center pt-10">
//             <Image
//             src={goodWillLogo}
//             alt="Our Training Parteners"
//             width={400}
//             height={200}
//             className="object-cover"
//             priority
//             />
//         </div>
//       </div>
//     )
// }
// export default OurParteners;

"use client";
import React from "react";
import Image from "next/image";
import goodWillLogo from "../assets/goodWillLogo.jpg";
const OurParteners = () => {
  return (
    <div className="text-center max-w-7xl w-11/12 ">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Our Training Partners
      </h1>
      <div className="flex flex-col gap-8 md:flex-row items-center justify-between pt-10">
        <Image
          src={goodWillLogo}
          alt="Our Training Parteners"
          width={300}
          height={100}
          className="object-cover"
          priority
        />
        <div className="text-gray-700 text-lg max-w-full ">
          "A highly reputable institute in hotel management training, backed by
          over 10 years of proven expertise in shaping hospitality
          professionals. Known for its commitment to excellence and strong
          industry connections, the institute has built a solid reputation and
          goodwill by consistently delivering quality education, fostering
          leadership skills, and empowering students to succeed in the global
          hospitality sector."
        </div>
      </div>
    </div>
  );
};
export default OurParteners;
