// main navbar
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/assets/BeLogoss.png"; // Adjust the path as necessary
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import WhatsAppButton from "./WhatsAppButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showSolidBackground, setShowSolidBackground] = useState(false); // new state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      // Set navbar visibility
      if (currentScroll > lastScrollTop && currentScroll > 100) {
        setIsNavbarVisible(false); // scrolling down
      } else {
        setIsNavbarVisible(true); // scrolling up
      }

      // Show solid background after certain scroll threshold
      if (currentScroll > 50) {
        setShowSolidBackground(true);
      } else {
        setShowSolidBackground(false);
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <div className="w-full flex items-center justify-center">
      <div
        className={`w-full flex h-[84px] items-center justify-center px-4 sm:px-6 lg:px-8 fixed top-0 z-50 transition-transform duration-300 ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-[84px]"
        } ${showSolidBackground ? "bg-white bg-wh" : "bg-white shadow-2xl "}`}
      >
        <div className="w-full max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center mt-2">
            <Image
              src={logo}
              width={270}
              height={160}
              alt="Digimark Solutions Logo"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex text-white items-center justify-between gap-8">
            <Link
              onClick={handleClick}
              href="#jobs"
              className="font-medium text-[18px] tracking-wider  transition hover:text-primary duration-300 ease-in-out text-[#212b36] "
            >
              Find a Job
            </Link>
            <Link
              onClick={handleClick}
              href="#about"
              className="font-medium text-[18px] tracking-wider transition hover:text-primary duration-300 ease-in-out text-[#212b36] "
            >
              About Us
            </Link>
            <Link
              onClick={handleClick}
              href="#whyus"
              className="font-medium text-[18px] transition tracking-wider   hover:text-primary duration-300 ease-in-out text-[#212b36]  "
            >
              Why Us
            </Link>
            <Link
              onClick={handleClick}
              href="#reviews"
              className="font-medium text-[18px] font-poppins tracking-wider transition hover:text-primary duration-300 ease-in-out text-[#212b36] "
            >
              Testimonials
            </Link>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            <WhatsAppButton />
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex justify-between items-center">
            <button onClick={toggleMenu} className="text-[#212b36]">
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:hidden absolute top-0 left-0 right-0 bottom-0 bg-white flex-col items-start justify-start gap-8 transition-all h-screen ease-in-out duration-500`}
        >
          <div className="flex absolute w-full top-0 p-6 justify-between items-center">
            <Link href="/home" className="flex items-center">
              <Image
                src={logo}
                width={220}
                height={140}
                alt="Reevij Solutions Logo"
              />
            </Link>
            <button onClick={toggleMenu} className="text-[#212b36]">
              <IoCloseSharp size={24} />
            </button>
          </div>

          <div
            className="flex items-start p-6 top-[100px] flex-col w-full h-auto gap-6 justify-start relative"
            onClick={toggleMenu}
          >
            <Link
              href="#hero"
              className="text-[#212b36] font-poppins uppercase font-medium text-[17px]"
            >
              Home
            </Link>
            <Link
              href="#services"
              onClick={handleClick}
              className="text-[#212b36]  font-poppins uppercase font-medium text-[17px]"
            >
              About Us
            </Link>
            <Link
              href="#portfolio"
              className="text-[#212b36]  font-poppins uppercase font-medium text-[17px]"
            >
              Why Us
            </Link>
            <Link
              href="#about"
              className="text-[#212b36]  font-poppins uppercase font-medium text-[17px]"
            >
              Testimonials
            </Link>

            <div>
              <WhatsAppButton/>
            </div>
            
          </div>

          {/* <
              href="https://wa.me/919594465739"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button  className="font-poppins cursor-pointer bg-[#0146B1] font-medium flex items-center justify-center rounded-[8px] text-white text-[16px]  w-full py-4 px-7">
                Contact Us
              </button>
            </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
