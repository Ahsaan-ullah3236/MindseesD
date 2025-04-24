"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";

function Page() {
 
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
  // const [componentHeight, setComponentHeight] = useState(0);

  useEffect(() => {
    const scrollable = scrollableRef.current;

    const updateHeight = () => {
      if (scrollable) {
        // const scrollHeight = scrollable.scrollHeight;
        // const clientHeight = scrollable.clientHeight;
        // setComponentHeight(scrollHeight - clientHeight + window.innerHeight);
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
    <div ref={sectionRef} className="spacing-secton max-w-7xl mx-auto">
    <div className="">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 mb-15">
        {/* Left Content */}
        <div className="mb-10 lg:mb-10">
          <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6">
            Why MindSees is your top choice?
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
          At MindSees, we blend innovation, expertise, and a customer-first approach to deliver tailored software solutions that drive success. Focused on quality and results, our team is dedicated to helping your business grow through cutting-edge technology, strategic SEO, and impactful digital marketing. At MindSees, your vision becomes our mission, and we’re committed to turning your ideas into powerful digital experiences.
          </p>
          
          <div className="mt-20 text-black">
            <h2 className="text-lg font-bold mb-4 italic">Ready to Transform Your Business? Contact Us Today for a Free Consultation</h2>
            <Link href="/contact-us">
            <button className="cursor-pointer text-[#00d280] py-2 font-bold text-lg transition duration-200">
              Schedule a Meeting
            </button>
            </Link>

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
     );
}

export default Page;

