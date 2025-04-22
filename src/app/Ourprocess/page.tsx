'use client';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
interface AccordionItem {
  title: string;
  content: string;
}



export default function Ourprocess() {
  // const [openStage, setOpenStage] = useState<number | null>(null);

  // const toggleStage = (id: number) => {
  //   setOpenStage(openStage === id ? null : id);
  // };
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const accordionItems: AccordionItem[] = [
    {
      title: '1. Discovery Stage',
      content: 'We begin with comprehensive research and analysis to understand your business needs and objectives, laying the foundation for a tailored solution.'
    },
    {
      title: '2. Development Stage',
      content: 'Our expert team transforms ideas into reality through agile development practices, ensuring high-quality, scalable, and maintainable code.'
    },
    {
      title: '3. Continuous Support & Development',
      content: 'We provide ongoing maintenance, updates, and enhancements to keep your solution performing optimally as your business evolves.'
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
    <section className="OurProcess-main-container  ">
      <div className="OurProcess-second-container grid grid-cols-1 md:grid-cols-3">
        
       
        <div className="w-full h-auto relative  overflow-hidden">
          <Image
            src="/processimg.webp"
            alt="Process"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="w-full col-span-2 bg-[#002f46] text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div>
          <div className='text-4xl font-bold text-white mt-10 md:mt-20'>Our Process</div>
      <h2 className="text-lg mt-4 text-white mb-12">
        See how we build innovative software solutions and high quality products.
      </h2>
      <div className="space-y-4">
        {accordionItems.map((item, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm "
          >
            <button
              className={`w-full px-6 py-7 text-left bg-white semibold cursor-pointer flex justify-between items-center transition-colors duration-200 ${
                activeIndex === index ? 'text-black bg-white text-xl font-bold' : 'bg-white text-black hover:bg-gray-50  text-xl font-bold'
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
              className={`transition-all duration-500  ease-in-out overflow-hidden ${
                activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
              style={{
                transitionProperty: 'max-height, opacity',
              }}
            >
              <div className="px-6 bg-white pb-4 pt-2">
                <p className="text-black">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
          </div>
          <Link href={"/contact-us"}>
          <button className="mt-8 px-4 py-5 cursor-pointer w-30 bg-[#00d280] mt-20 mb-16 text-white rounded-lg font-bold transition-colors duration-300 shadow-md">
          Lets Chat
          </button>
          </Link>

          
        </div>
      </div>
    </section>
  );
}
