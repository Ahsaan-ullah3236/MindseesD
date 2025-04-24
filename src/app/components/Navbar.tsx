"use client";

import React, { useState } from "react";
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const Navbar = () => {
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const menuItem=[{
    item:"AI Development",
    link:"/services/ai"
  },
  {
    item:"UI/UX Development",
    link:"/services/uiux"
  },
  {
    item:"Mobile App Development",
    link:"/services/mobile"
  },
  {
    item:"Website Development",
    link:"/services/website"
  },
  {
    item:"SaaS-based Website Development",
    link:"/services/saas"
  },
  {
    item:"SEO & Marketing",
    link:"/services/seo"
  },
  {
    item:"Graphic Designing",
    link:"/services/graphic"
  },             
  ]
  
  const industriesItems=[{
    item:"Health",
    link:"/industries/health"
  },
  {
    item:"Edtech",
    link:"/industries/edtech"
  },
  {
    item:"Fintech",
    link:"/industries/fintech"
  },
  {
    item:"Business",
    link:"/industries/business"
  },
  {
    item:"Communication",
    link:"/industries/communication"
  },
  {
    item:"Entertainment",
    link:"/industries/entertainment"
  },
  {
    item:"E-Commerce",
    link:"/industries/ecommerce"
  },
  {
    item:"Retail",
    link:"/industries/retail"
  },
                
  ]

  const toggleMobileMenu = (menu: string) => {
    if (mobileExpandedMenu === menu) {
      setMobileExpandedMenu(null);
    } else {
      setMobileExpandedMenu(menu);
    }
  };

  return (
    <header className="w-full shadow-sm border-b-red-300 sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto spacing-secton py-5">
        <div className="text-xl lg:text-2xl font-bold text-black">
          <Link href={"/"}>
          <span className="font-mono" >MindSees</span>
          </Link>
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
                            <div className="absolute top-5 left-0 bg-[#ffffff] shadow-custom p-2 rounded-lg mt-2 pt-3 w-67 z-10">
                              {menuItem.map((item,i)=>(
              
                              <Link key={i} href={item?.link} className="block hover:bg-[#d6f1ff] pl-3 pr-3 pt-2 pb-2 rounded-lg text-sm ">{item?.item}</Link>
                              ))}
                            </div>
              </>

             
            )}
          </div>

          <Link href="/portfolio"  className="hover:text-[#00d280] text-sm lg:text-lg">Portfolio</Link>
          <Link href="/about" className="hover:text-[#00d280] text-sm lg:text-lg">About Us</Link>

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
              
                              <div className="absolute top-5 left-0 bg-[#ffffff] shadow-custom p-2 rounded-lg mt-2 pt-3 w-50 z-10">
                                {industriesItems.map((item,i)=>(
                
                                <Link key={i} href={item?.link} className="block hover:bg-[#d6f1ff] pl-3 pr-3 pt-2 pb-2 rounded-lg text-sm ">{item?.item}</Link>
                                ))}
                              </div>
                </>
             
            )}
          </div>

          <Link  href="/careers"  className="hover:text-[#00d280] text-sm lg:text-lg" >Careers</Link>
          <Link href="#" className="hover:text-[#00d280] text-sm lg:text-lg">Blogs</Link>
        </nav>

        <Link
          href="/contact-us"
          className="hidden md:inline-block bg-[#00d280] text-white px-3 py-2 lg:px-5 lg:py-4 rounded-md text-md font-bold "
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
        <div className="h-[100vh] md:hidden px-4 pb-4 bg-white shadow-md overflow-y-auto">
          {/* Services dropdown */}
          <div className="py-2">
            <button 
              className="flex items-center justify-between w-full font-semibold hover:text-[#00d280]"
              onClick={() => toggleMobileMenu('services')}
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                className={clsx('transition-transform', {
                  'rotate-180': mobileExpandedMenu === 'services',
                })}
              />
            </button>
            {mobileExpandedMenu === 'services' && (
              <div className="pl-4 mt-2 space-y-2">
                {menuItem.map((item, i) => (
                  <Link 
                    key={i} 
                    href={item?.link}
                    className="block py-1 hover:text-[#00d280]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="text-sm">
                    {item?.item}
                      </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="#" className="block py-2 font-semibold hover:text-[#00d280]" onClick={() => setMobileMenuOpen(false)}>
            Portfolio
          </Link>
          
          <Link href="#" className="block py-2 font-semibold hover:text-[#00d280]" onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>

          {/* Industries dropdown */}
          <div className="py-2">
            <button 
              className="flex items-center justify-between w-full font-semibold hover:text-[#00d280]"
              onClick={() => toggleMobileMenu('industries')}
            >
              <span>Industries</span>
              <ChevronDown
                size={16}
                className={clsx('transition-transform', {
                  'rotate-180': mobileExpandedMenu === 'industries',
                })}
              />
            </button>
            {mobileExpandedMenu === 'industries' && (
              <div className="pl-4 mt-2 space-y-2">
                {industriesItems.map((item, i) => (
                  <Link 
                    key={i} 
                    href={item?.link} 
                    className="block py-1 hover:text-[#00d280]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="text-sm"> {item?.item}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="#" className="block py-2 font-semibold hover:text-[#00d280]" onClick={() => setMobileMenuOpen(false)}>
            Careers
          </Link>
          
          <Link href="#" className="block py-2 font-semibold hover:text-[#00d280]" onClick={() => setMobileMenuOpen(false)}>
            Blogs
          </Link>
          
          <Link
            href="/contact us"
            className="mt-4 inline-block bg-[#00d280] text-white w-full text-center py-2 rounded-md font-bold hover:bg-green-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      )}

      
    </header>
  );
};

export default Navbar;
