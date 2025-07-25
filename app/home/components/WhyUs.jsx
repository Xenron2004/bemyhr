"use client";

import Image from "next/image";
// import { FaCheckCircle, FaCog, FaBuilding, FaCreditCard, FaGlobe } from 'react-icons/fa';
import { FaBriefcase, FaGlobe, FaUserCheck, FaPassport } from "react-icons/fa";
import ParallaxImage from "./ParallaxImage";
import PhotoOne from "../assets/4.png"; // Adjust the path as necessary
import PhotoTwo from "../assets/5.png";
import PhotoThree from "../assets/6.png";

export default function WhyUs() {
  // const features = [
  //   {
  //     icon: <FaBriefcase className="w-6 h-6" />,
  //     title: "15+ Years of Experience",
  //     description:
  //       "Trusted name in international job placements for over 15 years.",
  //   },
  //   {
  //     icon: <FaGlobe className="w-6 h-6" />,
  //     title: "Global Network",
  //     description: "Connections with top companies in 15+ countries.",
  //   },
  //   {
  //     icon: <FaUserCheck className="w-6 h-6" />,
  //     title: "10,000+ Success Stories",
  //     description:
  //       "Proven track record of successful candidate placements worldwide.",
  //   },
  //   {
  //     icon: <FaPassport className="w-6 h-6" />,
  //     title: "End-to-End Support",
  //     description:
  //       "From application to visa and onboarding — we’ve got you covered.",
  //   },
  // ];

  const features = [
    {
      icon: <FaBriefcase className="w-6 h-6" />,
      title: "15+ Years of Experience",
      description:
        "Trusted name in international job placements for over 15 years.",
      hoverColor: "#41B93D", // Green
    },
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: "Global Network",
      description: "Connections with top companies in 15+ countries.",
      hoverColor: "#007BFF", // Blue
    },
    {
      icon: <FaUserCheck className="w-6 h-6" />,
      title: "10,000+ Success Stories",
      description:
        "Proven track record of successful candidate placements worldwide.",
      hoverColor: "#F59E0B", // Amber
    },
    {
      icon: <FaPassport className="w-6 h-6" />,
      title: "End-to-End Support",
      description:
        "From application to visa and onboarding — we’ve got you covered.",
      hoverColor: "#EF4444", // Red
    },
  ];

  const imageList = [PhotoOne.src, PhotoTwo.src, PhotoThree.src];

  return (
    <section id="whyus" className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-[1280px] w-11/12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-[36px] font-bold text-gray-900 leading-tight">
                Why We are Most Popular
              </h2>
              <p className="text-[17px] text-gray-600 leading-relaxed">
                At BEMYHR, we go beyond just placements. Our focus is on
                building real careers through personalized support, trusted
                global connections, and transparent processes. With a passion
                for empowering individuals, we ensure every candidate is
                prepared, confident, and positioned for success in today’s
                competitive global job market.
              </p>
            </div>

            {/* Features Grid */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group px-5 py-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg cursor-pointer"
                >
                  <div className="flex items-center  space-x-4">
                    <div className="flex-shrink-0 items-center justify-center p-3 bg-gray-100 rounded-lg group-hover:bg-green-100 transition-colors duration-300">
                      <div className="text-gray-700 group-hover:text-[#41B93D] transition-colors duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#41B93D] transition-colors duration-300">
                        {feature.title}
                      </h3>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group px-5 py-4 rounded-xl border transition-all duration-300 shadow hover:shadow-lg cursor-pointer"
                  style={{
                    borderColor: feature.hoverColor,
                    backgroundColor: "white",
                  }}
                >
                  <div className="flex items-center space-x-4 transition-all duration-300 group-hover:text-white group-hover:fill-white">
                    <div
                      className="flex-shrink-0 items-center justify-center p-3 rounded-lg transition-all duration-300"
                      style={{
                        backgroundColor: `${feature.hoverColor}20`, // light bg
                      }}
                    >
                      <div
                        className="w-6 h-6 transition-colors duration-300"
                        style={{
                          color: feature.hoverColor,
                        }}
                      >
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3
                        className="text-lg font-semibold transition-colors duration-300"
                        style={{
                          color: feature.hoverColor,
                        }}
                      >
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <style jsx>{`
                    .group:hover {
                      background-color: ${feature.hoverColor} !important;
                    }
                    .group:hover h3,
                    .group:hover div > div {
                      color: #fff !important;
                    }
                    .group:hover .flex-shrink-0 {
                      background-color: rgba(255, 255, 255, 0.2) !important;
                    }
                  `}</style>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Main Image */}
            <div
              className="relative overflow-hidden"
              style={{ height: "450px" }}
            >
              {/* <Image
                src="/assets/WhyImage.png"
                alt="Professional worker with hard hat holding tablet, representing quality job opportunities"
                width={505}
                height={550}
                className="w-full h-auto object-cover"
                priority
              /> */}
              <ParallaxImage images={imageList} duration={2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
