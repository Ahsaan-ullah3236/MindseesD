"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

function Page() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
  //   if (scrollContainerRef.current) {
  //     e.preventDefault();
  //     scrollContainerRef.current.scrollTop += e.deltaY;
  //   }
  // };

  const scrollItems = [
    {
      title: "Expertise & Innovation",
      content: "With 5+ years' experience, MindSees delivers tailored solutions using industry expertise, certified developers, and cutting-edge technologies to drive business forward."
    },
    {
      title: "Quality Assurance",
      content: "We ensure robust, reliable, and secure software solutions through thorough testing at every stage. Our commitment to excellence guarantees solutions that exceed expectations."
    },
    {
      title: "Client-Centric Solutions",
      content: "Our approach revolves around understanding your unique needs and delivering solutions that align perfectly with your business goals and objectives."
    },
    {
      title: "Cutting-Edge Technologies",
      content: "We stay ahead of the curve by leveraging the latest technologies to build future-proof solutions that give you a competitive edge."
    },
    {
      title: "Transparent Process",
      content: "From initial consultation to final delivery, we maintain clear communication and complete transparency at every step of the project."
    }
  ];


  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [componentHeight, setComponentHeight] = useState(0);

  useEffect(() => {
    const scrollable = scrollableRef.current;

    const updateHeight = () => {
      if (scrollable) {
        const scrollHeight = scrollable.scrollHeight;
        const clientHeight = scrollable.clientHeight;
        setComponentHeight(scrollHeight - clientHeight + window.innerHeight);
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
    <div className="max-w-7xl mx-auto">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 mb-15">
        {/* Left Content */}
        <div className="mb-10 lg:mb-10">
          <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6">
            Why MindSees is your top choice?
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            At MindSees, our focus lies in crafting tailored software solutions that precisely match your specific requirements, supported by deep industry knowledge and a dedication to achieve the highest standards of quality.
          </p>
          
          <div className="mt-20 text-black">
            <h2 className="text-lg font-bold mb-4 italic">Ready to Transform Your Business? Contact Us Today for a Free Consultation</h2>
            <button className="text-[#00d280] py-2 font-bold text-lg transition duration-200">
              Schedule a Meeting
            </button>
          </div>
        </div>

        {/* Right Scrolling Content with Left Scrollbar */}
        <div className="relative">
          <div 
            ref={sectionRef}
            // onWheel={handleScroll}
            className="h-[80vh] overflow-y-auto scroll-smooth left-scrollbar pl-4 space-y-8"
          >
            {scrollItems.map((item, index) => (
              <div 
                key={index}
                className="bg-[#d6f1ff] p-8 rounded-xl "
              >
                <h3 className="text-xl font-bold text-[#00d280] mb-4">{item.title}</h3>
                <p className="text-black">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Custom left-side scrollbar styling */}
    <style jsx>{`
      .left-scrollbar {
        direction: rtl; /* Reverse the direction to move scrollbar to left */
      }
      .left-scrollbar > * {
        direction: ltr; /* Reset direction for content */
      }
      .left-scrollbar::-webkit-scrollbar {
        width: 6px;
      }
      .left-scrollbar::-webkit-scrollbar-track {
        background: #f2f2f2;
        border-radius: 10px;
      }
      .left-scrollbar::-webkit-scrollbar-thumb {
        background: #00d280;
        border-radius: 10px;
      }
      .left-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `}</style>
  </div>
    // <div
    //   ref={sectionRef}
    //   style={{ height: `${componentHeight}px` }}
    //   className="relative"
    // >
    //   <div className="sticky top-0">
    //     <div className="Topchoice-main-container p-18">
         
    //       {/* ORIGINAL FLEX LAYOUT STARTS BELOW */}
    //       <div className="Topchoice-second-container  flex flex-col lg:flex-row gap-2 mt-[-12] sm:p-12 ">
    //         {/* RIGHT SIDE */}
    //         <div className="Topchoice-right-container w-full lg:w-1/2 p-6 bg-gray-50 rounded-xl shadow-lg flex flex-col justify-between">
    //           <div>
    //             <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
    //               Why Kavelogics is your top choice?
    //             </h1>
    //             <p className="text-gray-700 text-base sm:text-xl font-semibold mt-4 sm:mt-12">
    //               At Kavelogics, we specialize in delivering customized software solutions designed to meet your unique business needs.
    //               Backed by extensive industry expertise and a commitment to excellence, we ensure the highest standards in every project we undertake.
    //             </p>
    //             <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-16 sm:mt-32">
    //               Ready to Transform Your Business? Contact Us Today for a Free Consultation
    //             </h3>
    //           </div>
    //           <button className="self-start bg-white border border-[#00D280] text-[#00D280] hover:bg-[#00D280] hover:text-white px-2 py-2 mb-2 rounded-full transition-colors duration-300 mt-2 sm:mt-2">
    //             Schedule a Meeting
    //           </button>
    //         </div>

    //         {/* LEFT SIDE */}
    //         <div className="Topchoice-left-container lg:w-1/2 relative rounded-xl bg-white">
    //           <div
    //             ref={scrollableRef}
    //             className="overflow-y-auto max-h-[500px] sm:max-h-[600px] pl-6 pr-4 scrollbar-thin scrollbar-thumb-gray-400 custom-scrollbar"
    //           >
    //             <div className="grid gap-6">
    //               {[
    //                 {
    //                   title: "Expertise & Innovation",
    //                   description:
    //                     "With over 5 years of proven experience, Kavelogics crafts customized software solutions powered by certified developers and the latest technologies.",
    //                   icon: "https://kavelogics.com/landing/why-cards/expertise.svg",
    //                 },
    //                 {
    //                   title: "Quality Assurance:",
    //                   description:
    //                     "We ensure robust, reliable, and secure software solutions through thorough testing at every stage. Our commitment to excellence guarantees solutions that exceed expectations.",
    //                   icon: "https://kavelogics.com/landing/why-cards/quality.svg",
    //                 },
    //                 {
    //                   title: "Client-Centric Solutions:",
    //                   description:
    //                     "We prioritize your success through close collaboration, delivering tailored solutions that exceed expectations with innovation and efficiency to drive your business forward.",
    //                   icon: "https://kavelogics.com/landing/why-cards/client.svg",
    //                 },
    //                 {
    //                   title: "Global Reach & Flexibility:",
    //                   description:
    //                     "With global industry expertise, Kavelogics offers flexible engagement models—choose from dedicated teams or project-based solutions tailored to your project scope and budget needs.",
    //                   icon: "https://kavelogics.com/landing/why-cards/global.svg",
    //                 },
    //               ].map((card, index) => (
    //                 <div
    //                   key={index}
    //                   className="border border-gray-200 rounded-xl p-6 sm:p-12 shadow-md bg-[#c3eef977]"
    //                 >
    //                   <div className="flex items-center gap-4">
    //                     <Image
    //                       src={card.icon.trim()}
    //                       alt={`${card.title} Icon`}
    //                       width={60}
    //                       height={60}
    //                     />
    //                     <h1 className="text-2xl sm:text-3xl font-semibold text-[#00D280]">
    //                       {card.title}
    //                     </h1>
    //                   </div>
    //                   <p className="mt-6 sm:mt-8 text-sm sm:text-base font-bold text-gray-600">
    //                     {card.description}
    //                   </p>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Page;

