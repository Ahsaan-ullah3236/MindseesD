import React from "react";
import Image from "next/image";
import LastBusinessesSection from "../Lastbusinesses/page";
import { ArrowUpRight } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import development from "@/app/blog/images/davelopment.svg"
import Design from "@/app/blog/images/Design.svg"
import Marketing from "@/app/blog/images/Marketing.svg"
import Finance from "@/app/blog/images/Finance.svg"
import Industries from "@/app/blog/images/Industries.svg"
import Business from "@/app/blog/images/Business.svg"


function Page() {
  const workName = [
    {
      title: 'Development',
      description: 'Read Development Articles Design Design Discover sophisticated design subjects, including thorough tutorials and extensive coverage of innovative design methods and technologies.',
      hoverTitle: 'Read Development Articles',
      image: development,
      link: 'blog/Design',
    },
    {
      title: 'Design',
      description: 'Read Development Articles Design Design Discover sophisticated design subjects, including thorough tutorials and extensive coverage of innovative design methods and technologies.',
      hoverTitle: 'Read Design Articles ',
      image: Design,
      link: 'blog/Design',
    },
    {
      title: 'Markiting ',
      description: 'Read Development Articles Design Design Discover sophisticated design subjects, including thorough tutorials and extensive coverage of .',
      hoverTitle: 'Read Markiting Articles',
      image: Marketing,
      link: 'blog/Design',
    },
    {
      title: 'Finance ',
      description: 'Read Development Articles Design Design Discover sophisticated design subjects, including thorough tutorials and extensive coverage of innovative design methods and technologies.',
      hoverTitle: 'Read Finance Articles',
      image: Finance,
      link: 'blog/Design',
    },
    {
      title: 'Industries',
      description: 'Read Development Articles Design Design Discover sophisticated design subjects, including thorough tutorials and extensive coverage of innovative design methods and technologies.',
      hoverTitle: 'Read Industries Articles',
      image: Industries,
      link: 'blog/Design',
    },
    {
      title: 'Business',
      description: 'Read Development Articles Design Design Discover sophisticated design subjects, including thorough tutorials and extensive coverage of innovative design methods and technologies.',
      hoverTitle: 'Read Business Articles',
      image: Business,
      link: 'blog/Design',
    },
  ];
  const UploadArticles = [
    { date: "24 March 2025", title: "Ai Revolution ", designation: "Digital Markiting", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/b6bb844e-f843-4c32-b4c7-b663c5d23800/w=640,q=75", description: "ADigital Marketing Trends for Startups and SMBs", subDescription: "The finance sector is changing as a result of artificial intelligence, which is opening up new possibilities for speed, accuracy, and customization. AI is helping financial services...", btn: "Continue Reading", link: "/blog/AiRevolution" },

    { date: "24 March 2025", title: "Ai Revolution ", designation: "Digital Markiting", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/b6bb844e-f843-4c32-b4c7-b663c5d23800/w=640,q=75", description: "ADigital Marketing Trends for Startups and SMBs", subDescription: "The finance sector is changing as a result of artificial intelligence, which is opening up new possibilities for speed, accuracy, and customization. AI is helping financial services...", btn: "Continue Reading", link: "/blog/AiRevolution" },


    { date: "24 March 2025", title: "Ai Revolution ", designation: "Digital Markiting", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/b6bb844e-f843-4c32-b4c7-b663c5d23800/w=640,q=75", description: "ADigital Marketing Trends for Startups and SMBs", subDescription: "The finance sector is changing as a result of artificial intelligence, which is opening up new possibilities for speed, accuracy, and customization. AI is helping financial services...", btn: "Continue Reading", link: "/blog/AiRevolution" },


    { date: "24 March 2025", title: "Ai Revolution ", designation: "Digital Markiting", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/b6bb844e-f843-4c32-b4c7-b663c5d23800/w=640,q=75", description: "ADigital Marketing Trends for Startups and SMBs", subDescription: "The finance sector is changing as a result of artificial intelligence, which is opening up new possibilities for speed, accuracy, and customization. AI is helping financial services...", btn: "Continue Reading", link: "/blog/AiRevolution" },


    { date: "24 March 2025", title: "Ai Revolution ", designation: "Digital Markiting", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/b6bb844e-f843-4c32-b4c7-b663c5d23800/w=640,q=75", description: "ADigital Marketing Trends for Startups and SMBs", subDescription: "The finance sector is changing as a result of artificial intelligence, which is opening up new possibilities for speed, accuracy, and customization. AI is helping financial services...", btn: "Continue Reading", link: "/blog/AiRevolution" },

    { date: "24 March 2025", title: "Ai Revolution ", designation: "Digital Markiting", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/b6bb844e-f843-4c32-b4c7-b663c5d23800/w=640,q=75", description: "ADigital Marketing Trends for Startups and SMBs", subDescription: "The finance sector is changing as a result of artificial intelligence, which is opening up new possibilities for speed, accuracy, and customization. AI is helping financial services...", btn: "Continue Reading", link: "/blog/AiRevolution" },
  ]
  const MostReadArticles = [
    { date: "24 March 2025", title: "Ai Revolution ", designation: "Digital Markiting", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/b6bb844e-f843-4c32-b4c7-b663c5d23800/w=640,q=75", description: "ADigital Marketing Trends for Startups and SMBs", subDescription: "The finance sector is changing as a result of artificial intelligence, which is opening up new possibilities for speed, accuracy, and customization. AI is helping financial services...", btn: "Continue Reading", link: "/blog/AiRevolution" },

    { date: "24 March 2025", title: "Ai Revolution ", designation: "Digital Markiting", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/b6bb844e-f843-4c32-b4c7-b663c5d23800/w=640,q=75", description: "ADigital Marketing Trends for Startups and SMBs", subDescription: "The finance sector is changing as a result of artificial intelligence, which is opening up new possibilities for speed, accuracy, and customization. AI is helping financial services...", btn: "Continue Reading", link: "/blog/AiRevolution" },

    { date: "24 March 2025", title: "Ai Revolution ", designation: "Digital Markiting", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/b6bb844e-f843-4c32-b4c7-b663c5d23800/w=640,q=75", description: "ADigital Marketing Trends for Startups and SMBs", subDescription: "The finance sector is changing as a result of artificial intelligence, which is opening up new possibilities for speed, accuracy, and customization. AI is helping financial services...", btn: "Continue Reading", link: "/blog/AiRevolution" },
  ]
  return (
    <>
      <div className="relative w-full py-30 bg-[#003252]  overflow-hidden">
        {/* <Image
          src={image}
          alt="Blog illustration"
          fill
          className="object-cover"
        /> */}
        <div className=" bg-blue/2000 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            MindSees Blogs
          </h1>
          <p className="text-gray-200 mb-6 text-base sm:text-lg md:text-xl max-w-3xl">
            The MindSees Blog is the go-to hub for developers, designers, executives, and entrepreneurs—featuring the latest tech updates, practical tutorials, freelancer tools, and valuable management insights.
          </p>

          <div className="search-bar flex flex-col sm:flex-row w-full max-w-md mt-8 sm:mt-12 gap-2 sm:gap-0">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow px-4 sm:px-8 py-2 sm:py-1 bg-white text-gray-500 text-base sm:text-lg rounded-md sm:rounded-l-md sm:rounded-r-none border border-gray-300 focus:outline-none"
            />
            <button className="bg-[#00d280] text-white px-4 sm:px-4 py-3 sm:py-4 rounded-md sm:rounded-r-md sm:rounded-l-none cursor-pointer ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={3} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="spacing-secton grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 py-18 gap-5 ">

        {workName?.map((item, i) => (
          <div key={i}>
            <div className="bg-[#d6f1ff] h-full px-9 pt-9 pb-9 group cursor-pointer">
              <Image src={item?.image} width={50} height={50} alt="" className="mt-2" />
              <h2 className="text-2xl text-[#023047] font-bold mt-5">{item?.title}</h2>
              <p className="text-[#070707] mt-5 group-hover:hidden">
                {item?.description}
              </p>
              <Link href={item?.link} >
                <p className="text-[#00d280] text-[18px] font-bold mt-5 flex hidden group-hover:flex">
                  {item?.hoverTitle} <ArrowRight className="mt-[2px] ml-1" />
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-22 spacing-secton bg-[linear-gradient(90deg,#055c88_0%,#01131c_100%)] py-10">
        <div className="pr-3 sm:pr-0 ">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white">
            High-quality articles, delivered every week.
          </h1>
          <div className=" flex  max-w-md mt-8 sm:mt-12">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow px-4 sm:px-8 py-2 sm:py-3 bg-white text-gray-500 text-base sm:text-lg md:text-xl rounded-l-md sm:rounded-r-none border border-gray-300 focus:outline-none"
            />
            <button className="bg-[#00d280] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-r-md sm:rounded-l-none cursor-pointer hover:bg-green-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </button>
          </div>
          <p className="text-md mt-3 text-white sm:text-base">
            By entering your email, you are agreeing to our
            <Link href="/privacy-policy" className="underline"> privacy policies</Link>
          </p>
        </div>

        <div className="flex justify-center md:justify-end lg:pr-28 mt-12 md:mt-0">
          <Image src="https://kavelogics.com/blogs/newsletter-logo.svg" alt="img"
            width={230}
            height={200} />
        </div>
      </div>

      <div className="spacing-secton mt-34">
        <h1 className=" font-bold text-black text-center text-[1.75rem] md:text-[2rem] lg:text-[2.75rem] leading-[136%]">Recently Uploaded Articles</h1>
        <div className="my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {UploadArticles?.map((item, i) => (
            <div
              key={i}
              className="fourth rounded-[9px] shadow-lg group hover:shadow-xl transition-all duration-300"
            >
              <div className="image-section relative w-full overflow-hidden">
                <Image
                  src={item?.image}
                  alt="img"
                  height={500}
                  width={500}
                  className="rounded-t-lg h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <p className="absolute bottom-3 ml-2 left-2 text-white bg-white/10 bg-opacity-60 px-2 py-1 text-[13px] rounded-[24px]">
                  Date: {item?.date}
                </p>
              </div>
              <div className="pl-5 pr-2">
                <div className="flex items-center space-x-2 mt-4">
                  <Link href="/blog/Design">
                    <span className="text-[14px] font-bold text-gray-800 cursor-pointer hover:underline">
                      {item?.title}
                    </span>
                  </Link>
                  <span className="text-[#4b5577] text-base">&gt;</span>
                  <Link href="/blog/Design">
                  <span className="text-[14px] font-bold text-gray-400 cursor-pointer hover:underline">
                    {item?.designation}
                  </span>
                  </Link>
                </div>
                <div className="content">
                    <Link href="/blog/AiRevolution">
                  <h1 className="text-lg md:text-xl font-bold text-gray-900 cursor-pointer mt-2 transition-colors duration-300 group-hover:text-[#00d280]">
                    {item?.description}
                  </h1>
                  </Link>
                  <p className="text-gray-600 text-sm line-clamp-3 md:text-[14px] mt-2 mb-4 leading-relaxed">
                    {item?.subDescription}
                  </p>
                </div>
              </div>
              <a
                href={item?.link}
                className="flex justify-end px-4 pt-6 hover:underline text-[#00d280] cursor-pointer mb-4 block"
              >
                {item?.btn}
                <span>
                  <ArrowUpRight className="h-5 w-4 ml-3" />
                </span>
              </a>
            </div>
          ))}

        </div>
      </div>

      <div className="spacing-secton mt-34">
        <h1 className=" font-bold text-black text-center text-[1.75rem] md:text-[2rem] lg:text-[2.75rem] leading-[136%]">Most Read Articles</h1>
        <div className="mt-16 mb-34 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {MostReadArticles?.map((item, i) => (
            <div
              key={i}
              className="fourth rounded-[9px] shadow-lg group hover:shadow-xl transition-all duration-300"
            >
              <div className="image-section relative w-full overflow-hidden">
                <Image
                  src={item?.image}
                  alt="img"
                  height={500}
                  width={500}
                  className="rounded-t-lg h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <p className="absolute bottom-3 ml-2 left-2 text-white bg-white/10 bg-opacity-60 px-2 py-1 text-[13px] rounded-[24px]">
                  Date: {item?.date}
                </p>
              </div>
              <div className="pl-5 pr-2">
                <div className="flex items-center space-x-2 mt-4">
                   <Link href="/blog/Design">
                  <span className="text-[14px] font-bold  text-gray-800 cursor-pointer hover:underline">
                    {item?.title}
                  </span>
                  </Link>
                  <span className="text-[#4b5577] text-base">&gt;</span>
                  <Link href="/blog/Design"><span className="text-[14px] font-bold text-gray-400 cursor-pointer hover:underline">
                    {item?.designation}
                  </span>
                  </Link>

                </div>
                <div className="content">
                    <Link href="/blog/AiRevolution">
                  <h1 className="text-lg md:text-xl font-bold text-gray-900 cursor-pointer mt-2 transition-colors duration-300 group-hover:text-[#00d280]">
                    {item?.description}
                  </h1>
                  </Link>
                  <p className="text-gray-600 text-sm line-clamp-3 md:text-[14px] mt-2 mb-4 leading-relaxed">
                    {item?.subDescription}
                  </p>
                </div>
              </div>
              <a
                href={item?.link}
                className="flex justify-end px-4 pt-6 hover:underline text-[#00d280] cursor-pointer mb-4 block"
              >
                {item?.btn}
                <span>
                  <ArrowUpRight className="h-5 w-4 ml-3" />
                </span>
              </a>
            </div>
          ))}

        </div>
      </div>

      <LastBusinessesSection />

    </>
  );
}


export default Page;
