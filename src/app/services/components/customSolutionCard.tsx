// components/BenefitsSection.tsx
"use client"
import Image from "next/image";
import Link from "next/link";

type Solution = {
  title: string;
  description: string;
  icon: string;
};

type SolutionSectionProps = {
  heading: string;
  subHeading:string;
  Solution: Solution[];
};

export default function CustomSolutionCard({ heading,subHeading, Solution }: SolutionSectionProps) {
  return (
    <div className="spacing-secton max-w-6xl mx-auto py-16">
      <div className="text-[38px] text-[#013a54]  font-bold text-center"style={{lineHeight:"42px"}}>{heading}</div>
      <div className="text-[18px]  text-[#013a54] max-w-3xl mx-auto  mb-22 mt-8 text-center"style={{lineHeight:"22px"}}>{subHeading}</div>
     
      <div className="three-divs grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {Solution.map((Solution, index) => (
          <div key={index} className="value-card mx-auto p-6 bg-[#d6f1ff] pb-8 pt-5 rounded-md hover:shadow-lg">
            <Image
              src={Solution.icon}
              width={40}
              height={40}
              alt={`${Solution.title} Icon`}
              className="mx-auto mt-5"
            />
            <h2 className="text-xl text-[#013a54] text-center font-bold mt-6">{Solution.title}</h2>
            <p className="text-[16px] font-normal text-[#013a54] text-center mt-6" style={{lineHeight:"20px"}}>{Solution.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center ">
      <Link href="/contact-us">
            <button className="bg-[#00d280] mt-16 cursor-pointer text-white font-medium text-sm md:text-lg py-4 px-4 rounded-md transition-colors duration-300">
              Talk to our Experts
            </button>
          </Link>
      </div>

    </div>
  );
}
