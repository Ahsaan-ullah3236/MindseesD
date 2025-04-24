// components/FaqAccordion.tsx

"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  faqs,
  title = "Frequently Asked Questions",

}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 pb-30">
      <div className="text-center text-3xl md:text-[44px] font-bold mt-12 md:mt-10 mb-17">
        {title}
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
                className={`w-6 h-6 text-white bg-[#00d280] rounded-xl transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
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

      
    </div>
  );
};
