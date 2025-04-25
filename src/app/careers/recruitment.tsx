"use client";
import React, { useRef, useEffect } from "react";

function Recruitment() {
 
  const scrollItems = [
    {
      title: "01 Expertise & Innovation",
      content: "With 5+ years' experience, MindSees delivers tailored solutions using industry expertise, certified developers, and cutting-edge technologies to drive business forward."
    },
    {
      title: "02 Quality Assurance",
      content: "We ensure robust, reliable, and secure software solutions through thorough testing at every stage. Our commitment to excellence guarantees solutions that exceed expectations."
    },
    {
      title: "03 Client-Centric Solutions",
      content: "Our approach revolves around understanding your unique needs and delivering solutions that align perfectly with your business goals and objectives."
    },
    {
      title: "04 Cutting-Edge Technologies",
      content: "We stay ahead of the curve by leveraging the latest technologies to build future-proof solutions that give you a competitive edge."
    },
    {
      title: "05 Transparent Process",
      content: "From initial consultation to final delivery, we maintain clear communication and complete transparency at every step of the project."
    }
  ];


  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollable = scrollableRef.current;

    const updateHeight = () => {
      if (scrollable) {
        
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const scrollable = scrollableRef.current;

      if (!section || !scrollable) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;

      if (
        scrollY >= sectionTop &&
        scrollY <= sectionTop + sectionHeight - window.innerHeight
      ) {
        const scrollOffset = scrollY - sectionTop;
        scrollable.scrollTop = scrollOffset;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="spacing-secton">
    <div className="max-w-5xl mx-auto">
      <div className="md:grid grid-cols-2 lg:gap-14 ">
        <div className="flex justify-center items-center">

        <div className="">
          <h1 className="text-xl md:text-3xl font-bold text-white mb-6">
          Our Recruitment Process
          </h1>
          
          <p className="text-lg text-white mb-8">
          At MindSees, our recruitment process is transparent and inclusive. We assess qualifications and cultural fit through initial screenings and interviews with key team members. We value open communication and provide timely feedback to ensure a positive experience. Join us in our commitment to innovation and excellence.
          </p>
          
          <div className="mt-9 text-black">
            <button className="text-[#00d280] py-2 mb-4 font-semibold text-lg transition duration-200">
              See Job Opportunities
            </button>
          </div>
        </div>
        </div>


        <div className="relative">
          <div 
            ref={sectionRef}
            className="h-[65vh] overflow-y-auto scroll-smooth left-scrollbar pl-4 space-y-2"
          >
            {scrollItems.map((item, index) => (
              <div 
                key={index}
                className="bg-[#ffffff] p-8 rounded-xl ml-7 "
              >
                <h3 className="text-[22px] font-semibold text-[#00d280] mb-3">{item.title}</h3>
                <p className="text-black text-md text-[#023047]">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .left-scrollbar {
        direction: rtl; /* Reverse the direction to move scrollbar to left */
      }
      .left-scrollbar > * {
        direction: ltr; /* Reset direction for content */
      }
      .left-scrollbar::-webkit-scrollbar {
        width: 10px;
      }
      .left-scrollbar::-webkit-scrollbar-track {
        background:rgb(117, 115, 115);
        border-radius: 10px;
      }
      .left-scrollbar::-webkit-scrollbar-thumb {
        background: #ffffff;
        border-radius: 10px;
      }
      .left-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `}</style>
  </div>
     );
}

export default Recruitment;

