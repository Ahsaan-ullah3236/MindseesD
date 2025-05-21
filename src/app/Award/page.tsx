'use client';
import React from 'react';
import Image from 'next/image';
import brandimage1 from "@/app/Award/image/ brand img 6 (1).svg"
import brandimage2 from "@/app/Award/image/ brand img 6 (2).svg"
import brandimage3 from "@/app/Award/image/ brand img 6 (3).svg"
import brandimage4 from "@/app/Award/image/ brand img 6 (4).svg"
import brandimage5 from "@/app/Award/image/ brand img 6 (5).svg"
import brandimage6 from "@/app/Award/image/ brand img 6 (6).svg"

const AwardsSection = () => {
  const images = [
   {Image:brandimage1},
   {Image:brandimage2},
   {Image:brandimage3},
   {Image:brandimage4},
   {Image:brandimage5},
   {Image:brandimage6},
  ];

  return (
    <div className=' mx-auto spacing-secton'>

    <div className="w-full bg-[#E6F4FF]  mt-5 md:mt-28 py-16">
      <div className="max-w-7xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-semibold sm:text-bold text-[#002f46] mb-18">
          Global Awards & Recognitions
        </h2>

        <div className="flex flex-wrap justify-around items-center gap-6 spacing-secton">
          {images.map((item, idx) => (
            <div key={idx} className="w-1/4 sm:w-1/6 md:w-1/6 lg:w-1/8 xl:w-1/12 transition-transform duration-300 hover:scale-105">
              <Image
                src={item?.Image}
                alt={`Award ${idx + 1}`}
                width={180} 
                height={120} 
                className="w-20 h-20"
                unoptimized 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>

  );
};

export default AwardsSection;
