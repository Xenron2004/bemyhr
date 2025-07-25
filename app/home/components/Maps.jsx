'use client';

import Image from 'next/image';

export default function Maps() {
  return (
    <section className="w-full bg-white  px-4">
      <div className="max-w-[1280px] w-11/12 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-[36px] font-bold text-gray-900 mb-6 leading-tight">
            Sail with us from anywhere
            <br />
            in the world
          </h2>
          <p className="text-[17px] text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Our opportunities know no borders. Whether you're in Asia, Europe, Africa, or the Americas — our partner cruise lines 
            hire worldwide. Explore the map to find hiring hubs and offices near you, and take the first step toward an exciting 
            career at sea.
          </p>
        </div>

        {/* Map Section */}
        <div className="flex justify-center">
       
            <Image
              src="/assets/WorldMap.png"
              alt="World map showing cruise line hiring locations across continents"
              width={1128}
              height={570}
              className="w-full h-full  object-contain"
              priority
            />
          
        </div>
      </div>
    </section>
  );
}