"use client";

import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

type Service = {
  title: string;
  description: string;
  image: string;
  link:string;
};

const services: Service[] = [
  {
    title: "AI Development",
    description:
      "At our agency, we specialize in cutting-edge AI development that transforms the way businesses operate. From intelligent automation to data-driven insights, our solutions are designed to boost efficiency and decision-making. Partner with us to harness the true power of artificial intelligence.",
    image: "https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg",
    link:"/services/ai",
  },
  {
    title: "Mobile App Development",
    description: "We craft high-performance mobile applications tailored to your business goals. Whether it’s iOS, Android, or cross-platform, our apps combine sleek design with powerful functionality. From concept to launch, we ensure a seamless user experience that drives engagement and growth.",
    image: "https://img.freepik.com/free-photo/logo-designer-working-computer-desktop_23-2149142153.jpg",
    link:"/services/mobile",
  },
  {
    title: "Website Development",
    description: "We specialize in crafting high-performance, user-friendly websites tailored to your business needs. From sleek landing pages to robust web applications, our development services combine clean code with modern design. Let us help you create a powerful online presence that drives results.",
    image: "https://img.freepik.com/premium-photo/young-woman-using-source-code-develop-new-online-app-working-with-html-script-terminal-window-program-database-software-it-manager-planning-artificial-intelligence-network_1035542-260.jpg",
    link:"/services/website",
  },
  {
    title: "Graphic Designing",
    description: "Our graphic design services blend creativity with strategy to bring your brand to life. From logos and branding to social media visuals and marketing materials, we craft designs that captivate and communicate. Let us help you leave a lasting visual impression with designs that truly represent your vision.",
    image: "https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg",
    link:"/services/graphic",
  },
  {
    title: "UI/UX Designing",
    description: "At our agency, we craft seamless and intuitive user experiences through expert UI/UX design. By combining aesthetic appeal with functionality, we ensure your digital products are not only visually stunning but also user-friendly. Our goal is to create designs that engage users and drive meaningful interactions.",
    image: "https://img.freepik.com/premium-photo/ar-brainstorming-mobile-app-interface-design-modern-office_1105604-39210.jpg",
    link:"/services/uiux",
  },
  {
    title: "SaaS Based Website Development",
    description: "We specialize in SaaS-based website development, delivering scalable, secure, and customizable solutions tailored to your business needs. Our team builds intuitive platforms that streamline operations, enhance user experiences, and drive growth. From seamless integrations to robust performance, we ensure your SaaS product is optimized for success.",
    image: "https://img.freepik.com/free-photo/logo-designer-working-computer-desktop_23-2149142153.jpg",
    link:"/services/saas",
  },
  {
    title: "SEO & Marketing",
    description: "At our agency, we specialize in SEO and digital marketing strategies designed to drive results. By optimizing your online presence and leveraging targeted marketing techniques, we help businesses grow, reach their audience, and stay ahead of the competition. Our data-driven approach ensures sustainable growth and long-term success for your brand.",
    image: "https://img.freepik.com/premium-photo/young-woman-using-source-code-develop-new-online-app-working-with-html-script-terminal-window-program-database-software-it-manager-planning-artificial-intelligence-network_1035542-260.jpg",
    link:"/services/seo",
  },
];

export default function Ourservices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <div className="max-w-7xl mx-auto">
       <div  className='spacing-secton pt-16 py-18 w-full'>
            <h2 className='text-center text-4xl font-bold mb-10'>Our Services</h2>
            <p className='flex text-center max-w-5xl mx-auto justify-center text-xl'>Start your digital transformation with our all-in-one solutions. From cutting-edge development and user-centric design to results-driven marketing, we empower businesses with innovation, enhancing your digital presence and performance.</p>
         </div>
    <div className="flex flex-col md:flex-row w-full  rounded-md overflow-hidden  spacing-secton mt-6 mb-15 md:mb-30">
      <div className="w-full md:w-1/2 bg-white ">
        {services.map((service, index) => (
          <div
            key={index}
            className={classNames(
              "flex items-center px-4 py-2 cursor-pointer relative group",
              index === activeIndex ? " font-bold " : ""
            )}
            onClick={() => setActiveIndex(index)}
          >
           
            <div
              className={classNames(
                "absolute left-0 top-0 h-full w-[6px] transition-all",
                index === activeIndex ? "bg-[#00d280]" : "bg-gray-400"
              )}
            />
            <span className="ml-4 text-lg">
            <div
              className={classNames(
                "inline-block font-semibold text-lg py-2 px-2 transition-all duration-300 rounded",
                index === activeIndex ? "bg-[#00d280] text-white pr-4" : "text-[#000]"
              )}
            >
              {service.title}
            </div>
            </span>
          </div>
        ))}
      </div>

      <div className="w-full md:w-2/3 relative text-white mt-10 md:mt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src={activeService.image}
            alt={activeService.title}
            layout="fill"
            objectFit="cover"
            className="opacity-90 rounded-lg"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-70 " /> */}
        </div>
        <div className="relative z-10 p-6 md:p-10 h-full flex flex-col justify-center">
          <h2 className="text-lg md:text-3xl font-bold mb-4">{activeService.title}</h2>
          <p className="text-sm md:text-lg">{activeService.description}</p>
          <Link href={activeService.link}>
          <button  className="mt-6 px-6 py-2 font-bold cursor-pointer text-[#00d280] rounded w-fit">
            Learn More
          </button>
          </Link>

        </div>
      </div>
    </div>
    </div>
  );
}
