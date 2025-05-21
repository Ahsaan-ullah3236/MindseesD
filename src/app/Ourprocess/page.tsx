'use client';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
// import leftImage from "@/app/Ourprocess/image/bgimage.png"
import leftImage from "./image/bgimage.png"
interface AccordionItem {
  title: string;
  content: string;
  description1: string,
  description2: string,
  description3: string,
  description4: string,
}

export default function Ourprocess() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  console.log("activeIndex", activeIndex)
  const accordionItems: AccordionItem[] = [
    {
      title: '1. Discovery Stage',
      content: 'We start with in-depth research and analysis to gain a clear understanding of your business goals, ensuring we create a customized solution that meets your unique needs.',
      description1: "Project Understanding",
      description2: "PRDs and Wireframes Creation",
      description3: "Development Planning & Estimation",
      description4: "Research & Development",
    },
    {
      title: '2. Development Stage',
      content: 'Our expert team brings ideas to life through agile development practices, delivering high-quality, scalable, and maintainable code.',
      description1: "Mobile Development",
      description2: "Web Development",
      description3: "Backend Development",
      description4: "QA",
    },
    {
      title: '3. Continuous Support & Development',
      content: 'We offer continuous maintenance, updates, and enhancements to ensure your solution remains optimized as your business grows and evolves.',
      description1: "Launch",
      description2: "Support",
      description3: "Ongoing Development",
      description4: "",
    }
  ];

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      // setIsZoomed(false);
    } else {
      setActiveIndex(index);
      // setIsZoomed(true);
    }
  };

  return (
    <div className="OurProcess-main-container spacing-secton mx-auto ">
      <div className="OurProcess-second-container grid grid-cols-1 md:grid-cols-3">


        <div className="w-full h-auto relative  overflow-hidden">
          <Image
            src={leftImage}
            alt="Process"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="w-full col-span-2 bg-[#002f46] text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div>
            <div className='text-3xl sm:text-4xl font-semibold sm:text-bold text-white mt-10 md:mt-20'>Our Process</div>
            <h2 className="text-md sm:text-lg mt-4 text-white mb-12">
              See how we build innovative software solutions and high quality products.
            </h2>
            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm "
                >
                  <button
                    className={`w-full px-6 py-7 text-left bg-white semibold cursor-pointer flex justify-between items-center transition-colors duration-200 ${activeIndex === index ? 'text-black bg-white text-xl font-bold' : 'bg-white text-black hover:bg-gray-50  text-xl font-bold'
                      }`}
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`accordion-content-${index}`}
                  >
                    <span className="text-lg  ">{item.title}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 bg-[#00d280] text-white rounded-xl ${activeIndex === index ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    id={`accordion-content-${index}`}
                    className={`transition-all duration-500  ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-150 md:max-h-100 opacity-100' : 'max-h-0 opacity-0'

                      }`}
                    style={{
                      transitionProperty: 'max-height, opacity',
                    }}
                  >
                    <div className="px-6 bg-white pb-4 pt-2">

                      {activeIndex === 0 && <div>
                        <p className="text-black font-medium">{item.content}</p>
                        <div className="bg-[#d6f1ff] py-3 px-2 mt-5 rounded-lg w-[90%] text-black">{item?.description1}</div>
                        <div className="bg-[#d6f1ff] py-3 px-2 mt-2 rounded-lg w-[90%] text-black">{item?.description2}</div>
                        <div className="bg-[#d6f1ff] py-3 px-2 mt-2 rounded-lg w-[90%] text-black">{item?.description3}</div>
                        <div className="bg-[#d6f1ff] py-3 px-2 mt-2 rounded-lg w-[90%] text-black">{item?.description4}</div>
                      </div>}
                      {activeIndex === 1 && <div>
                        <p className="text-black">{item.content}</p>
                        <div className="md:flex">
                          <div className="md:h-54 mt-5 w-full md:w-28 bg-[#d6f1ff] rounded-lg py-3 px-2 md:flex items-center justify-center text-black mr-4">Design</div>
                          <div>
                            <div className="bg-[#d6f1ff] py-3 px-2 mt-2 md:mt-5 rounded-lg w-full text-black">{item?.description1}</div>
                            <div className="bg-[#d6f1ff] py-3 px-2 mt-2 rounded-lg w-full text-black">{item?.description2}</div>
                            <div className="bg-[#d6f1ff] py-3 px-2 mt-2 rounded-lg w-full text-black">{item?.description3}</div>
                            <div className="bg-[#d6f1ff] py-3 px-2 mt-2 rounded-lg w-full text-black">{item?.description4}</div>

                          </div>
                        </div>
                      </div>}
                      {activeIndex === 2 && <div>
                        <p className="text-black">{item.content}</p>
                        <div className="md:flex">
                          <div className="md:h-54 mt-5 w-full md:w-28 bg-[#d6f1ff] rounded-lg py-3 px-2 md:flex items-center justify-center text-black text-center mr-4">{item?.description1}</div>
                          <div className="md:h-54 mt-5 w-full md:w-28 bg-[#d6f1ff] rounded-lg py-3 px-2 md:flex items-center justify-center text-black text-center mr-4">{item?.description2}</div>
                          <div className="md:h-54 mt-5 w-full md:w-28 bg-[#d6f1ff] rounded-lg py-3 px-2 md:flex items-center justify-center text-black text-center mr-4">{item?.description3}</div>
                          <div>


                          </div>
                        </div>
                      </div>}

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link href={"/contact-us"}>
            <button className="px-4 py-5 cursor-pointer w-30 bg-[#00d280] mt-20 mb-16 text-white rounded-lg font-bold transition-colors duration-300 shadow-md">
              Lets Chat
            </button>
          </Link>


        </div>
      </div>
    </div>
  );
}
