"use client";

import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "AI Development",
    description:
      "Leverage our AI development expertise for intelligent solutions that transform operations, enhance decision-making, and drive competitive advantage in your industry.",
    image: "/AiDevelopment.jpg",
  },
  {
    title: "Mobile App Development",
    description: "We build powerful cross-platform and native apps.",
    image: "/App.jpg",
  },
  {
    title: "Website Development",
    description: "Fast, secure, and responsive websites for your brand.",
    image: "https://img.freepik.com/premium-photo/young-woman-using-source-code-develop-new-online-app-working-with-html-script-terminal-window-program-database-software-it-manager-planning-artificial-intelligence-network_1035542-260.jpg",
  },
  {
    title: "Graphic Designing",
    description: "Creative graphics that tell your brand story visually.",
    image: "https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg",
  },
  {
    title: "UI/UX Designing",
    description: "Designs that are both beautiful and user-friendly.",
    image: "https://img.freepik.com/premium-photo/ar-brainstorming-mobile-app-interface-design-modern-office_1105604-39210.jpg",
  },
  {
    title: "SaaS Based Website Development",
    description: "We turn your ideas into scalable SaaS platforms.",
    image: "https://img.freepik.com/free-photo/logo-designer-working-computer-desktop_23-2149142153.jpg",
  },
  {
    title: "SEO & Marketing",
    description: "Get found faster with our expert SEO and marketing.",
    image: "https://img.freepik.com/premium-photo/young-woman-using-source-code-develop-new-online-app-working-with-html-script-terminal-window-program-database-software-it-manager-planning-artificial-intelligence-network_1035542-260.jpg",
  },
];

export default function Ourservices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <div>
       <div  className='spacing-secton pt-16 py-18 w-full'>
            <h2 className='text-center text-4xl font-bold mb-10'>Our Services</h2>
            <p className='flex text-center justify-center text-xl'>Embark on a journey of digital transformation with our comprehensive solutions. From advanced development to intuitive design and strategic marketing, we empower businesses with innovation and excellence, elevating your digital presence and capabilities.</p>
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
          <button className="mt-6 px-6 py-2 text-[#00d280] rounded w-fit">
            Learn More
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
// components/ResponsiveStepper.tsx
// "use client";

// import { useState } from "react";
// import classNames from "classnames";
// import Image from "next/image";

// type Service = {
//   title: string;
//   description: string;
//   image: string;
// };

// const services: Service[] = [
//   {
//     title: "AI Development",
//     description:
//       "Leverage our AI development expertise for intelligent solutions that transform operations, enhance decision-making, and drive competitive advantage.",
//     image: "/images/ai.jpg",
//   },
//   {
//     title: "Mobile App Development",
//     description:
//       "Discover unmatched creativity and professionalism with our specialized mobile app development solutions. Transform your brand with apps that make a lasting impact.",
//     image: "/images/mobile.jpg",
//   },
//   {
//     title: "Website Development",
//     description:
//       "From static sites to dynamic web apps, we build scalable solutions tailored to your needs.",
//     image: "/images/web.jpg",
//   },
//   {
//     title: "Graphic Designing",
//     description:
//       "Creative visuals that define and elevate your brand identity.",
//     image: "/images/design.jpg",
//   },
//   {
//     title: "UI/UX Designing",
//     description:
//       "User-first experiences with seamless interfaces and smart flows.",
//     image: "/images/ui.jpg",
//   },
//   {
//     title: "SaaS Based Website Development",
//     description: "Custom SaaS platforms built for scale, security, and flexibility.",
//     image: "/images/saas.jpg",
//   },
//   {
//     title: "SEO & Marketing",
//     description: "Drive traffic and growth through expert SEO and digital marketing strategies.",
//     image: "/images/seo.jpg",
//   },
// ];

// export default function ServiceStepper() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="w-full p-4">
//       {/* Tabs */}
//       <div className="flex flex-wrap justify-center gap-4 mb-6">
//         {services.map((service, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={classNames(
//               "text-sm md:text-base font-semibold px-4 py-2 rounded-md transition-colors duration-300",
//               index === activeIndex
//                 ? "bg-green-500 text-white"
//                 : "bg-transparent text-black hover:bg-green-100"
//             )}
//           >
//             {service.title}
//           </button>
//         ))}
//       </div>

//       {/* Image + Text */}
//       <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-md">
//         <Image
//           src={services[activeIndex].image}
//           alt={services[activeIndex].title}
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-start p-6 sm:p-10 text-white">
//           <h2 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4">
//             {services[activeIndex].title}
//           </h2>
//           <p className="text-sm sm:text-lg max-w-xl mb-4">
//             {services[activeIndex].description}
//           </p>
//           <a
//             href="#"
//             className="text-green-400 text-sm font-semibold hover:underline"
//           >
//             Learn More
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }


// import Image from "next/image";
// import React, { useState, useEffect, useRef } from "react";

// function Ourservices() {
//   const items: string[] = [
//     "AI Development",
//     "Mobile Development",
//     "App Development",
//     "Graphic Designing",
//     "UI/UX Designing",
//     "SEO Marketing",
//     "Website Development",
//     "SaaS Based Website Development",
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       if (!section) return;

//       const rect = section.getBoundingClientRect();
//       const scrollLength = rect.height - window.innerHeight;
//       const scrollTop = -rect.top;

//       if (scrollTop >= 0 && scrollTop <= scrollLength) {
//         const step = scrollLength / items.length;
//         const index = Math.min(items.length - 1, Math.floor(scrollTop / step));
//         setActiveIndex(index);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [items.length]);

//   const getContent = (item: string) => {
//     switch (item) {
//       case "AI Development":
//         return {
//           title: "AI Development",
//           description:
//             "Leverage our AI development expertise for intelligent solutions that transform operations, enhance decision-making, and drive competitive advantage in your industry.",
//           image: "/AiDevelopment.jpg",
//         };
//       case "Mobile Development":
//         return {
//           title: "Mobile Development",
//           description:
//             "Build robust and scalable websites with modern frameworks and a user-centered approach to elevate your online presence.",
//           image: "/App.jpg",
//         };
//       case "App Development":
//         return {
//           title: "App Development",
//           description:
//             "Build robust and scalable websites with modern frameworks and a user-centered approach to elevate your online presence.",
//           image:
//             "https://img.freepik.com/premium-photo/young-woman-using-source-code-develop-new-online-app-working-with-html-script-terminal-window-program-database-software-it-manager-planning-artificial-intelligence-network_1035542-260.jpg",
//         };
//       case "Graphic Designing":
//         return {
//           title: "Graphic Designing",
//           description:
//             "Build robust and scalable websites with modern frameworks and a user-centered approach to elevate your online presence.",
//           image:
//             "https://img.freepik.com/free-photo/logo-designer-working-computer-desktop_23-2149142153.jpg",
//         };
//       case "UI/UX Designing":
//         return {
//           title: "UI/UX Designing",
//           description:
//             "Build robust and scalable websites with modern frameworks and a user-centered approach to elevate your online presence.",
//           image:
//             "https://img.freepik.com/free-photo/woman-with-editor-occupation-wearing-headphones_482257-10564.jpg",
//         };
//       case "SEO Marketing":
//         return {
//           title: "SEO Marketing",
//           description:
//             "Build robust and scalable websites with modern frameworks and a user-centered approach to elevate your online presence.",
//           image:
//             "https://img.freepik.com/free-photo/employee-working-marketing-setting_23-2151871171.jpg",
//         };
//       case "Website Development":
//         return {
//           title: "Website Development",
//           description:
//             "Build robust and scalable websites with modern frameworks and a user-centered approach to elevate your online presence.",
//           image:
//             "https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg",
//         };
//       case "SaaS Based Website Development":
//         return {
//           title: "SaaS Based Website Development",
//           description:
//             "Build robust and scalable websites with modern frameworks and a user-centered approach to elevate your online presence.",
//           image:
//             "https://img.freepik.com/premium-photo/ar-brainstorming-mobile-app-interface-design-modern-office_1105604-39210.jpg",
//         };
//       default:
//         return {
//           title: "No content available",
//           description: "No information available for this service.",
//           image: "",
//         };
//     }
//   };

//   const { title, description, image } = getContent(items[activeIndex]);

//   return (
//     <div
//       ref={sectionRef}
//       className="relative w-full bg-white mb-20"
//       style={{ height: `${items.length * 70}vh` }}
//     >
//       <div className="sticky top-0 left-0 w-full  px-6 sm:px-12 py-16 bg-white z-10">

//       <div  className='spacing-secton pt-10 md:pt-18 py-18 w-full'>
//             <h2 className='text-center text-4xl font-bold mb-10'>Our Services</h2>
//             <p className='flex text-center justify-center text-xl'>Embark on a journey of digital transformation with our comprehensive solutions. From advanced development to intuitive design and strategic marketing, we empower businesses with innovation and excellence, elevating your digital presence and capabilities.</p>
//          </div>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Sidebar */}
//           <div className="w-full p-4 rounded-xl shadow-sm bg-gray-50 relative">
//             <nav>
//               <div className="flex relative">
//                 <div className="relative w-4 h-full">
//                   <div
//                     className="absolute left-0 w-2 bg-[#00D280] transition-all duration-300 rounded-xl"
//                     style={{
//                       top: `${activeIndex * 64}px`,
//                       height: "64px",
//                     }}
//                   ></div>
//                 </div>
//                 <div className="ml-6">
//                   <ul>
//                     {items.map((item, index) => (
//                       <li
//                         key={item}
//                         className={`cursor-pointer text-md md:text-lg xl:text-2xl font-bold py-4 px-6 rounded-lg transition-all duration-300 ${
//                           index === activeIndex
//                             ? "bg-[#00D280] text-white"
//                             : "bg-white text-black hover:bg-gray-200"
//                         }`}
//                       >
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </nav>
//           </div>

//           {/* Content */}
//           <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-lg">
//             {image && (
//               <Image
//                 src={image}
//                 alt={title}
//                 fill
//                 className="object-cover opacity-80"
//                 sizes="100vw"
//                 priority
//               />
//             )}
//             <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-6 sm:px-10 py-8 sm:py-12 space-y-6 bg-opacity-40">
//               <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
//               <p className="text-lg sm:text-xl font-medium max-w-3xl text-justify">
//                 {description}
//               </p>
//               <button className="text-[#00D280] font-bold text-lg bg-white px-6 py-2 rounded-lg mt-4 shadow-md">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Ourservices;
