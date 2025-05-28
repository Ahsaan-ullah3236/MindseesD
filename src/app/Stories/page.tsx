// components/TestimonialSlider.tsx
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import projectimage from "@/app/Stories/image/image.svg"
// import personImage from "@/app/Stories/image/person.jpeg"
import casestudy from "@/app/Stories/image/image.svg"
import person from "@/app/Stories/image/person.jpeg"
import Link from 'next/link';

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
      name: "Edtech",
      title: 'Wellness is a website which is empowering individuals to lead healthier lives through comprehensive, compassionate and innovative healthcare services.',
      services: ['Website Design', 'Website Development', 'QA'],
      testimonial: 'MindSees transformed our wellness platform with expert design and innovative healthcare services, earning excellent feedback. Highly recommended for high quality design and development services.',
      author: 'Wade Warren',
      role: 'Co-Founder',
      cta: 'See Case Study',
      imageUrl: projectimage,

      discoverText: 'Discover the Wellness Medical Center Difference',
      description: ''
    },
    {
      id: 2,
      name: "Entertainment",
      title: 'Second testimonial content would go here with different text.',
      services: ['UI/UX Design', 'Mobile Development', 'Testing'],
      testimonial: 'Another great testimonial about the services provided with different feedback from a client.',
      author: 'Jane Smith',
      role: 'CEO',
      cta: 'See Case Study',
      imageUrl: casestudy,
      discoverText: 'Discover More Benefits',
      description: ''
    },

  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className=' mx-auto mt-2 '>
      <div className="text-3xl sm:text-4xl font-semibold sm:text-bold text-black  text-center  mt-12 sm:-mt-0" style={{ lineHeight: "42px" }}> Our Success Stories</div>
      <div className="text-[18px] text-black max-w-3xl mx-auto mb-10  mt-6 text-center px-2" style={{ lineHeight: "22px" }}>Read testimonials from our satisfied clients who have experienced our outstanding services. See how we have helped businesses like yours succeed and enhance their online presence.</div>
      <div className="relative   flex items-center justify-center spacing-secton px-2 md:px-4">
        <div className="w-full mx-auto mb-20">
          <div className="bg-[#023047] rounded-2xl overflow-hidden">
            {/* Slider content */}
            <div className="relative h-full">
              {/* Slides */}
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 mt-2 p-4 sm:p-10">
                    <div className="grid md:grid-cols-2 gap-10">
                      {/* Left column */}
                      <div>
                        <h1 className="text-3xl sm:text-4xl font-semibold sm:text-bold text-white mb-6">{testimonial.name}</h1>
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

                        <div className="p-6 rounded-lg mb-8 ">
                          <p className="text-white italic mb-4">{testimonial.testimonial}</p>
                          <div className="flex mt-6">
                            <Image src={person} alt='avatar' width={65} height={65} className=' object-cover rounded-full mr-3' />
                            <div>
                              <p className="font-medium text-white text-xl mt-2">{testimonial.author}</p>
                              <p className="text-white font-small">{testimonial.role}</p>
                            </div>

                          </div>
                        </div>
                        <Link href="/case-studies/opstionA">
                          <button className="bg-[#00d280] text-white px-6 py-4 rounded-lg font-bold text-md cursor-pointer">
                            {testimonial.cta}
                          </button>
                        </Link>

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
          className="absolute left-[34%] md:left-[40%]  lg:left-[45%] 2xl:left-[46%] -bottom-2 -translate-y-1/2 bg-[#00d280] cursor-pointer p-3 rounded-full shadow-md  z-10"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[34%] md:right-[40%] lg:right-[45%] 2xl:right-[46%] -bottom-2 -translate-y-1/2 bg-[#00d280] cursor-pointer p-3 rounded-full shadow-md  z-10"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

  );
}
