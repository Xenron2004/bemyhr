"use client";
import React, { useRef, useState, useEffect } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

// const countries = [
//   {
//     lat: 25.1757,
//     lng: 56.3513,
//     name: "UAE",
//     address: "MMFS Tower, Al Mina Rd, Fujairah",
//     flag: "/images/flags/uae.svg",
//   },
//   {
//     lat: 25.2861,
//     lng: 51.5348,
//     name: "Qatar",
//     address: "Doha, Qatar",
//     flag: "/images/flags/qatar.svg",
//   },
//   {
//     lat: 24.7743,
//     lng: 46.7386,
//     name: "Saudi Arabia",
//     address: "Riyadh, Saudi Arabia",
//     flag: "/images/flags/saudi-arabia.svg",
//   },
//   {
//     lat: 23.588,
//     lng: 58.4059,
//     name: "Oman",
//     address: "Sohar, Sultanate of Oman",
//     flag: "/images/flags/oman.svg",
//   },
//   {
//     lat: 26.2154,
//     lng: 50.583,
//     name: "Bahrain",
//     address: "Manama, Bahrain",
//     flag: "/images/flags/bahrain.svg",
//   },
//   {
//     lat: 29.3786,
//     lng: 47.9903,
//     name: "Kuwait",
//     address: "Kuwait City, Kuwait",
//     flag: "/images/flags/kuwait.svg",
//   },
//   {
//     lat: 1.2897,
//     lng: 103.8501,
//     name: "Singapore",
//     address: "Singapore",
//     flag: "/images/flags/singapore.svg",
//   },
//   {
//     lat: 53.0,
//     lng: 9.0,
//     name: "Europe",
//     address: "Europe (Central)",
//     flag: "/images/flags/europe.svg",
//   },
// ];

// const countries = [
//   {
//     lat: 25.1757,
//     lng: 56.3513,
//     name: "UAE",
//     address: "MMFS Tower, Al Mina Rd, Fujairah",
//     flag: "/assets/Flag1.png",
//   },
//   {
//     lat: 25.2861,
//     lng: 51.5348,
//     name: "Qatar",
//     address: "Doha, Qatar",
//     flag: "/assets/Flag2.png",
//   },
//   {
//     lat: 24.7743,
//     lng: 46.7386,
//     name: "Saudi Arabia",
//     address: "Riyadh, Saudi Arabia",
//     flag: "/assets/Flag4.png",
//   },
//   {
//     lat: 23.588,
//     lng: 58.4059,
//     name: "Oman",
//     address: "Sohar, Sultanate of Oman",
//     flag: "/assets/Flag2.png",
//   },
//   {
//     lat: 26.2154,
//     lng: 50.583,
//     name: "Bahrain",
//     address: "Manama, Bahrain",
//     flag: "/assets/Flag3.png",
//   },
//   {
//     lat: 29.3786,
//     lng: 47.9903,
//     name: "Kuwait",
//     address: "Kuwait City, Kuwait",
//     flag: "/assets/Flag5.png"
//   },
//   {
//     lat: 1.2897,
//     lng: 103.8501,
//     name: "Singapore",
//     address: "Singapore",
//     flag: "/assets/Flag6.png",
//   },
//   {
//     lat: 53.0,
//     lng: 9.0,
//     name: "Europe",
//     address: "Europe (Central)",
//     flag: "/assets/Flag7.png",
//   },
// ];

const markerIcon = <FaMapMarkerAlt className="text-[#F88311] w-5 h-5" />;
const countries = [
  // Middle East
  {
    lat: 24.7743,
    lng: 46.7386,
    name: "Saudi Arabia",
    address: "Riyadh, Saudi Arabia",
    flag: markerIcon,
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    name: "Dubai",
    address: "Dubai, UAE",
    flag: <FaMapMarkerAlt className="text-[#F88311] w-5 h-5" />,
  },

  // Asia
  {
    lat: 20.5937,
    lng: 78.9629,
    name: "India",
    address: "India",
    flag: <FaMapMarkerAlt className="text-[#F88311] w-5 h-5" />,
  },
  {
    lat: 3.1409,
    lng: 101.6932,
    name: "Malaysia",
    address: "Kuala Lumpur, Malaysia",
    flag: <FaMapMarkerAlt className="text-[#F88311] w-5 h-5" />,
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    name: "Singapore",
    address: "Singapore",
    flag: <FaMapMarkerAlt className="text-[#F88311] w-5 h-5" />,
  },

  // Europe
  {
    lat: 40.1772,
    lng: 44.5035,
    name: "Armenia",
    address: "Yerevan, Armenia",
    flag: <FaMapMarkerAlt className="text-[#F88311] w-5 h-5" />,
  },
  {
    lat: 54.6892,
    lng: 25.2798,
    name: "Lithuania",
    address: "Vilnius, Lithuania",
    flag: <FaMapMarkerAlt className="text-[#F88311] w-5 h-5" />,
  },
  {
    lat: 44.4323,
    lng: 26.1063,
    name: "Romania",
    address: "Bucharest, Romania",
    flag: <FaMapMarkerAlt className="text-[#F88311] w-5 h-5" />,
  },
  {
    lat: 41.6938,
    lng: 44.8015,
    name: "Georgia",
    address: "Tbilisi, Georgia",
    flag: <FaMapMarkerAlt className="text-[#F88311] w-5 h-5" />,
  },
  {
    lat: 51.2298,
    lng: 21.0118,
    name: "Poland",
    address: "Warsaw, Poland",
    flag: <FaMapMarkerAlt className="text-[#F88311] w-5 h-5" />,
  },
  {
    lat: 35.8997,
    lng: 14.5147,
    name: "Malta",
    address: "Valletta, Malta",
    flag: <FaMapMarkerAlt className="text-[#F88311] w-5 h-5" />,
  },
  {
    lat: 55.3781,
    lng: -3.436,
    name: "United Kingdom",
    address: "United Kingdom",
    flag: <FaMapMarkerAlt className="text-[#F88311] w-5 h-5" />,
  },

  // Americas
  {
    lat: 37.0902,
    lng: -95.7129,
    name: "USA",
    address: "United States of America",
    flag: <FaMapMarkerAlt className="text-[#F88311] w-5 h-5" />,
  },
  {
    lat: 56.1304,
    lng: -106.3468,
    name: "Canada",
    address: "Canada",
    flag: <FaMapMarkerAlt className="text-[#F88311] w-5 h-5" />,
  },
];

const GlobeComponent = () => {
  const globeEl = useRef(null);
  const globeContainerRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (!globeEl.current) return;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 1;
    globeEl.current.pointOfView({ altitude: 2.5 }, 1000);
    globeEl.current.controls().minDistance = 240;
    globeEl.current.controls().maxDistance = 500;
  }, []);

  const handleHover = (c, evt) => {
    if (!globeContainerRef.current) return;
    const rect = evt.target.getBoundingClientRect();
    const base = globeContainerRef.current.getBoundingClientRect();
    setTooltipPos({
      x: rect.left + rect.width / 2 - base.left,
      y: rect.top - base.top - 5,
    });
    setHovered(c);
    setShowTooltip(true);
    globeEl.current.controls().autoRotate = false;
  };
  const clearHover = () => {
    setShowTooltip(false);
    setHovered(null);
    globeEl.current.controls().autoRotate = true;
  };

  //   const renderFlag = (d) => {
  //     const div = document.createElement("div");
  //     Object.assign(div.style, {
  //       position: "absolute",
  //       width: "28px",
  //       height: "20px",
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "center",
  //       cursor: "pointer",
  //       zIndex: "100",
  //     });
  //     const img = document.createElement("img");
  //     img.src = d.flag;
  //     img.alt = d.name;
  //     img.style.width = "24px";
  //     img.style.height = "16px";
  //     img.style.filter = "drop-shadow(0 0 2px rgba(0,0,0,0.5))";
  //     div.appendChild(img);
  //     div.addEventListener("mouseenter", (e) => handleHover(d, e));
  //     div.addEventListener("mouseleave", clearHover);
  //     return div;
  //   };

  const renderFlag = (d) => {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.width = "28px";
    div.style.height = "28px";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.pointerEvents = "auto";
    div.style.cursor = "pointer";
    div.style.zIndex = "100";

    div.innerHTML = `
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F97316" viewBox="0 0 384 512">
  <path d="M168 0C75.2 0 0 75.2 0 168c0 87.3 135.7 228.5 157.3 250.8c6.2 6.5 16.2 6.5 22.5 0C216.3 396.5 352 255.3 352 168C352 75.2 276.8 0 184 0zM184 232c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64S219.3 232 184 232z"/>
</svg>

  `;

    div.addEventListener("mouseenter", (e) => handleHover(d, e));
    div.addEventListener("mouseleave", clearHover);

    return div;
  };

  return (
    <>
      <section
        onMouseLeave={clearHover}
        className="relative mt-[-100px] flex flex-col-reverse md:flex-row justify-between items-center bg-[#0d0d12] w-full px-6 md:px-[100px] overflow-hidden"
      >
        {/* content */}
        <motion.div
          className="flex flex-col justify-between w-full md:w-[587px] text-white mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl leading-[150%] max-w-[500px] font-oswald text-[#F36224] font-bold mb-8">
            Get hired globally through our platform
          </h2>
          <p className="text-[17px] leading-[150%] tracking-normal mb-10">
            No matter where you are, our placements open doors across continents. When you’re recruited through us, you gain access to career opportunities in top destinations worldwide. Let your journey to a global career begin here.
          </p>
          <div className="max-w-2xl">
            <Link href="/contact" passHref>
              <button className="px-6 py-3 bg-[#0146B1] text-white  font-medium hover:bg-[#F88311] rounded-[8px] hover:text-white transition-all duration-300">
                CONTACT US
              </button>
            </Link>
          </div>
        </motion.div>

        <div
          ref={globeContainerRef}
          className="relative globe-container w-[628px] h-[557px]"
        >
          {typeof window !== "undefined" && (
            <>
              <Globe
                ref={globeEl}
                width={628}
                height={557}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                backgroundColor="rgba(0,0,0,0)"
                htmlElementsData={countries}
                htmlLat="lat"
                htmlLng="lng"
                htmlElement={renderFlag}
              />
              {showTooltip && hovered && (
                <div
                  style={{
                    left: tooltipPos.x,
                    top: tooltipPos.y,
                    transform: "translateX(-50%) translateY(-100%)",
                  }}
                //   className="absolute bg-black bg-opacity-90 ..."
                >
                  {/* <h3 className="text-sm font-bold text-[#F36224]">
                    {hovered.name}
                  </h3>
                  <p className="text-[10px]">{hovered.address}</p> */}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default GlobeComponent;
