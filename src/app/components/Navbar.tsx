"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-white shadow-md p-4">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <Image
//         src="https://kavelogics.com/kavelogics-full-logo.svg"
//         alt="Kavelogics Logo"
//         width={200}
//         height={70}
//          />

//         <div className="hidden md:flex space-x-6 mx-auto">
//           <div
//             className="relative group"
//             onMouseEnter={() => setIsDropdownOpen(true)}
//             onMouseLeave={() => setIsDropdownOpen(false)}
//           >
//             <button className="text-black hover:text-[#00D280] text-lg font-bold">
//               Services
//             </button>
//             <div
//               className={`${
//                 isDropdownOpen
//                   ? "opacity-100 pointer-events-auto"
//                   : "opacity-0 pointer-events-none"
//               } absolute left-0 mt-2 w-72 bg-white border border-gray-300 rounded-md shadow-lg transition-opacity duration-300`}
//             >
//               {[
//                 "AI Development",
//                 "UI/UX Development",
//                 "Mobile Development",
//                 "App Development",
//                 "SaaS-based Website Development",
//                 "SEO & Marketing",
//               ].map((item, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="block px-4 py-2 text-black hover:bg-[#00D280] hover:text-white"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {[
//             { name: "Portfolio", href: "/Portfolio/PHerosection" },
//             { name: "About Us", href: "/About/Aboutherosection" },
//             { name: "Careers", href: "/Careers/Careersherosection" },
//             { name: "Blogs", href: "#blogs" },
//           ].map((link, i) => (
//             <a
//               key={i}
//               href={link.href}
//               className="text-black hover:text-[#00D280] text-lg font-bold"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         <div className="hidden md:flex">
//           <a
//             href="#quote"
//             className="text-white bg-[#00D280] hover:bg-[#00a86b] px-6 py-4 rounded-lg font-bold"
//           >
//             Get Quote
//           </a>
//         </div>

//         <div className="md:hidden">
//           <button onClick={toggleMobileMenu} className="text-black">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="h-8 w-8"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden mt-2 space-y-2">
//           <a href="#quote" className="block px-4 py-2 text-black hover:text-[#00D280]">
//             Get Quote
//           </a>
//           <a href="#portfolio" className="block px-4 py-2 text-black hover:text-[#00D280]">
//             Portfolio
//           </a>
//           <a href="#about" className="block px-4 py-2 text-black hover:text-[#00D280]">
//             About Us
//           </a>
//           <a href="#industries" className="block px-4 py-2 text-black hover:text-[#00D280]">
//             Industries
//           </a>
//           <a href="#careers" className="block px-4 py-2 text-black hover:text-[#00D280]">
//             Careers
//           </a>
//           <a href="#blogs" className="block px-4 py-2 text-black hover:text-[#00D280]">
//             Blogs
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const menuItem=[
    "AI Development",
                "UI/UX Development",
                "Mobile Development",
                "App Development",
                "SaaS-based Website Development",
                "SEO & Marketing"
  ]
  const industriesItems=[
    "Health",
                "Business",
                "Edtech",
                "Fintech",
                "Retail",
                "Communication"
  ]

  return (
    <header className="w-full shadow-sm border-b-red-300 sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto spacing-secton py-5">
        <div className="text-xl lg:text-2xl font-bold text-black">
          <span className="font-mono">MindSees</span>
        </div>

        <nav className=" hidden md:flex gap-8 items-center text-black font-semibold relative">
          <div
            className="relative group"
            onMouseEnter={() => setHoveredMenu('services')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#00d280] text-sm lg:text-lg">
              Services{' '}
              <ChevronDown
                size={16}
                className={clsx('transition-transform mt-2', {
                  'rotate-180': hoveredMenu === 'services',
                })}
              />
            </button>
            {hoveredMenu === 'services' && (
              
              <>
              
              {/* <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-b-[25px] border-transparent border-b-gray-500 absolute top-full left-0 shadow-2xl"></div> */}
                            <div className="absolute top-5 left-0 bg-[#ffffff] shadow-custom p-2 rounded-lg mt-2 pt-3 w-75 z-10">
                              {menuItem.map((item,i)=>(
              
                              <Link key={i} href="#" className="block hover:bg-[#d6f1ff] pl-3 pr-3 pt-2 pb-2 rounded-lg ">{item}</Link>
                              ))}
                            </div>
              </>

             
            )}
          </div>

          <Link href="#" className="hover:text-[#00d280] text-sm lg:text-lg">Portfolio</Link>
          <Link href="#" className="hover:text-[#00d280] text-sm lg:text-lg">About Us</Link>

          <div
            className="relative group"
            onMouseEnter={() => setHoveredMenu('industries')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#00d280] text-sm lg:text-lg">
              Industries{' '}
              <ChevronDown
                size={16}
                className={clsx('transition-transform mt-2', {
                  'rotate-180': hoveredMenu === 'industries',
                })}
              />
            </button>
            {hoveredMenu === 'industries' && (
                <>
              
                {/* <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-b-[25px] border-transparent border-b-gray-500 absolute top-full left-0 shadow-2xl"></div> */}
                              <div className="absolute top-5 left-0 bg-[#ffffff] shadow-custom p-2 rounded-lg mt-2 pt-3 w-50 z-10">
                                {industriesItems.map((item,i)=>(
                
                                <Link key={i} href="#" className="block hover:bg-[#d6f1ff] pl-3 pr-3 pt-2 pb-2 rounded-lg ">{item}</Link>
                                ))}
                              </div>
                </>
             
            )}
          </div>

          <Link href="#" className="hover:text-[#00d280] text-sm lg:text-lg">Careers</Link>
          <Link href="#" className="hover:text-[#00d280] text-sm lg:text-lg">Blogs</Link>
        </nav>

        <Link
          href="#"
          className="hidden md:inline-block bg-[#00d280] text-white px-3 py-2 lg:px-6 lg:py-4 rounded-md text-md font-bold "
        >
          Get Quote
        </Link>

        <button
          className="md:hidden text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     
      {mobileMenuOpen && (
        <div className="h-[100vh] md:hidden px-4 pb-4 bg-white shadow-md">
          <Link href="#" className="block py-2 font-semibold hover:text-[#00d280]">Services</Link>
          <Link href="#" className="block py-2 font-semibold hover:text-[#00d280]">Portfolio</Link>
          <Link href="#" className="block py-2 font-semibold hover:text-[#00d280]">About Us</Link>
          <Link href="#" className="block py-2 font-semibold hover:text-[#00d280]">Industries</Link>
          <Link href="#" className="block py-2 font-semibold hover:text-[#00d280]">Careers</Link>
          <Link href="#" className="block py-2 font-semibold hover:text-[#00d280]">Blogs</Link>
          <Link
            href="#"
            className="mt-4 inline-block bg-[#00d280] text-white w-full text-center py-2 rounded-md font-bold hover:bg-green-600"
          >
            Get Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
