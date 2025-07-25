"use client";
import React from "react";
import Image from "next/image";
import goodWillLogo from "../assets/goodWillLogo.jpg";
const OurParteners = () => {
    return (
    <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Training Parteners
        </h1>
        <div className="flex justify-center pt-10">     
            <Image
            src={goodWillLogo} 
            alt="Our Training Parteners"
            width={400}
            height={200}
            className="object-cover"
            priority
            />
        </div>
      </div>
    )
}
export default OurParteners;
