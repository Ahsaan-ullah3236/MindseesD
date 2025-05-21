"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";

function Recruitment() {
 
  const scrollItems = [
    {
      title: "01 Application Screening:",
      content: "Candidates can submit their applications via our online portal, where our HR team thoroughly evaluates each one to ensure qualifications and alignment with our company values."
    },
    {
      title: "02 Initial Screening:",
      content: "Qualified candidates undergo an initial screening, which may involve a phone interview or online assessment, allowing us to assess their skills and experience more thoroughly."
    },
    {
      title: "03 Interviews:",
      content: "Shortlisted candidates are invited to interview with key team members, including hiring managers and potential colleagues, to explore their technical skills, experiences, and cultural fit in greater detail."
    },
    {
      title: "04 Assessment:",
      content: "Depending on the role, candidates may be required to complete technical assessments or other evaluations to showcase their skills and capabilities."
    },
    {
      title: "05 Onboarding:",
      content: "Once an offer is accepted, our HR team supports new hires throughout the onboarding process, offering necessary paperwork, training, and team introductions."
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
    <div className=" mx-auto">
      <div className="md:grid grid-cols-2 lg:gap-14 ">
        <div className="flex justify-center items-center">

        <div className="">
          <h1 className="text-3xl sm:text-5xl font-semibold sm:text-bold  text-white mb-6">
          Our Recruitment Process
          </h1>
          
          <p className="text-lg text-white mb-8">
          At MindSees, our recruitment process is transparent and inclusive. We evaluate both qualifications and cultural fit through initial screenings and interviews with key team members. We prioritize open communication and provide timely feedback to ensure a positive experience. Join us in our dedication to innovation and excellence.
          </p>
          
          <div className="mt-9 text-black">
              <Link href="/careers/jobs">
            <button className="text-[#00d280] py-2 mb-4 font-semibold text-lg transition duration-200 cursor-pointer">
              See Job Opportunities
            </button>
            </Link>
          </div>
        </div>
        </div>


        <div className="relative">
          <div 
            ref={sectionRef}
            className="h-[65vh] 2xl:h-[40vh] overflow-y-auto scroll-smooth left-scrollbar sm:pl-4 space-y-2"
          >
            {scrollItems.map((item, index) => (
              <div 
                key={index}
                className="bg-[#ffffff] p-8 rounded-xl ml-7 "
              >
                <h3 className="text-[22px] font-semibold text-[#00d280] mb-3">{item.title}</h3>
                <p className=" text-md text-[#023047]">{item.content}</p>
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

