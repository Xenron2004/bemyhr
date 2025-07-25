"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Three from "../assets/Three.png"; // Adjust the path as necessary

const headingText = "Set Sail Towards a Dream Career";
const words = headingText.split(" ");

const handleClick = (e) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
};

const Hero = () => {
  return (
    <div id="hero" className=" flex  items-center   justify-center  px-5">
      <div className="  mt-[80px] md:mt-[80px] lg:mt-[80px]  relative  z-10 flex flex-col gap-9 text-gray-950 max-w-[1280px]  w-full">
        <div className="flex flex-col gap-5 md:gap-5  max-w-[700px] w-full items-start justify-center ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.2, // Delay so it comes after heading
              ease: "easeOut",
            }}
            className="text-[40px] text-start  font-ProximaNova md:text-[54px] lg:text-[64px] font-semibold leading-[48px] md:leading-[72px] text-white flex flex-wrap"
          >
            Set Sail Towards a Dream Career
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.2, // Delay so it comes after heading
              ease: "easeOut",
            }}
            className="text-[18px] font-inter  text-white font-normal max-w-[460px] tracking-wider w-full"
          >
            Explore exciting offshore opportunities with global cruise lines
            through Goodwill Institutes.
          </motion.div>
          <div className="flex items-start justify-start flex-col gap-4">
            <Image alt="Three People " width={86} height={32} src={Three} />
            <p className=" text-[18px] font-inter  text-white font-normal max-w-[350px] tracking-wide w-full">
              Trusted by over 12800+Aspirants for Cruise and Offshore Job
              Placements
            </p>
          </div>

          <div className="flex items-start  justify-between flex-col max-w-[500px]  gap-7  md:flex-row ">
            <Link onClick={handleClick} href="#jobs">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.6, // Delay so it comes after heading
                  ease: "easeOut",
                }}
                className=" bg-[#0146B1] rounded-[8px] font-medium flex items-center justify-center  text-white text-center text-[18px] tracking-wider py-3 px-10 "
              >
                Find a Job
              </motion.div>
            </Link>
            {/* <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.6, // Delay so it comes after heading
                ease: "easeOut",
              }}
              className=" border-white border-2 rounded-[8px] font-medium flex items-center justify-center  text-white text-[18px] tracking-wider  py-3 px-6 w-full  "
            >
             Find a Job 
            </motion.button> */}

            {/* <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.6, // Delay so it comes after heading
                ease: "easeOut",
              }}
              className=" border-white border-2 rounded-[8px] font-medium flex items-center justify-center  text-white text-[18px] tracking-wider  py-3 px-9   "
            >
              Apply Now
            </motion.button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
