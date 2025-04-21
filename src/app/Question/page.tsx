'use client';

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

// type FAQItem = {
//   question: string;
//   answer: string;
// };

const faqs= [
  {
    question: "What is the significance of UI/UX services?",
    answer: "UI/UX design improves user satisfaction, engagement, and conversion by making your product intuitive and attractive.",
  },
  {
    question: "Would using digital marketing services be beneficial for my company?",
    answer: "Yes, digital marketing can significantly increase your reach, drive traffic, and grow your business online.",
  },
  {
    question: "Does Kavelogics provide custom web-development?",
    answer: "Yes, we offer tailor-made web development services to meet your unique business needs.",
  },
  {
    question: "What is the cost of developing custom software?",
    answer: "The cost varies depending on project complexity, features, and time required. Book a consultation for an accurate quote.",
  },
  {
    question: 'What kind of services are provided by Keylogics?',
    answer: 'At Kavelogics, we provide a comprehensive range of services such as: AI Development, Mobile App Development, Website Development, UI/UX Design, Digital Marketing, SEO, and SaaS-based solutions.'
  },
  {
    question: 'How can I contact Keylogics support?',
    answer: 'Kavelogics offers full post-development support for all services. Whether it’s software development, digital marketing, or app development, we ensure continuous, effective support.'
  },
  {
    question: 'Does Keylogics offer custom software solutions?',
    answer: 'Yes, we offer custom software solutions including mobile app development, AI, and computer vision applications. We value collaboration and transparency in our client relationships.'
  },
  {
    question: 'Where is Keylogics located?',
    answer: 'Keylogics is headquartered in Lahore, Pakistan, with regional offices in Dubai and London.'
  },
  {
    question: 'What industries does Keylogics serve?',
    answer: 'We serve healthcare, education, finance, e-commerce, and several other industries.'
  }
];

const Page=()=> {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
       <div  className='text-center text-3xl md:text-5xl font-bold mt-12 md:mt-24 mb-15'>Frequently Asked Questions</div>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const contentRef = useRef<HTMLDivElement>(null);

        return (
          <div
            key={index}
            className="bg-white border border-gray-100  rounded-lg shadow-sm mb-4 transition-all duration-300"
          >
            <button
              className="flex justify-between cursor-pointer items-center w-full p-4 py-8 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-bold text-black text-left">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-white bg-[#00d280] rounded-xl transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer with smooth sliding */}
            <div
              ref={contentRef}
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                maxHeight: isOpen
                  ? `${contentRef.current?.scrollHeight}px`
                  : "0px",
              }}
            >
              <div className="px-4 pb-4 text-black">{faq.answer}</div>
            </div>
          </div>
        );
      })}

      <div className="flex justify-center mt-4 md:mt-8">
        <button className="bg-[#00d280] text-white px-5 py-5 mt-8 mb-5 md:mb-20 rounded-lg font-semibold hover:bg-green-600 transition duration-200">
          Book Consultation
        </button>
      </div>
    </div>
  );
}
export default Page;