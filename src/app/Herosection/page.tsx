"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import { ChevronRight } from 'lucide-react';
// ✅ Outside the component
const words = [
  "Web Designing",
  "Web Development",
  "Mobile Development",
  "App Development",
  "SaaS-Based Website",
  "SEO & Marketing",
];

function Herosection() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (letterIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentWord[letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setLetterIndex(0);
        setDisplayText("");
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1200);
      return () => clearTimeout(pause);
    }
  }, [letterIndex, wordIndex]);

  return (
    <>
    <div className='spacing-secton pt-10 md:pt-18 pb-6'>
         <div className="grid grid-cols-1 md:grid-cols-3  gap-8 text-sm  ">
          <div className='col-span-2'>
            <div className="text-4xl font-semibold mb-4 ">
                <span className="w-[100px] h-0 border-b-[45px] absolute border-b-[#d6f1ff] border-l-transparent border-r-[13px] border-r-transparent">Build</span>  
                <span className='relative ml-24'>Your Business through </span> 
            </div>
            <div className="text-[#00D280] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] xl:text-[58px] font-bold font-aleo leading-tight h-[66px] text-left">
              {displayText}
            </div>
            <p className="text-lg md:text-xl mt-2 md:mt-8 text-black">
          Unlock your digital potential with our tailored solutions. Discover <br/>how we can elevate your online presence and drive lasting success.
        </p>
        
       
        
        <div className="flex  gap-1 pt-23">
          <button className="bg-[#00d280] cursor-pointer hover:bg-[#433874] text-white  font-medium text-sm md:text-lg py-4 px-4 rounded-md transition-colors duration-300">
            Book Consultation
          </button>
          <button className="text-[#00d280] cursor-pointer font-bold py-3 px-8 text-sm md:text-xl transition-colors duration-300 inline-flex items-center justify-center gap-1">
            See Our Work <span className="text-md"><ChevronRight className='h-6 text-[#00d280]'/></span>
          </button>
        </div>
          
            
          </div>
          
          <div>
          <div className='-mt-4'>
       <Image
              src="/image.png"
              alt="Hero Illustration"
              width={400}
              height={400}
              className="h-[450px] object-cover -mt-40"
            />
      </div>
    </div>
          
         </div>
         <div>
         </div>

    </div>
 

      {/* Marquee Section */}
      <div className="w-full mt-12 py-8 bg-[#002f46] overflow-hidden spacing-secton">
        <div className="marquee flex items-center whitespace-nowrap animate-marquee">
          {["payme", "smplcards", "appreciate", "opstion"].map((logo, index) => (
            <Image
              key={index}
              src={`https://kavelogics.com/landing/clients/${logo}.svg`}
              alt={`Logo ${index + 1}`}
              width={100}
              height={100}
              className="w-24 sm:w-28 mx-8 sm:mx-16"
            />
          ))}
          {["payme", "smplcards", "appreciate", "opstion"].map((logo, index) => (
            <Image
              key={`repeat-${index}`}
              src={`https://kavelogics.com/landing/clients/${logo}.svg`}
              alt={`Logo ${index + 1}`}
              width={100}
              height={100}
              className="w-24 sm:w-28 mx-8 sm:mx-16"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Herosection;
