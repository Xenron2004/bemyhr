// import React from "react";
// import Logo from "../public/assets/Bemyhr.svg";
// import Image from "next/image";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaDribbble,
//   FaBehance,
// } from "react-icons/fa";
// // import Bg from "./Bg";
// import { FaXTwitter } from "react-icons/fa6";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="flex items-start  p-8 justify-center bg-dark">
//       <div className="flex flex-wrap  max-w-[1280px] items-start  gap-8  w-full py-8  px-2 justify-between">
//         <div className="flex flex-col gap-2 ">
//           {/* Logo section */}
//           <Link href="/home">
//             <Image src={Logo} width={170} height={80} alt="project icon" />{" "}
//           </Link>
//           <div className="font-inter text-white  font-medium text-[15px] md:text-[18px] max-w-[270px] w-full">
//             Building user-friendly and visually appealing digital solutions.
//           </div>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 max-w-[500px] w-full    items-start justify-between">
//           {/* Links */}
//           <div className="flex flex-col ">
//             {/* company */}
//             <h3 className="text-[#212b36] font-medium text-[17px] font-inter  mb-3">
//               Company
//             </h3>
//             <ul className="space-y-2 text-start font-inter font-medium text-gray-600">
//               {" "}
//               <li>
//                 <a
//                   href="/home"
//                   className="hover:text-white duration-300 ease-in-out text-mainBodytext text-start text-[16px] font-inter font-medium"
//                 >
//                   Home
//                 </a>
//               </li>{" "}
//               <li>
//                 <a
//                   href="/portfolio"
//                   className="hover:text-white text-start duration-300 ease-in-out text-mainBodytext text-[16px] font-inter font-medium"
//                 >
//                   Portfolio
//                 </a>
//               </li>{" "}
//               <li>
//                 <a
//                   href="https://cal.com/kaushal-kumar-anand/30min"
//                   className="hover:text-white text-start transition duration-300 ease-in-out text-mainBodytext text-[16px] font-inter font-medium"
//                 >
//                   Book a call
//                 </a>
//               </li>{" "}
//               <li>
//                 <a
//                   href="/contact"
//                   className="hover:text-white text-start transition duration-300 ease-in-out text-mainBodytext text-[16px] font-inter font-medium"
//                 >
//                   Contact Us
//                 </a>
//               </li>{" "}
//             </ul>
//           </div>
//           <div>
//             {/* resources */}
//             <h3 className="text-[#212b36]  font-medium text-start mb-3">
//               Resources
//             </h3>
//             <ul className="space-y-2 text-start text-gray-600">
//               <li>
//                 <a
//                   href="https://www.framer.com"
//                   className="hover:text-white transition duration-300 ease-in-out text-start text-mainBodytext text-[16px] font-inter font-medium"
//                 >
//                   Framer
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://wordpress.org"
//                   className="hover:text-white transition duration-300 ease-in-out text-start text-mainBodytext text-[16px] font-inter font-medium"
//                 >
//                   WordPress
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href=" https://webflow.com"
//                   className="hover:text-white transition duration-300 ease-in-out text-start text-mainBodytext text-[16px] font-inter font-medium"
//                 >
//                   Webflow
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href=" https://www.figma.com"
//                   className="hover:text-white transition duration-300 ease-in-out text-start text-mainBodytext text-[16px] font-inter font-medium"
//                 >
//                   Figma
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             {/* support */}
//             <h3 className="text-[#212b36] transition duration-300 ease-in-out font-inter text-[17px]  text-start font-medium  mb-3">
//               Support
//             </h3>
//             <ul className="space-y-2 text-start text-gray-600 ">
//               <li>
//                 <Link
//                   href="/help-center"
//                   className="hover:text-white transition duration-300 ease-in-out text-start text-mainBodytext text-[16px] font-inter font-medium"
//                 >
//                   Help Center
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/help-center"
//                   className="hover:text-white transition duration-300 ease-in-out text-start text-mainBodytext text-[16px] font-inter font-medium"
//                 >
//                   FAQs
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/privacy-policy"
//                   className="hover:text-white text-start transition duration-300 ease-in-out text-mainBodytext text-[16px] font-inter font-medium"
//                 >
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/terms-of-service"
//                   className="hover:text-white duration-300 ease-in-out text-start text-mainBodytext text-[16px] font-inter font-medium"
//                 >
//                   Terms of Service
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="flex flex-col max-w-[162px] w-full items-start">
//           {/* social Links */}
//           <div className="text-[#212b36] font-inter text-[17px]  text-start font-medium  mb-3">
//             Social Links
//           </div>
//           <div className="flex flex-row  gap-4 justify-between ">
//             <FaFacebookF
//               size={20}
//               className="hover:text-[#4A91F7] duration-300 ease-in-out text-mainBodytext cursor-pointer"
//             />
//             <Link href="https://dribbble.com/reevij">
//               <FaDribbble
//                 size={20}
//                 className="hover:text-[#FF70A6] duration-300 ease-in-out  text-mainBodytext cursor-pointer"
//               />
//             </Link>
//             <Link href="https://x.com/reevijsolutions">
//               <FaXTwitter
//                 size={20}
//                 className="hover:text-[#A5A5A5] duration-300 ease-in-out text-mainBodytext cursor-pointer"
//               />
//             </Link>
//             <Link href="https://www.behance.net/reevijsolutions">
//               <FaBehance
//                 size={20}
//                 className="hover:text-[#5A8EFF] duration-300 ease-in-out text-mainBodytext cursor-pointer"
//               />
//             </Link>
//             <Link href="https://www.instagram.com/reevijsolutions?igsh=MXZpc2F5Zzh4OWR3OA==">
//               <FaInstagram
//                 size={20}
//                 className="hover:text-[#FF709E] duration-300 ease-in-out text-mainBodytext cursor-pointer"
//               />
//             </Link>
//           </div>
//         </div>

//            <div className="max-w-[1280px] w-11/12 mx-auto mt-16 pt-8 border-t border-gray-200">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-gray-400">
//             © 2025 Bemyhr. All Rights Reserved
//           </p>
//           <div className="flex gap-6 text-sm text-gray-400">
//             <Link href="/terms" className="hover:text-white">
//               Terms of Use
//             </Link>
//             <Link href="/privacy" className="hover:text-white">
//               Privacy Policy
//             </Link>
//           </div>
//         </div>
//       </div>
//         {/* <Bg /> */}
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

import Logo from "../app/home/assets/LogoOne.png";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaDribbble,
  FaBehance,
  FaLinkedin,
} from "react-icons/fa";
import Bg from "./Bg";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex items-start mt-[80px] py-4 justify-center bg-[#0D0D12]">
      <div className="flex flex-wrap  max-w-[1280px] items-start  gap-8  w-11/12 py-8 justify-between">
        <div className="flex flex-col items-start justify-between">
          {/* Logo section */}
          <Link href="/">
            <Image src={Logo} width={180} height={90} alt="project icon" />{" "}
          </Link>
          <div className="font-montserrat mt-6 text-[#666D80]   font-normal text-[15px] md:text-[16px] max-w-[270px] w-full">
            Powered by{" "}
            <Link href="https://www.digimarksolutions.org/">
              <span className="underline text-[#666D80]  hover:text-[#0146B1] cursor-pointer">
                {" "}
                Digimark Solutions.{" "}
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-6 max-w-[700px] w-full    items-start justify-between">
          {/* Links */}

          <div className="flex flex-col gap-2 ">
            {/* company */}
            <h3 className="text-white font-medium font-montserrat  text-[16px]  mb-3">
              Company
            </h3>
            <ul className="space-y-3 text-start font-montserrat font-normal text-gray-600">
              {" "}
              <li>
                <div className="flex gap-2 items-center justify-start">
                  <div className="">
                    <IoMdMail width={16} height={16} />
                  </div>
                  <div className=" font-normal text-[#666D80]  hover:text-headingText text-[16px]">
                    jobs@bemyhr.in
                  </div>
                </div>
              </li>{" "}
              <li>
                <div className="flex gap-2 items-center justify-start">
                  <div className="">
                    <FaPhoneAlt width={16} height={16} />
                  </div>
                  <div className="font-montserrat font-normal text-[#666D80] hover:text-headingText text-[16px]">
                    +91 9594465739
                  </div>
                </div>
              </li>{" "}
              <li>
                <div className="flex gap-2 items-center justify-start">
                  <div className="">
                    <FaLocationDot width={16} height={16} />
                  </div>
                  <div className="font-montserrat font-normal text-[#666D80] hover:text-headingText text-[16px]">
                    1st floor, Sri Venkateswara Towers, Door No. 47, 3-31, opp.
                    Subbayya Gari Hotel, Dwaraka Nagar, Visakhapatnam, Andhra
                    Pradesh 530016
                  </div>
                </div>
              </li>{" "}
            </ul>
          </div>

          <div className="flex justify-between w-full gap-x-14">
            <div className="flex flex-col gap-2">
              {/* resources */}
              <h3 className="text-white  text-[16px] font-montserrat  font-medium text-start mb-3">
                Links
              </h3>
              <ul className="space-y-3 text-start text-gray-600">
                <li>
                  <Link
                    href="/"
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start text-[#666D80]  text-[15px] font-ProximaNova font-normal"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start text-[#666D80]  text-[15px]  font-normal"
                  >
                    Featured Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start text-[#666D80]  text-[15px] font-montserrat font-normal"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start text-[#666D80]  text-[15px] font-montserrat font-normal"
                  >
                    Why us
                  </Link>
                </li>
              </ul>
            </div>

            {/* support */}
            <div className="flex flex-col gap-2">
              <h3
                className="text-headingText transition duration-300 ease-in-out font-montserrat text-[17px]  text-white font-medium
              mb-3"
              >
                Support
              </h3>
              <ul className="space-y-3 text-start text-gray-600 ">
                <li>
                  <Link
                    href="https://www.termsfeed.com/live/501f5040-1932-4d6d-aba8-e5b61325833d"
                    className="hover:text-bodyText text-start transition duration-300 ease-in-out text-mainBodytext text-[15px] font-montserrat font-normal"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 max-w-[162px] w-full items-start">
          {/* social Links */}
          <div className="text-white font-montserrat text-[17px]  text-start font-medium  mb-3">
            Social Links
          </div>
          <div className="flex flex-row  gap-4 justify-between ">
            <Link href="https://www.facebook.com/profile.php?id=61576799140462">
              <FaFacebookF
                size={20}
                className="hover:text-[#4A91F7] duration-300 ease-in-out text-[#666D80] cursor-pointer"
              />
            </Link>

            {/* <Link href="https://www.linkedin.com/company/nxtzengroup/">
              <FaLinkedin
                size={20}
                className="hover:text-[#A5A5A5] duration-300 ease-in-out text-[#666D80]  cursor-pointer"
              />
            </Link> */}

            <Link href="https://www.instagram.com/bemy_hr/">
              <FaInstagram
                size={20}
                className="hover:text-[#FF709E] duration-300 ease-in-out text-[#666D80] cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <Bg />
      </div>
    </footer>
  );
};

export default Footer;
