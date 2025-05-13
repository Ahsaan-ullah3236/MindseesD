"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import heroGif from "@/app/Herosection/image/Her0gif.gif"
import icon1 from "@/app/Herosection/image/icon1.svg"
import icon2 from "@/app/Herosection/image/icon2.svg"
import icon3 from "@/app/Herosection/image/icon3.svg"
import icon4 from "@/app/Herosection/image/icon4.svg"
import icon5 from "@/app/Herosection/image/icon5.svg"

import { ChevronRight } from 'lucide-react';
//  Outside the component
const words = [
  "Web Designing",
  "Web Development",
  "Mobile Development",
  "App Development",
  "SaaS-Based Website",
  "SEO & Marketing",
];
const marqueeLogo=[
  {icon: icon1},
  {icon: icon2},
  {icon: icon3},
  {icon: icon4},
  {icon: icon5},
]

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
    <div className="max-w-7xl mx-auto">
    <div className='spacing-secton pt-10 md:pt-18 pb-6'>
         <div className="grid grid-cols-1 md:grid-cols-3  gap-8 text-sm  ">
          <div className='col-span-2'>
            <div className="text-4xl font-bold mb-4 ">
                <span className="w-[100px] h-0 border-b-[45px] absolute border-b-[#d6f1ff]  border-r-[13px] border-r-transparent">Build</span>  
                <span className='relative ml-24'>Your Business through </span> 
            </div>
            <div className="text-[#00D280] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] xl:text-[58px] font-bold font-aleo leading-tight h-[66px] text-left">
              {displayText}
            </div>
            <p className="text-lg md:text-xl mt-2 md:mt-8 text-black">
            Empower your digital journey with our custom-built software solutions. <br/>See how we can transform your online presence and fuel long-term growth for your business.
        </p>
        
        <div className="flex  gap-1 pt-23">
          <Link href={"/contact-us"}>
          <button className="bg-[#00d280] cursor-pointer  text-white  font-medium text-sm md:text-lg py-4 px-4 rounded-md transition-colors duration-300">
            Book Consultation
          </button>
          </Link>
           {/* <Link href="/portfolio"> */}
          <button className="text-[#00d280]  font-bold py-3 px-8 text-sm md:text-xl transition-colors duration-300 inline-flex items-center justify-center gap-1">
            See Our Work <span className="text-md"><ChevronRight className='h-6 text-[#00d280]'/></span>
          </button>
          {/* </Link> */}

        </div>
          
            
          </div>
          
          <div>
          <div className='mt-4'>
       <Image
              src={heroGif}
              alt="Hero Illustration"
              width={500}
              height={600}
              className="flex justify-center mt-18"
            />
      </div>
    </div>
          
         </div>
         <div>
         </div>

    </div>
    </div>
 


      <div className="w-full mt-12 py-8 bg-[#002f46] overflow-hidden spacing-secton">
      <div className="flex animate-marquee whitespace-nowrap w-max">
      {[...marqueeLogo, ...marqueeLogo].map((logo, index) => (
        <Image
          key={index}
          src={logo.icon}
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
