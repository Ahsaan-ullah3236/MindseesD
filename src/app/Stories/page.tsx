// components/TestimonialSlider.tsx
"use client"
import React,{ useState } from 'react';
// import avatar from "@/app/images/avatar.jpg"
import Image from 'next/image';
// import imagebg from "@/app/images/techbg.jpg"
import { StaticImageData } from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  title: string;
  description: string;
  services: string[];
  testimonial: string;
  author: string;
  role: string;
  cta: string;
  imageUrl: string | StaticImageData;
  discoverText: string;
};

export default function SuccessStoriesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name:"Ali",
      title: 'Wellness is a website which is empowering individuals to lead healthier lives through comprehensive, compassionate and innovative healthcare services.',
      services: ['Website Design', 'Website Development', 'QA'],
      testimonial: 'Kavelogics transformed our wellness platform with expert design and innovative healthcare services, earning excellent feedback. Highly recommended for high quality design and development services.',
      author: 'Wade Warren',
      role: 'Co-Founder',
      cta: 'See Case Study',
      imageUrl: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/b9731157-4ea3-469b-2b30-5513fe5d0900/w=640,q=75",
      
      discoverText: 'Discover the Wellness Medical Center Difference',
        description: ''
    },
    {
      id: 2,
      name:"Ali",
      title: 'Second testimonial content would go here with different text.',
      services: ['UI/UX Design', 'Mobile Development', 'Testing'],
      testimonial: 'Another great testimonial about the services provided with different feedback from a client.',
      author: 'Jane Smith',
      role: 'CEO',
      cta: 'See Case Study',
      imageUrl: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/bc4e92e7-e761-40ca-6933-b27bc30cf000/w=640,q=75",
      discoverText: 'Discover More Benefits',
        description: ''
    },
    {
        id: 3,
        name:"Ali",
        title: 'Third testimonial example with unique content for the slider.',
        services: ['Consulting', 'Strategy', 'Implementation'],
        testimonial: 'Final example testimonial showing how versatile this slider component can be with different content.',
        author: 'John Doe',
        role: 'Marketing Director',
        cta: 'See Case Study',
        imageUrl: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/bc4e92e7-e761-40ca-6933-b27bc30cf000/w=640,q=75",
        discoverText: 'Explore Our Services',
        description: ''
    }
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="relative  min-h-screen flex items-center justify-center spacing-secton px-2 md:px-4">
      <div className=" w-full mx-auto mb-20">
        <div className="bg-[#023047] rounded-2xl overflow-hidden">
          {/* Slider content */}
          <div className="relative h-full">
            {/* Slides */}
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    {/* Left column */}
                    <div>
                      <h1 className="text-3xl font-bold text-white mb-6">{testimonial.name}</h1>
                      <h1 className="text-md text-white mb-4">{testimonial.title}</h1>
                      
                      <div className="mb-5">
                        <div className="flex flex-wrap gap-2">
                          {testimonial.services.map((service, i) => (
                            <span key={i} className="bg-[#4a6b7c] text-white px-4 py-2 rounded-full text-sm border-2 font-medium">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className=" p-6 rounded-lg mb-8 ">
                        <p className="text-white italic mb-4">"{testimonial.testimonial}"</p>
                        <div className='flex mt-6'>
                            <Image src="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/dfff5a3f-e899-438f-a825-4ae7f519c000/w=48,q=75" alt='avatar' width={15} height={15} className='h-13 w-13 rounded-full mr-3'/>
                                <div>
                          <p className="font-medium text-white text-xl">{testimonial.author}</p>
                          <p className="text-white font-small">{testimonial.role}</p>
                          </div>

                        </div>
                      </div>
                      
                      <button className="bg-[#00d280] text-white px-6 py-4 rounded-lg font-bold text-md cursor-pointer">
                        {testimonial.cta}
                      </button>
                    </div>
                    
                    {/* Right column */}
                    <div className="flex flex-col justify-center h-full">
                    <Image 
    src={testimonial.imageUrl} 
    alt="Testimonial background" 
    width={500}  
    height={400} 
    className="rounded-lg" 
  />
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-[34%] md:left-[40%]  lg:left-[45%] -bottom-2 -translate-y-1/2 bg-[#00d280] cursor-pointer p-3 rounded-full shadow-md  z-10"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-[34%] md:right-[40%] lg:right-[45%] -bottom-2 -translate-y-1/2 bg-[#00d280] cursor-pointer p-3 rounded-full shadow-md  z-10"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

// 'use client';
// import React from 'react';
// import Image from 'next/image';

// const SuccessStoriesPage = () => {
//   return (
//     <section className="min-h-screen bg-white flex justify-center items-center px-4 py-10">
//       <div className="space-y-14 transform scale-105 transition-transform duration-500 w-full max-w-7xl">
//         {/* Header */}
//         <header className="text-center space-y-5">
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Our Success Stories</h1>
//           <p className="text-gray-600 max-w-3xl mx-auto text-lg">
//             Explore testimonials from satisfied clients who have experienced our exceptional services firsthand. Discover how we ve helped businesses like yours achieve success and elevate their online presence.
//           </p>
//         </header>

//         {/* Success Story Section */}
//         <article className="flex flex-col lg:flex-row bg-[#002f46] text-white rounded-3xl shadow-xl p-8 md:p-10">
//           {/* Left Content */}
//           <div className="flex-1 space-y-8">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-semibold">Business</h2>
//               <p className="text-gray-200 mt-4">
//                 Option A helps businesses to start, grow, and scale by focusing on revenue growth and business operations.
//               </p>
//             </div>

//             {/* Services */}
//             <div className="flex flex-wrap gap-3">
//               {['Website Design', 'UI/UX Design', 'Website Development'].map((service) => (
//                 <button
//                   key={service}
//                   className="bg-[#00D280] text-white px-5 py-2.5 rounded-lg hover:bg-[#00b96a] transition"
//                 >
//                   {service}
//                 </button>
//               ))}
//             </div>

//             {/* Testimonial */}
//             <blockquote className="italic text-gray-300 border-l-4 border-[#00D280] pl-4 mt-4 text-lg">
//               “We are thrilled with Kavelogics results. Their expertise in website development has enhanced our operational efficiency and user experience. Highly recommend.”
//             </blockquote>

//             {/* Client Info */}
//             <figure className="flex items-center gap-3 mt-6">
//               <Image
//                 src="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/dfff5a3f-e899-438f-a825-4ae7f519c000/w=48,q=75"
//                 alt="Client avatar"
//                 width={58}
//                 height={58}
//                 className="rounded-full"
//               />
//               <figcaption className="text-2xl font-bold text-gray-300">Kavelogics Client</figcaption>
//             </figure>

//             {/* Button */}
//             <div className="mt-6">
//               <button className="bg-[#00D280] text-white px-6 py-3 text-lg rounded-lg hover:bg-[#00b96a] transition">
//                 See Case Study
//               </button>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="flex-1 flex items-center justify-center mt-6 lg:mt-0">
//             <Image
//               src="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/111cfda1-e2c0-4fb1-aafc-a017b4953200/w=384,q=75"
//               alt="Success Case Study"
//               width={484}
//               height={484}
//               className="rounded-xl object-cover"
//               priority
//             />
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// };

// export default SuccessStoriesPage;
