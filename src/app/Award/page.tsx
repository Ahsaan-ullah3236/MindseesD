'use client';
import React from 'react';
import Image from 'next/image';

const AwardsSection = () => {
  const images = [
    'brands1.f2880f28.png',
    'brand2.70e70a6c.png',
    'brand6.0207e26d.png',
    'brand4.491c26a3.png',
    'brand7.18f88ef7.png',
    'brand5.0149455e.png',
  ];

  return (
    <div className='max-w-7xl mx-auto spacing-secton'>

    <div className="w-full bg-[#E6F4FF]  mt-5 md:mt-28 py-16">
      <div className="max-w-7xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-xl md:text-4xl font-bold text-[#002f46] mb-18">
          Global Awards & Recognitions
        </h2>

        <div className="flex flex-wrap justify-around items-center gap-6 spacing-secton">
          {images.map((img, idx) => (
            <div key={idx} className="w-1/4 sm:w-1/6 md:w-1/6 lg:w-1/8 xl:w-1/12 transition-transform duration-300 hover:scale-105">
              <Image
                src={`https://kavelogics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F${img}&w=640&q=75`}
                alt={`Award ${idx + 1}`}
                width={180} 
                height={120} 
                className="w-full h-auto"
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
