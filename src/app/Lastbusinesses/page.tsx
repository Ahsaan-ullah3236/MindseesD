'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const LastBusinessesSection = () => {
  return (
    <section className="bg-no-repeat bg-center spacing-secton max-w-7xl mx-auto mt-14 md:mt-25">
      {/* Centered Container */}
      <div className="w-full bg-[#002f46] rounded-tl-3xl rounded-tr-3xl p-8 md:pl-12 md:pr-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-16">
        
        {/* Right Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-xl md:text-4xl font-bold text-white">
            Ready to boost your business?
          </h2>
          <p className="text-lg text-white">
            Elevate your business with advanced technologies, expert insights, and unmatched support for a brighter future.
          </p>
          <Link href={"/contact-us"}>
          <button className="bg-[#00D280] cursor-pointer text-white px-6 py-4 mt-4 text-lg rounded-lg hover:bg-[#00b96a] transition duration-300">
            Schedule free consultant
          </button>
          </Link>

        </div>

        {/* Left Image */}
        <div className="relative">
          <Image
            src="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/707e3d37-8f7d-4a31-40cb-c827cd3b3e00/w=3840,q=75"
            alt="Success Case Study"
            width={400}
            height={644}
            className=" md:-mt-26" // Added negative margin to push the image up on larger screens
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default LastBusinessesSection;
