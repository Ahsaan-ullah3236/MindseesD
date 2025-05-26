"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ScrollItem {
  imagelight: string;
  imageDark: string;
  title: string;
}

interface ServicePlatformProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  description: string;
  scrollItems: ScrollItem[];
  buttonText?: string;
  buttonColor?: string;
  cardBgColor?: string;
  cardHoverBgColor?: string;
  cardBorderColor?: string;
  textHoverColor?: string;
}

const ServicePlatform: React.FC<ServicePlatformProps> = ({
  title,
  subtitle,
  imageUrl,
  description,
  scrollItems,
  buttonText = "Let's discuss",
  buttonColor = "#00d280",
  cardBgColor = "#d6f1ff",
  cardHoverBgColor = "#0575ad",
  cardBorderColor = "#0575ad",
  textHoverColor = "white"
}) => {
  // Split scroll items into two columns
  const halfLength = Math.ceil(scrollItems.length / 2);
  const leftItems = scrollItems.slice(0, halfLength);
  const rightItems = scrollItems.slice(halfLength);

  return (
    <div className=" mx-auto spacing-secton">
      <div className="text-3xl sm:text-5xl font-semibold sm:text-bold text-gray-900 text-center mt-12 sm:mt-30">{title}</div>
      <div className="text-lg text-center mt-5">{subtitle}</div>
      
      <div className=" mx-auto py-6 sm:py-18">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="mb-10 lg:mb-0">
            <Image 
              src={imageUrl} 
              alt="service platform image"
              height={300}
              width={300}
              className="w-full"
            />
            
            <p className="text-lg text-black mb-8 mt-9">
              {description}
            </p>
            
            <div className="mb-10 text-black">
              <Link href="/contact-us">
              <button 
                className={`py-2 font-bold cursor-pointer text-xl transition duration-200`}
                style={{ color: buttonColor }}
              >
                {buttonText}
              </button>
              </Link>

            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="h-[90vh] 2xl:h-[50vh] overflow-y-auto scroll-smooth left-scrollbarGray pl-4 space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="mt-0 sm:mt-14 ">
                  {leftItems.map((item, index) => (
                    <div 
                      key={`left-${index}`}
                      className={`hover:${textHoverColor} p-5 group  rounded-xl my-4 border-2`}
                      style={{
                        backgroundColor: cardBgColor,
                        borderColor: cardBorderColor,
                        transition: 'background-color 0.3s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = cardHoverBgColor;
                        e.currentTarget.style.color = textHoverColor;
                      }}
                      onClick={(e) => {
                        e.currentTarget.style.backgroundColor = cardHoverBgColor;
                        e.currentTarget.style.color = textHoverColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = cardBgColor;
                        e.currentTarget.style.color = 'inherit';
                      }}
                    >
                      <Image 
                        src={item.imageDark} 
                        alt="logo" 
                        height={20} 
                        width={20} 
                        className="w-13 h-13 mx-auto hidden group-hover:block" 
                      />
                      <Image 
                        src={item.imagelight} 
                        alt="logo" 
                        height={20} 
                        width={20} 
                        className="w-13 h-13 mx-auto block group-hover:hidden" 
                      />
                      <h3 
                        className="font-bold text-black-800 mb-4 text-center mt-4" 
                        style={{lineHeight:'24px', fontSize:'19px'}}
                      >
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
                
                {/* Right Column */}
                <div className="">
                  {rightItems.map((item, index) => (
                    <div 
                      key={`right-${index}`}
                      className={`hover:${textHoverColor} p-5 group rounded-xl my-4 border-2`}
                      style={{
                        backgroundColor: cardBgColor,
                        borderColor: cardBorderColor,
                        transition: 'background-color 0.3s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = cardHoverBgColor;
                        e.currentTarget.style.color = textHoverColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = cardBgColor;
                        e.currentTarget.style.color = 'inherit';
                      }}
                    >
                      <Image 
                        src={item.imageDark} 
                        alt="logo" 
                        height={20} 
                        width={20} 
                        className="w-13 h-13 mx-auto  hidden group-hover:block " 
                      />
                      <Image 
                        src={item.imagelight} 
                        alt="logo" 
                        height={20} 
                        width={20} 
                        className="w-13 h-13 mx-auto block group-hover:hidden" 
                      />
                      <h3 
                        className="font-bold text-black-800 mb-4 text-center " 
                        style={{lineHeight:'24px', fontSize:'19px'}}
                      >
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePlatform;