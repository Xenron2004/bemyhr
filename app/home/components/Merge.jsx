import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";

const Merge = () => {
  return (

    <div className=" flex flex-col gap-[48px] lg:gap-[120px] h-full w-full">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full max-h-[650px] md:min-h-screen h-full object-cover "
      >
        <source src="/assets/HeroesVid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        className="absolute top-0 left-0 w-full max-h-[650px] md:min-h-screen h-full  bg-opacity-15 z-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      ></div>

      {/* Content */}

        <Navbar />
        <Hero />

    </div>
  );
};

export default Merge;

// "use client";

// import React, { useState, useRef } from "react";
// import Navbar from "@/components/Navbar";
// import Hero from "./Hero";

// const Merge = () => {
//   // Step 1: Define the video sources
//   const videoSources = [
//     "/assets/HeroVideo.mp4",
//     "/assets/HeroTwo.mp4",
//     "/assets/HeroThree.mp4",
//   ];

//   // Step 2: State to keep track of which video is playing
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const videoRef = useRef(null);

//   // Step 3: Handle when a video ends
//   const handleVideoEnd = () => {
//     const nextIndex = (currentVideoIndex + 1) % videoSources.length; // Loop to first after last
//     setCurrentVideoIndex(nextIndex);
//   };

//   return (
//     <div className="relative flex flex-col gap-[48px] lg:gap-[120px] h-full w-full">
//       {/* Video Background */}
//       <video
//         ref={videoRef}
//         autoPlay
//         loop={false}
//         muted
//         onEnded={handleVideoEnd}
//         className="absolute top-0 left-0 w-full max-h-[768px] h-full object-cover"
//       >
//         <source src={videoSources[currentVideoIndex]} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay */}
//       <div
//         className="absolute top-0 left-0 w-full max-h-[768px] h-full bg-opacity-15 z-3"
//         style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
//       ></div>

//       {/* Content */}
//       <Navbar />
//       <Hero />
//     </div>
//   );
// };

// export default Merge;

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Hero from "./Hero";

// const Merge = () => {
//   const videoSources = [
//     "/assets/HeroesVid.mp4",
//     // "/assets/HeroTwo.mp4",
//     // "/assets/HeroThree.mp4",
//   ];

//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [isFading, setIsFading] = useState(false);
//   const videoRef = useRef(null);

//   const handleVideoEnd = () => {
//     setIsFading(true); // Start fade out
//     setTimeout(() => {
//       setCurrentVideoIndex((prevIndex) =>
//         prevIndex + 1 < videoSources.length ? prevIndex + 1 : 0
//       );
//       setIsFading(false); // Fade in new video
//     }, 500); // Match this to CSS transition duration
//   };

//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       video.load();
//       video.play().catch((err) => {
//         console.error("Autoplay failed:", err);
//       });
//     }
//   }, [currentVideoIndex]);

//   return (
//     <div className="relative flex flex-col gap-[48px] lg:gap-[120px] h-full w-full">
//       {/* Video Background */}
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         loop={false}
//         onEnded={handleVideoEnd}
//         className={`absolute top-0 left-0 w-full min-h-screen  h-full object-cover transition-opacity duration-500 ${
//           isFading ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         <source src={videoSources[currentVideoIndex]} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay */}
//       <div
//         className="absolute top-0 left-0 w-full min-h-screen h-full bg-opacity-15 z-3"
//         style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
//       ></div>

//       {/* Content */}
//       <Navbar />
//       <Hero />
//     </div>
//   );
// };

// export default Merge;
