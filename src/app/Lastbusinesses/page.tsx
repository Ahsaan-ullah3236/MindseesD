'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import callToAction from "@/app/Lastbusinesses/image/calltoaction.svg"
import background from "@/app/Lastbusinesses/image/background.svg"

const LastBusinessesSection = () => {
  return (
    <section className="bg-no-repeat bg-center spacing-secton max-w-7xl mx-auto mt-14 md:mt-25">
      {/* Centered Container */}
      <div className="w-full rounded-tl-3xl rounded-tr-3xl p-8 md:pl-12 md:pr-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-16"  style={{
        backgroundImage: `url(${background.src})`,
      }}>
        
        {/* Right Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-xl md:text-4xl font-bold text-white">
          Ready to take your business to the next level<span className='text-[#00b96a] ml-1 '>?</span>
          </h2>
          <p className="text-lg text-white">
          Transform your business with cutting-edge technologies, expert guidance, and unparalleled support for a brighter tomorrow.
          </p>
          <Link href={"/contact-us"}>
          <button className="bg-[#00D280] cursor-pointer text-white px-6 py-4 mt-4 text-lg font-medium rounded-lg hover:bg-[#00b96a] transition duration-300">
            Schedule Free Consultant
          </button>
          </Link>

        </div>

        {/* Left Image */}
        <div className="relative">
          <Image
            src={callToAction}
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
