"use client";
import React,{useState} from 'react';
import Image from 'next/image';
interface BusinessCard {
  id: string;
  title: string;
  imageUrl: string;
  hoverText: string;
  buttonText: string;
}
function Page() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const businessCards: BusinessCard[] = [
    {
      id: 'ecommerce',
      title: 'E-Commerce',
      imageUrl: 'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/d639d50a-fbb0-4c0e-5426-6d2276563400/w=1920,q=75',
      hoverText: 'We drive efficiency and growth through tailored software solutions that optimize operations and enhance productivity.',
      buttonText: 'Learn More -->',
    },
    {
      id: 'netflix',
      title: 'NETFLIX',
      imageUrl: 'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/2980e6fb-5749-45c8-b61d-e76f46a08000/w=1920,q=75',
      hoverText: 'Innovative solutions for the entertainment industry and beyond.',
      buttonText: 'Explore -->'
    },
    {
      id: 'edtech',
      title: 'EdTech',
      imageUrl: 'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/9c74b64e-cbc4-4ac2-5a86-da9f4e5f6500/w=1920,q=75',
      hoverText: 'Transforming education through technology.',
      buttonText: 'Discover -->',
      
    },
    {
      id: 'edtech',
      title: 'EdTech',
      imageUrl: 'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/d7e2df5d-f7b6-455b-3426-d9085bef7b00/w=1920,q=75',
      hoverText: 'Transforming education through technology.',
      buttonText: 'Discover -->',
      
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce',
      imageUrl: 'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/d639d50a-fbb0-4c0e-5426-6d2276563400/w=1920,q=75',
      hoverText: 'We drive efficiency and growth through tailored software solutions that optimize operations and enhance productivity.',
      buttonText: 'Learn More -->',
    },
    {
      id: 'netflix',
      title: 'NETFLIX',
      imageUrl: 'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/2980e6fb-5749-45c8-b61d-e76f46a08000/w=1920,q=75',
      hoverText: 'Innovative solutions for the entertainment industry and beyond.',
      buttonText: 'Explore -->'
    },
    {
      id: 'edtech',
      title: 'EdTech',
      imageUrl: 'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/9c74b64e-cbc4-4ac2-5a86-da9f4e5f6500/w=1920,q=75',
      hoverText: 'Transforming education through technology.',
      buttonText: 'Discover -->',
      
    },
    {
      id: 'edtech',
      title: 'EdTech',
      imageUrl: 'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/d7e2df5d-f7b6-455b-3426-d9085bef7b00/w=1920,q=75',
      hoverText: 'Transforming education through technology.',
      buttonText: 'Discover -->',
      
    }
  ];


  return (
    <div className="success-main-container min-h-screen mt-0 md:mt-12 flex items-center justify-center overflow-auto px-4">
      <div className="w-full max-w-7xl text-center">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Elevating Success In The<br/>
      Digital Sphere</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 spacing-secton'>
        {businessCards.map((card, i) => (
  <div 
    key={i}
    className="relative w-full h-68 overflow-hidden cursor-pointer"
    onMouseEnter={() => setHoveredIndex(i)}
    onMouseLeave={() => setHoveredIndex(null)}
  >
    <Image
      src={card.imageUrl}
      alt={`Project ${i + 1}`}
      width={450}
      height={400}
      className="object-cover w-full h-full opacity-100 transition-transform duration-500 group-hover:scale-105"
    />

    <div 
      className={`absolute z-10 w-full px-6  transition-all duration-500 ease-in-out ${
        hoveredIndex === i ? 'top-6 translate-y-0' : 'bottom-17 translate-y-full'
      }`}
    >
      <h3 className="text-xl md:text-3xl font-bold text-white ">{card.title}</h3>
    </div>

    <div 
      className={`absolute bottom-0 left-0 right-0 text-white p-6 transition-all duration-500 ease-in-out ${
        hoveredIndex === i ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <p className="mb-4 text-left">{card.hoverText}</p>
      <button className="py-2 flex items-left text-left text-white font-medium transition">
        {card.buttonText}
      </button>
    </div>
  </div>
))}

          </div>
       
      </div>
    </div>
  );
}

export default Page;
