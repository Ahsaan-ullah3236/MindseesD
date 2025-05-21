'use client';

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Why are UI/UX services important?",
    answer: "UI/UX services are essential for creating seamless and engaging user experiences. By focusing on both design and usability, they help improve customer satisfaction, increase engagement, and drive conversions, ensuring your product stands out and meets user needs effectively.",
  },
  {
    question: "Would digital marketing services benefit my company?",
    answer: "Yes, digital marketing services can significantly boost your online presence, increase brand visibility, and drive targeted traffic to your website, ultimately helping you grow your customer base and achieve your business goals.",
  },
  {
    question: "Does MindSees offer custom web development services?",
    answer: "Yes, we provide custom web development services designed to meet your unique business needs.",
  },
  {
    question: "What does it cost to develop custom software?",
    answer: "The cost depends on the project's complexity, features, and time requirements. Schedule a consultation for a personalized quote.",
  },
  {
    question: 'What services does MindSees offer?',
    answer: 'At MindSees, we offer a wide range of services, including AI development, mobile app development, website development, UI/UX design, digital marketing, SEO, and SaaS-based solutions.'
  },
  {
    question: 'How can I get in touch with MindSees support?',
    answer: "MindSees provides comprehensive post-development support for all our services. Whether it's software development, digital marketing, or app development, we ensure ongoing, effective assistance."
  },
  {
    question: 'Where is MindSees located?',
    answer: 'MindSees is headquartered in Lahore, Pakistan, with additional offices in Dubai and London.'
  },
  {
    question: 'Which industries does MindSees serve?',
    answer: 'We serve a variety of industries, including healthcare, education, finance, e-commerce, and more.'
  }
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 -mt-5">
      <div className='text-center text-3xl sm:text-4xl font-semibold sm:text-bold  mb-15'>
        Frequently Asked Questions
      </div>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-lg shadow-sm mb-4 transition-all duration-300"
          >
            <button
              className="flex justify-between cursor-pointer items-center w-full p-4 py-8 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-bold text-black text-left">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-white bg-[#00d280] rounded-xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              ref={(el) => void (contentRefs.current[index] = el)}
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                maxHeight: isOpen
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : "0px",
              }}
            >
              <div className="px-4 pb-4 text-black">{faq.answer}</div>
            </div>
          </div>
        );
      })}

      <div className="flex justify-center mt-4 md:mt-8">
        <Link href={"/contact-us"}>
          <button className="bg-[#00d280] cursor-pointer text-white px-5 py-5 mt-8 mb-5 md:mb-20 rounded-lg font-semibold transition duration-200">
            Book Consultation
          </button>
        </Link>

      </div>
    </div>

  );
}
export default Page;