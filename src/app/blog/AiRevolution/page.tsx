"use client"
import React, {useState} from 'react'
import Image from "next/image"
import image from './image.png'
import image2 from "./image2.png"
// import Lastbusinesses from '@/app/Lastbusinesses/page'
import LastBusinessesSection from '@/app/Lastbusinesses/page'
import { ChevronRight } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link'

const AiRevolution =() =>{

  const [selectedCategory, setSelectedCategory] = useState('Marketing');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const categories = ['Development', 'Design', 'Marketing', 'Finance', 'Industries', 'Business'];

  return (
    <>
      {/* first section  */}
      <div className="main-container">
        <div className="inner-container spacing-secton bg-[#D3D3D3]/30  flex flex-col jsutif justify-center items-center py-12">
      
          <div className="search-bar flex mt-12 sm:mt-12  items-center  md:max-w-4xl w-full rounded-md border border-gray-300 bg-white ">
          
            <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex cursor-pointer items-center justify-between w-24 sm:w-30 md:w-40 lg:w-56 bg-[#055C88] text-white text-xs sm:text-base px-1 sm:px-5 py-3.5 sm:py-3  rounded-l-md "
        >
          {selectedCategory}
          <ChevronDown className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} size={20} />
        </button>

        {isDropdownOpen && (
          <ul className="absolute z-10 w-56 mt-1 bg-white py-2 border border-gray-200 rounded shadow-md">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsDropdownOpen(false);
                }}
                className="px-4 py-2 text-[15px] cursor-pointer hover:bg-gray-100"
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow px-2 sm:px-6 md:px-8 py-2 sm:py-2 text-gray-700 text-[12px] sm:text-lg bg-white focus:outline-none"
            />

            <button className="bg-[#00d280] text-white flex items-center justify-center px-1 md:px-4 py-3 sm:py-3 md:py-3 flex-shrink-0 rounded-r-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </button>

          </div>
          <div className="content-image grid grid-cols-1 md:grid-cols-2 gap-12 py-12 max-w-5xl px-10 mt-8">
            <div className="right">
              <div className="green-line text-[#00d280] mb-2 flex justify-between rounded-l-md  ">
                <p className='italic'> <span className='font-bold text-[16px]'>Business </span> <span className='text-[14px]'>| Business Strategy</span></p>
                <p className='text-[13px]'>2 Minutes Read</p>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 pt-3">
                From Vision to Scalable Execution: How to Develop a Scalable Web App Strategy
              </h1>
              <p className="text-gray-600">
                Every successful startups secret weapon is strategic planning. Though vision offers guidance, ideas are turned into reality through implementation. In addition to creativity, startups also thrive on effective planning, prioritization, and pivoting. We break down practical tactics in this blog to help founders transform huge ideas into quantifiable growth more quickly, intelligently, and with fewer mistakes. These useful planning suggestions will keep you robust, focused, and agile, whether youre prepared to launch or scale. On your startup journey, youll be prepared for obstacles, opportunities, and everything in between if you have the correct roadmap.
              </p>
            </div>

            <div className="left">
              <Image
                src="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/43c3b8b2-eb67-4e68-f839-da6db1be9300/w=1080,q=75"
                alt="Scalable Web App Strategy"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>


        </div>
      </div>

      {/* second section  */}
      <div className='flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-4 spacing-secton bg-[#fff] pt-20'>
        <div className='md:h-fit md:sticky md:top-[100px] lg:top-[140px] md:order-first flex-[1]'>
        <h1 className=" font-bold text-[#070707] leading-relaxed text-2xl mb-6 md:mb-2">
                Trending Articles
              </h1>
            <div className="first pr-2 pt-4">
              <div className="flex flex-wrap items-center justify-start space-x-2 mt-4 text-center md:text-left">
                <span className="text-sm font-semibold text-[#055C88] cursor-pointer">
                  Finance
                </span>
                <span className="text-gray-600 text-base hidden md:inline"><ChevronRight  className='h-5 w-5 text-[#055C88]'/></span>
                <span className="text-[11px] font-semibold text-[#055C88] cursor-pointer">
                  Financial Processes
                </span>
              </div>
              <div className="image-content flex flex-col lg:flex-row items-start mt-6">
                <Image
                  src="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/c0e1f099-e531-4cd7-78ec-d6c9c8833e00/w=96,q=75"
                  alt="AI Revolution in Finance"
                  width={140}
                  height={140}
                  className="h-19 w-19 object-cover mb-4 lg:mb-0"
                />
                <h1 className="lg:pl-5 lg:m-auto font-bold text-[#070707] leading-[125%] text-base text-center md:text-left">
                  AI Revolution in Finance: Prospects and Difficulties
                </h1>
              </div>
              <div className="border-b-1 border-gray-300 mt-6"></div>
            </div>
           
           
            <div className="last bg-[#022739] px-5 py-10 mt-[65px]">
              <h1 className="text-white text-2xl font-semibold mb-4 text-center md:text-left">
                Hire a MindSees Finance Specialist
              </h1>
              <div className="flex justify-center ">
                <Link href="/contact-us">
                <button className="bg-[#00D280] text-white py-3 text-lg font-semibold mt-9 rounded-lg hover:bg-[#00b96a] transition-colors w-26">
                  Hire me
                </button>
                </Link>
              </div>
            </div>
        </div>
        <div className='col-span-3 flex-[3] mb-[100px] md:mb-0'>
        <div className="left   p-4 md:p-8 text-md md:text-lg">
            <p> A startups vision is more than a high ambition; its your guiding star. It specifies the problem yore solving, who youre doing it for, and where you hope to be in the following three to five years. To guide execution, this vision must be actionable. We want to empower local retailers with AI-driven inventory management is considerably more successful than a generic goal like We aim to disrupt retail. Once the vision is established, focus on strategic objectives rather than surface-level goals. Prioritize market positioning, main product milestones, revenue targets, and customer satisfaction metrics. Strategic planning establishes the foundation for startup success, from the development of MVPs to AI automation for small businesses. Using a framework like OKRs (Objectives and Key Results) allows you to stay focused and outcome-driven across the board. Scalable infrastructure planning is an essential component of your roadmap if your goal involves providing AI-powered web Development for Small Businesses. </p>
            <br />
            <p>Startups also need to understand how to set priorities. Due to resource constraints, it is imperative to concentrate just on projects that provide the greatest return on investment. Determine which two or three things must be done in the next ninety days, and try not to get sidetracked by things that dont seem important. Priority noise is reduced with the use of tools such as the Eisenhower Matrix. However, many founders fall into the trap of striving for perfection; momentum is more important. Put your attention on developing MVPs (Minimum Viable Products), getting early market input, and refining through agile sprints. Iterate rapidly and change course when necessary; speed and flexibility are your greatest advantages. Speed and flexibility are crucial while developing your MVP, particularly in No-Code SaaS Platform Development for SMBs.</p>
            <br />

            <Image src={image} alt="" className="w-full h-[50vh] md:h-[60vh] object-cover mt-6" />

            <p className="mt-6"> Startups also need to understand how to set priorities. Due to resource constraints, it is imperative to concentrate just on projects that provide the greatest return on investment. Determine which two or three things must be done in the next ninety days, and try not to get sidetracked by things that dont seem important. Priority noise is reduced with the use of tools such as the Eisenhower Matrix. However, many founders fall into the trap of striving for perfection; momentum is more important. Put your attention on developing MVPs (Minimum Viable Products), getting early market input, and refining through agile sprints. Iterate rapidly and change course when necessary; speed and flexibility are your greatest advantages. Speed and flexibility are crucial while developing your MVP, particularly in No-Code SaaS Platform Development for SMBs.</p>

            <br />

            <p> Indeed, taking risks needs to be a component of the plan. The most successful startup blueprints allow for risky trials. Consider the cost of inaction before acting, and whenever feasible, test concepts in low-stakes settings. Smart risk is about pushing boundaries in a methodical and controlled manner, not about gambling. In the end, strategic planning is a dynamic process that changes as your startup takes on new challenges. Maintaining flexibility in your execution strategy while adhering to your vision is crucial. Continue to be inquisitive, responsive, and most importantly, active. </p>

            <Image src={image2} alt="" className="w-full h-[50vh] md:h-[60vh] object-cover mt-6" />

            <h1 className="text-2xl md:text-4xl font-bold font-sans mt-6">Conclusion:</h1>
            <p className="mt-4"> In conclusion, building a startup requires more than passion—it demands precise, adaptable, and visionary planning. Define your vision clearly, turn it into strategic objectives, prioritize what truly moves the needle, stay agile with execution, keep your team aligned, trust the right metrics, and make room for bold, calculated risks. When strategy becomes a habit, not just a document, execution becomes inevitable—and growth becomes unstoppable. </p>
          </div>
        </div>

      </div>
    
      {/* fourth */}
      <div className="border-b-1 border-gray-300 mt-40"></div>
      <div className="tags block md:flex mx-auto lg:w-5xl mt-13 px-4">
        <h1 className="font-bold text-center text-[#070707] text-xl md:text-2xl lg:text-3xl mb-6 mr-6">
          Tags:
        </h1>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-[#f2fdf9] text-[#00d280] flex justify-center items-center text-center rounded-full text-xs md:text-lg h-12 px-4">
            StartupGrowth
          </span>
          <span className="bg-[#f2fdf9] text-[#00d280] flex justify-center items-center text-center rounded-full text-xs md:text-lg h-12 px-4">
            Strategic Planning
          </span>
          <span className="bg-[#f2fdf9] text-[#00d280] flex justify-center items-center text-center rounded-full text-xs md:text-lg h-12 px-4">
            StartupStrategy
          </span>
          <span className="bg-[#f2fdf9] text-[#00d280] flex justify-center items-center text-center rounded-full text-xs md:text-lg h-12 px-4">
            EnterpreneurTips
          </span>
          <span className="bg-[#f2fdf9] text-[#00d280] flex justify-center items-center text-center rounded-full text-xs md:text-lg h-12 px-4">
            Business Strategy
          </span>
        </div>
      </div>
      <div className="border-b-1 border-gray-300 mt-8 mb-34"></div>
      {/* third  */}
      <LastBusinessesSection/>
      {/* <Footer/> */}
    </>
  )
}

export default AiRevolution;
